import type { Product, Value, Differentiator, GalleryImage } from '../types';

export const products: Product[] = [
  {
    id: 1,
    name: 'Docena Premium',
    description: '12 huevos frescos de gallinas felices',
    price: 'S/ 12.00',
    unit: '12 unidades',
    gradient: 'from-egg-yellow to-orange',
    badge: 'Más vendido',
  },
  {
    id: 2,
    name: 'Pack Tradicional',
    description: '6 huevos para probar la diferencia',
    price: 'S/ 7.00',
    unit: '6 unidades',
    gradient: 'from-orange to-egg-yellow',
  },
  {
    id: 3,
    name: 'Maple Familiar',
    description: '30 huevos para familias grandes',
    price: 'S/ 28.00',
    unit: '30 unidades',
    gradient: 'from-green to-green-dark',
  },
  {
    id: 4,
    name: 'Caja Economica',
    description: '60 huevos al mejor precio',
    price: 'S/ 50.00',
    unit: '60 unidades',
    gradient: 'from-egg-yellow-light to-egg-yellow',
  },
];

export const brandValues: Value[] = [
  {
    title: 'Hacemos la diferencia',
    subtitle: 'Calidad que se siente',
    gradient: 'from-egg-yellow to-orange',
    icon: '✨',
  },
  {
    title: 'Producción natural',
    subtitle: 'Respeto por el campo',
    gradient: 'from-green to-green-dark',
    icon: '🌿',
  },
  {
    title: 'Del campo a tu mesa',
    subtitle: 'Frescura garantizada',
    gradient: 'from-orange to-egg-yellow',
    icon: '🏡',
  },
];

export const differentiators: Differentiator[] = [
  {
    title: 'Gallinas Libres',
    description: 'Nuestras gallinas vagan libremente por amplios campos, respirando aire fresco y disfrutando del sol.',
    emoji: '🐔',
    gradient: 'from-egg-yellow-light to-egg-yellow',
  },
  {
    title: 'Alimentación Natural',
    description: 'Comen insectos, pasto y granos naturales. Sin hormonas ni antibióticos añadidos.',
    emoji: '🌿',
    gradient: 'from-green to-green-dark',
  },
  {
    title: 'Calidad Superior',
    description: 'Yemas más coloridas, cáscaras más fuertes y un sabor que notarás en cada bocado.',
    emoji: '⭐',
    gradient: 'from-orange to-egg-yellow',
  },
];

export const galleryImages: GalleryImage[] = [
  { id: 1, gradient: 'from-egg-yellow to-orange', icon: '🐔', alt: 'Gallinas en el campo' },
  { id: 2, gradient: 'from-green to-green-dark', icon: '🌿', alt: 'Alimentación natural' },
  { id: 3, gradient: 'from-orange to-egg-yellow', icon: '🥚', alt: 'Huevos frescos' },
  { id: 4, gradient: 'from-green-dark to-green', icon: '🏠', alt: 'Nuestra granja' },
  { id: 5, gradient: 'from-orange-light to-orange', icon: '🌾', alt: 'Campos abiertos' },
  { id: 6, gradient: 'from-egg-yellow-light to-egg-yellow', icon: '☀️', alt: 'Amanecer en la granja' },
];

export const navItems = [
  { name: 'Inicio', href: '#inicio' },
  { name: 'Nosotros', href: '#nosotros' },
  { name: 'Productos', href: '#productos' },
  { name: 'Galería', href: '#galeria' },
  { name: 'Contacto', href: '#contacto' },
];

export const brandQuote = '"Creemos que los mejores huevos vienen de gallinas felices que viven libres y comen natural."';
