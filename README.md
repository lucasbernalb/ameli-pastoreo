# 🥚 Ameli Pastoreo

Website para Ameli Pastoreo - Huevos naturales de pastoreo en Perú.

## 🚀 Tech Stack

- **React 18** + **TypeScript**
- **Vite 5** - Build tool
- **Tailwind CSS 4** - Styling
- **Framer Motion** - Animations

## 📦 Instalación

```bash
# Instalar dependencias
npm install

# Variables de entorno
cp .env.example .env
# Editar .env con los valores reales

# Desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview
```

## ⚙️ Configuración

### Variables de Entorno (.env)

#### Frontend (`VITE_*`)

Variables públicas inlineadas por Vite en el bundle del cliente.

| Variable | Descripción | Ejemplo |
|----------|-------------|---------|
| `VITE_WHATSAPP_NUMBER` | Número de WhatsApp (solo números, sin +) | `5989621580` |
| `VITE_INSTAGRAM_USERNAME` | Usuario de Instagram (sin @) | `amelipastoreo` |
| `VITE_SITE_URL` | URL pública del sitio (para Open Graph) | `https://tudominio.vercel.app` |

#### Backend (server-only)

Variables que **solo** consume el backend (Vercel Functions). No viajan al bundle del cliente; se configuran en el dashboard de Vercel.

| Variable | Descripción |
|----------|-------------|
| `ADMIN_PASSWORD` | Password de acceso al panel admin |
| `SESSION_SECRET` | Secreto para firmar el JWT de sesión (cookie `__Host-session`) |
| `GOOGLE_SCRIPT_URL` | URL del Google Apps Script (lectura de leads en el panel admin) |
| `MAKE_WEBHOOK_URL` | URL del Webhook de Make (escritura de leads del formulario) |

## 🚢 Deploy a Vercel

1. Conectar el repo en [vercel.com](https://vercel.com)
2. Configurar las variables de entorno en el dashboard
3. Deploy automático en cada push a `main`

```bash
# O desde CLI
npm i -g vercel
vercel
```

## 📁 Estructura del Proyecto

```
src/
├── pages/               # Páginas de la app
│   ├── landing/         # Landing de producción (LandingPage + barrel)
│   └── admin/           # Panel admin (login, tabla de leads)
├── features/            # Lógica por feature
│   └── landing/
│       ├── sections/    # Secciones: Hero, AboutSection, PlansSection, FormSection, GallerySection
│       ├── layout/      # Navbar, Footer, WhatsAppFloat, SectionSeparator
│       ├── plans/       # PlanCard, PlansCarousel, PlanContext, data/plans.ts
│       ├── media/       # ImageMaskReveal, VideoOnHover
│       └── hooks/       # useActiveSection
├── components/          # Componentes reutilizables
│   └── Loader/          # Loader con precarga de assets
├── config/              # Configuración centralizada
│   └── index.ts         # URLs, contacto, metadata
├── lib/                 # Utilidades
│   └── scrollTo.ts
├── types/               # Tipos de TypeScript
│   └── lead.ts
├── assets/              # Fuentes e íconos
├── main.tsx
└── index.css            # Tailwind + custom theme
```

## 🔒 Seguridad

- Headers de seguridad configurados en `vercel.json`
- Variables sensibles en `.env` (nunca en el repo)
- CSP headers básicos
- Console.log removidos en producción

## 📝 SEO

- Meta tags completos (title, description, keywords)
- Open Graph tags para redes sociales
- Twitter Card tags
- sitemap.xml y robots.txt
- Canonical URL

## 🎨 Personalización

### Colores (en `src/index.css`)

```css
--color-cream: #FFFEF7;
--color-cream-dark: #FFF5E6;
--color-egg-yellow: #F5C242;
--color-orange: #E8944A;
--color-green: #7B9E6B;
--color-brown: #5C4033;
```

### Productos (en `src/features/landing/plans/data/plans.ts`)

Editar el array `products` para cambiar los productos mostrados.

## 📄 Licencia

Privado - Ameli Pastoreo © 2026

## 📚 Project Documentation

- README.md → instalación y configuración
- AGENTS.md → arquitectura y responsabilidades
- DESIGN_SYSTEM.md → reglas visuales del proyecto
- RESPONSIVE.md → adaptación a tablet y mobile