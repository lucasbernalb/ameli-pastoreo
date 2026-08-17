import { randomBytes } from 'node:crypto';

const MAKE_WEBHOOK_URL = process.env.MAKE_WEBHOOK_URL;

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
  if (!MAKE_WEBHOOK_URL) {
    throw new Error('MAKE_WEBHOOK_URL no configurado');
  }
  const payload = {
    ...input,
    leadId: generateLeadId(),
    fecha: new Date().toISOString(),
  };
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 10_000);
  try {
    const res = await fetch(MAKE_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      signal: controller.signal,
      redirect: 'follow',
    });
    // En el futuro: validar un JSON { ok: true } sin hacerlo obligatorio todavía.
    if (!res.ok) {
      throw new Error(`Make respondió con estado ${res.status}`);
    }
  } finally {
    clearTimeout(timeout);
  }
}
