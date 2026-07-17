export const PLANS_DATA = [
  { value: 'individual', formValue: 'Plan Individual (12 huevos por semana)', label: '12', title: 'Plan Individual', description: 'Ideal para 1-2 personas', benefits: ['Gallinas libres', '12 huevos frescos/sem', 'Entrega semanal'], popular: false, chipLabel: '12 HUEVOS', chipSubtitle: 'Plan Individual', price: 960, customPriceLabel: null },
  { value: 'amigo', formValue: 'Plan Amigo (18 huevos por semana)', label: '18', title: 'Plan Amigo', description: 'Ideal para parejas', benefits: ['Gallinas libres', '18 huevos frescos/sem', 'Entrega semanal'], popular: true, chipLabel: '18 HUEVOS', chipSubtitle: 'Más elegido', price: 1400, customPriceLabel: null },
  { value: 'estandar', formValue: 'Plan Estándar (24 huevos por semana)', label: '24', title: 'Plan Estándar', description: 'Ideal para consumo frecuente', benefits: ['Gallinas libres', '24 huevos frescos/sem', 'Entrega semanal'], popular: false, chipLabel: '24 HUEVOS', chipSubtitle: 'Ideal para familias pequeñas', price: 1550, customPriceLabel: null },
  { value: 'familiar', formValue: 'Plan Familiar (30 huevos por semana)', label: '30', title: 'Plan Familiar', description: 'Ideal para familias', benefits: ['Gallinas libres', '30 huevos frescos/sem', 'Entrega semanal'], popular: false, chipLabel: '30 HUEVOS', chipSubtitle: 'Plan Familiar', price: 1800, customPriceLabel: null },
  { value: 'personalizado', formValue: 'Plan Personalizado (+30 huevos por semana)', label: '+30', title: 'Plan Personalizado', description: 'Adaptado a tu consumo', benefits: ['Gallinas libres', 'Cantidad a medida', 'Entrega semanal'], popular: false, chipLabel: '+30 HUEVOS', chipSubtitle: 'Personalizado', price: null, customPriceLabel: 'Presupuesto personalizado' },
];

export const PLAN_VALUE_MAP: Record<string, string> = Object.fromEntries(
  PLANS_DATA.map((p) => [p.value, p.formValue])
);
