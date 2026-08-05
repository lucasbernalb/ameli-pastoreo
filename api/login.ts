import type { IncomingMessage, ServerResponse } from 'node:http';
import { createSessionToken, buildSessionCookie, constantTimeEqual } from './lib/session.js';
import { readJsonBody, HttpError } from './lib/http.js';

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

function sendJson(res: ServerResponse, status: number, body: Record<string, unknown>): void {
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.end(JSON.stringify(body));
}

export default async function handler(req: IncomingMessage, res: ServerResponse): Promise<void> {
  if (req.method !== 'POST') {
    sendJson(res, 405, { ok: false, code: 'METHOD_NOT_ALLOWED', error: 'Método no permitido' });
    return;
  }

  if (!ADMIN_PASSWORD) {
    sendJson(res, 500, { ok: false, code: 'INTERNAL', error: 'Error interno' });
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
    sendJson(res, 500, { ok: false, code: 'INTERNAL', error: 'Error interno' });
    return;
  }

  const password = (body as { password?: unknown }).password;
  if (typeof password !== 'string' || password.length === 0) {
    sendJson(res, 400, { ok: false, code: 'INVALID_BODY', error: 'Contraseña requerida' });
    return;
  }

  if (!constantTimeEqual(password, ADMIN_PASSWORD)) {
    sendJson(res, 401, { ok: false, code: 'INVALID_CREDENTIALS', error: 'Contraseña incorrecta' });
    return;
  }

  const token = await createSessionToken();
  res.setHeader('Set-Cookie', buildSessionCookie(token));
  sendJson(res, 200, { ok: true });
}
