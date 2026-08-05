import type { IncomingMessage } from 'node:http';

export const MAX_BODY_BYTES = 2048;

export class HttpError extends Error {
  readonly status: number;
  readonly code: string;

  constructor(status: number, code: string, message: string) {
    super(message);
    this.status = status;
    this.code = code;
  }
}

export async function readJsonBody(req: IncomingMessage, maxBytes = MAX_BODY_BYTES): Promise<unknown> {
  const chunks: Buffer[] = [];
  let total = 0;

  for await (const chunk of req) {
    const buf = Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk);
    total += buf.length;
    if (total > maxBytes) {
      throw new HttpError(413, 'PAYLOAD_TOO_LARGE', 'El cuerpo de la solicitud excede el tamaño máximo');
    }
    chunks.push(buf);
  }

  if (total === 0) {
    return {};
  }

  try {
    return JSON.parse(Buffer.concat(chunks).toString('utf-8')) as unknown;
  } catch {
    throw new HttpError(400, 'INVALID_JSON', 'JSON inválido');
  }
}
