# 🥚 Ameli Pastoreo

Website para Ameli Pastoreo - Huevos naturales de pastoreo en Perú.

## 🚀 Tech Stack

- **React 18** + **TypeScript**
- **Vite 5** - Build tool
- **Tailwind CSS 4** - Styling
- **Framer Motion** - Animations
- **React Three Fiber** - 3D graphics

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

| Variable | Descripción | Ejemplo |
|----------|-------------|---------|
| `VITE_WHATSAPP_NUMBER` | Número de WhatsApp (sin + ni espacios) | `51999999999` |
| `VITE_INSTAGRAM_USERNAME` | Usuario de Instagram (sin @) | `amelipastoreo` |
| `VITE_CONTACT_PHONE` | Teléfono de contacto | `+51 999 999 999` |
| `VITE_FARM_ADDRESS` | Dirección de la granja | `Km 45, Carretera Central, Lima` |
| `VITE_SITE_URL` | URL del sitio (para Open Graph) | `https://tudominio.vercel.app` |

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
├── config/          # Configuración centralizada
│   └── index.ts      # URLs, contacto, metadata
├── components/       # Componentes reutilizables
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── Scene3D.tsx   # Canvas 3D con huevo
│   ├── Egg.tsx       # Modelo 3D del huevo
│   └── Lights.tsx    # Iluminación 3D
├── sections/         # Secciones de la landing
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Products.tsx
│   ├── Gallery.tsx
│   └── Contact.tsx
├── data/             # Datos estáticos (productos, etc)
│   └── index.ts
├── types/            # TypeScript types
│   └── index.ts
├── App.tsx
├── main.tsx
└── index.css         # Tailwind + custom theme
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

### Productos (en `src/data/index.ts`)

Editar el array `products` para cambiar los productos mostrados.

## 📄 Licencia

Privado - Ameli Pastoreo © 2026

## 📚 Project Documentation

- README.md → instalación y configuración
- AGENTS.md → arquitectura y responsabilidades
- DESIGN_SYSTEM.md → reglas visuales del proyecto
- RESPONSIVE.md → adaptación a tablet y mobile