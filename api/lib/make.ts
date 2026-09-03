import { randomBytes } from 'node:crypto';

export type MakeErrorCode = 'CONFIG_MISSING' | 'CONFIG_INVALID' | 'UPSTREAM_STATUS' | 'UPSTREAM_FETCH';

export class MakeError extends Error {
  readonly code: MakeErrorCode;

  constructor(code: MakeErrorCode, message: string) {
    super(message);
    this.name = 'MakeError';
    this.code = code;
  }
}

export interface CreateLeadInput {
  nombre: string;
  email: string;
  telefono: string;
  localidad: string;
  plan: string;
  origen?: string;
}

function generateLeadId(): string {
  const now = new Date();
  const yyyy = now.getFullYear();
  const mm = String(now.getMonth() + 1).padStart(2, '0');
  const dd = String(now.getDate()).padStart(2, '0');
  const suffix = randomBytes(3).toString('hex').toUpperCase();
  return `LD-${yyyy}${mm}${dd}-${suffix}`;
}

export async function createLeadWithMake(input: CreateLeadInput): Promise<void> {
  const webhookUrl = process.env.MAKE_WEBHOOK_URL?.trim();
  if (!webhookUrl) {
    throw new MakeError('CONFIG_MISSING', 'MAKE_WEBHOOK_URL no configurado');
  }

  let parsedUrl: URL;
  try {
    parsedUrl = new URL(webhookUrl);
  } catch {
    throw new MakeError('CONFIG_INVALID', 'MAKE_WEBHOOK_URL no contiene una URL válida');
  }

  if (parsedUrl.protocol !== 'https:') {
    throw new MakeError('CONFIG_INVALID', 'MAKE_WEBHOOK_URL debe usar HTTPS');
  }

  const payload = {
    ...input,
    leadId: generateLeadId(),
    fecha: new Date().toISOString(),
  };
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 10_000);
  try {
    let res: Response;
    try {
      res = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        signal: controller.signal,
        redirect: 'follow',
      });
    } catch {
      throw new MakeError('UPSTREAM_FETCH', 'No se pudo contactar al webhook de Make');
    }
    // En el futuro: validar un JSON { ok: true } sin hacerlo obligatorio todavía.
    if (!res.ok) {
      throw new MakeError('UPSTREAM_STATUS', `Make respondió con estado ${res.status}`);
    }
  } finally {
    clearTimeout(timeout);
  }
}
