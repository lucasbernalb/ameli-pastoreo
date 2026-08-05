import type { IncomingMessage, ServerResponse } from 'node:http';
import { SESSION_COOKIE_NAME, verifySessionToken } from '../lib/session';
import { getLeads } from '../lib/apps-script';

function getSessionToken(cookieHeader: string | undefined): string | null {
  if (!cookieHeader) return null;
  for (const part of cookieHeader.split(';')) {
    const [name, ...rest] = part.trim().split('=');
    if (name === SESSION_COOKIE_NAME) {
      return rest.join('=');
    }
  }
  return null;
}

export default async function handler(req: IncomingMessage, res: ServerResponse): Promise<void> {
  res.setHeader('Cache-Control', 'no-store');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');

  if (req.method !== 'GET') {
    res.statusCode = 405;
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.end(JSON.stringify({ ok: false, code: 'METHOD_NOT_ALLOWED', error: 'Método no permitido' }));
    return;
  }

  const token = getSessionToken(req.headers.cookie);
  const valid = token ? await verifySessionToken(token) : false;

  if (!valid) {
    res.statusCode = 401;
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.end(JSON.stringify({ ok: false, code: 'UNAUTHORIZED', error: 'No autorizado' }));
    return;
  }

  try {
    const data = await getLeads();
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.end(JSON.stringify({ ok: true, data }));
  } catch {
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.end(JSON.stringify({ ok: false, code: 'UPSTREAM_ERROR', error: 'Error al obtener registros' }));
  }
}
