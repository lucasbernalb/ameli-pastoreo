/**
 * Configuración centralizada del sitio
 * 
 * Uso: import { config } from '@/config';
 * o   import { WHATSAPP_NUMBER } from '@/config';
 */

// Números de contacto - Leer de variables de entorno con fallback a valores demo
const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '59891621580';
const instagramUsername = import.meta.env.VITE_INSTAGRAM_USERNAME || 'amelipastoreo';
const siteUrl = import.meta.env.VITE_SITE_URL || '';

// URLs de WhatsApp
export const WHATSAPP_BASE_URL = `https://wa.me/${whatsappNumber}`;
export const WHATSAPP_ORDER_URL = `${WHATSAPP_BASE_URL}?text=Hola!%20Quiero%20hacer%20un%20pedido%20de%20huevos%20Ameli%20Pastoreo`;
export const WHATSAPP_PERSONALIZED_URL = (productName: string) => 
  `${WHATSAPP_BASE_URL}?text=Hola!%20Quiero%20comprar%20${encodeURIComponent(productName)}`;

// URLs de redes sociales
export const INSTAGRAM_URL = `https://instagram.com/${instagramUsername}`;

// Información de contacto
export const CONTACT_INFO = {
  phone: '+598 91 621 580',
  whatsapp: whatsappNumber,
  address: 'km 24, Soca, Canelones',
  instagram: instagramUsername,
} as const;

// Metadata del sitio
export const SITE_CONFIG = {
  name: 'Ameli Pastoreo',
  tagline: 'Huevos de pastoreo, naturales y frescos',
  description: 'Huevos de pastoreo, naturales y frescos. Del campo a tu mesa.',
  url: siteUrl,
  locale: 'es_UY',
  author: 'Ameli Pastoreo',
  socialImage: '/og-image.svg',
} as const;

// Rutas de navegación
export const NAV_LINKS = [
  { name: 'Inicio', href: '#inicio' },
  { name: 'Nosotros', href: '#nosotros' },
  { name: 'Planes', href: '#planes' },
  { name: 'Galería', href: '#galeria' },
  { name: 'Contacto', href: '#contacto' },
] as const;

// Exportar todo como objeto para acceso rápido
export const config = {
  whatsapp: {
    number: whatsappNumber,
    baseUrl: WHATSAPP_BASE_URL,
    orderUrl: WHATSAPP_ORDER_URL,
    personalizedUrl: WHATSAPP_PERSONALIZED_URL,
  },
  social: {
    instagram: instagramUsername,
    instagramUrl: INSTAGRAM_URL,
  },
  contact: CONTACT_INFO,
  site: SITE_CONFIG,
  nav: NAV_LINKS,
} as const;
