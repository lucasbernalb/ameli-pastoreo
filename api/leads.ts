import type { IncomingMessage, ServerResponse } from 'node:http';
import { createLead } from './lib/apps-script.js';
import { readJsonBody, HttpError } from './lib/http.js';

function sendJson(res: ServerResponse, status: number, body: Record<string, unknown>): void {
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.end(JSON.stringify(body));
}

function stripHtml(value: string): string {
  return value.replace(/<[^>]*>/g, '');
}

type Field = 'nombre' | 'email' | 'telefono' | 'localidad' | 'plan';

type ValidationRule = {
  required: boolean;
  maxLength: number;
  minLength?: number;
  validate?: (value: string) => boolean;
  error: string;
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const RULES: Record<Field, ValidationRule> = {
  nombre: {
    required: true,
    maxLength: 50,
    minLength: 2,
    error: 'El nombre es obligatorio.',
  },
  email: {
    required: true,
    maxLength: 100,
    validate: (value) => EMAIL_REGEX.test(value),
    error: 'Ingresá un email válido.',
  },
  telefono: {
    required: true,
    maxLength: 15,
    minLength: 4,
    error: 'Ingresá al menos 4 dígitos.',
  },
  localidad: {
    required: true,
    maxLength: 50,
    minLength: 2,
    error: 'La localidad es obligatoria.',
  },
  plan: {
    required: true,
    maxLength: 100,
    error: 'Seleccioná un plan.',
  },
};

function validateBody(body: unknown): { data?: Record<Field, string>; error?: string } {
  const raw = (body ?? {}) as Record<string, unknown>;
  const result = {} as Record<Field, string>;

  for (const field of Object.keys(RULES) as Field[]) {
    const rule = RULES[field];
    const value = typeof raw[field] === 'string' ? (raw[field] as string) : '';

    if (rule.required && !value.trim()) {
      return { error: rule.error };
    }

    const clean = field === 'telefono' ? value.replace(/\D/g, '').slice(0, rule.maxLength) : stripHtml(value.trim()).slice(0, rule.maxLength);

    if (rule.minLength && clean.length < rule.minLength) {
      return { error: rule.error };
    }

    if (rule.validate && !rule.validate(clean)) {
      return { error: rule.error };
    }

    result[field] = clean;
  }

  return { data: result };
}

export default async function handler(req: IncomingMessage, res: ServerResponse): Promise<void> {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    sendJson(res, 405, { ok: false, code: 'METHOD_NOT_ALLOWED', error: 'Método no permitido' });
    return;
  }

  let body: unknown;
  try {
    body = await readJsonBody(req);
  } catch (err) {
    if (err instanceof HttpError) {
      sendJson(res, err.status, { ok: false, code: err.code, error: err.message });
      return;
    }
    sendJson(res, 500, { ok: false, code: 'UPSTREAM_ERROR', error: 'Error de conexión. Intentá nuevamente.' });
    return;
  }

  const { data, error } = validateBody(body);
  if (!data || error) {
    sendJson(res, 400, { ok: false, code: 'VALIDATION_ERROR', error });
    return;
  }

  try {
    await createLead({
      ...data,
      telefono: `+598 ${data.telefono}`,
      origen: 'Landing Cinematic',
    });
    sendJson(res, 200, { ok: true });
  } catch {
    sendJson(res, 500, { ok: false, code: 'UPSTREAM_ERROR', error: 'Error de conexión. Intentá nuevamente.' });
  }
}
