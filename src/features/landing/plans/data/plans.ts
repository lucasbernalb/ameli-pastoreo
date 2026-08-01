export const PLANS_DATA = [
  { value: 'individual', formValue: 'Plan Individual (12 huevos por semana)', label: '12', title: 'Plan Individual', description: '', benefits: ['Entrega a domicilio', 'Frescura garantizada', 'Atención personalizada', 'Envase 100% reciclable'], popular: false, chipLabel: '12 HUEVOS', chipSubtitle: 'Plan Individual', price: 960, customPriceLabel: null },
  { value: 'amigo', formValue: 'Plan Amigo (18 huevos por semana)', label: '18', title: 'Plan Amigo', description: '', benefits: ['Entrega a domicilio', 'Frescura garantizada', 'Atención personalizada', 'Envase 100% reciclable'], popular: false, chipLabel: '18 HUEVOS', chipSubtitle: 'Más elegido', price: 1400, customPriceLabel: null },
  { value: 'estandar', formValue: 'Plan Estándar (24 huevos por semana)', label: '24', title: 'Plan Estándar', description: '', benefits: ['Entrega a domicilio', 'Frescura garantizada', 'Atención personalizada', 'Envase 100% reciclable'], popular: false, chipLabel: '24 HUEVOS', chipSubtitle: 'Ideal para familias pequeñas', price: 1550, customPriceLabel: null },
  { value: 'familiar', formValue: 'Plan Familiar (30 huevos por semana)', label: '30', title: 'Plan Familiar', description: '', benefits: ['Entrega a domicilio', 'Frescura garantizada', 'Atención personalizada', 'Envase 100% reciclable'], popular: true, chipLabel: '30 HUEVOS', chipSubtitle: 'Más elegido', price: 1800, customPriceLabel: null },
  { value: 'personalizado', formValue: 'Plan Personalizado (+30 huevos por semana)', label: '+30', title: 'Plan Personalizado', description: '', benefits: ['Entrega a domicilio', 'Frescura garantizada', 'Atención personalizada', 'Envase 100% reciclable'], popular: false, chipLabel: '+30 HUEVOS', chipSubtitle: 'Personalizado', price: null, customPriceLabel: 'Presupuesto personalizado' },
];

export const PLAN_VALUE_MAP: Record<string, string> = Object.fromEntries(
  PLANS_DATA.map((p) => [p.value, p.formValue])
);
