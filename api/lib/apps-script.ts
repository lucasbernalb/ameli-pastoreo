const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL;

export interface Lead {
  fecha: string;
  nombre: string;
  email: string;
  telefono: string;
  localidad: string;
  plan: string;
  origen?: string;
}

export interface CreateLeadInput {
  nombre: string;
  email: string;
  telefono: string;
  localidad: string;
  plan: string;
  origen?: string;
}

export async function getLeads(): Promise<Lead[]> {
  if (!GOOGLE_SCRIPT_URL) {
    throw new Error('GOOGLE_SCRIPT_URL no configurado');
  }
  const res = await fetch(GOOGLE_SCRIPT_URL, { redirect: 'follow' });
  if (!res.ok) {
    throw new Error(`Apps Script respondió con estado ${res.status}`);
  }
  const json = (await res.json()) as { success?: boolean; data?: unknown; error?: string };
  if (!json.success) {
    throw new Error(json.error || 'Error al obtener registros');
  }
  if (!Array.isArray(json.data)) {
    throw new Error('Formato de respuesta inválido');
  }
  return json.data as Lead[];
}

export async function createLead(input: CreateLeadInput): Promise<void> {
  if (!GOOGLE_SCRIPT_URL) {
    throw new Error('GOOGLE_SCRIPT_URL no configurado');
  }
  const params = new URLSearchParams({ ...input });
  const res = await fetch(GOOGLE_SCRIPT_URL, {
    method: 'POST',
    body: params,
    redirect: 'follow',
  });
  if (!res.ok) {
    throw new Error(`Apps Script respondió con estado ${res.status}`);
  }
}
