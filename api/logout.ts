import type { IncomingMessage, ServerResponse } from 'node:http';
import { buildClearSessionCookie } from './lib/session';

export default async function handler(req: IncomingMessage, res: ServerResponse): Promise<void> {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.end(JSON.stringify({ ok: false, code: 'METHOD_NOT_ALLOWED', error: 'Método no permitido' }));
    return;
  }

  res.setHeader('Set-Cookie', buildClearSessionCookie());
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.end(JSON.stringify({ ok: true }));
}
