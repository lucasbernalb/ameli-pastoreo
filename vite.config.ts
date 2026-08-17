import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const siteUrl = (env.VITE_SITE_URL || 'https://www.ameli.uy').replace(/\/+$/, '')

  return {
    plugins: [
      react(),
      tailwindcss(),
      {
        name: 'normalize-site-url-in-html',
        enforce: 'post' as const,
        transformIndexHtml(html: string) {
          return html
            .replaceAll('%VITE_SITE_URL%', siteUrl)
            .replaceAll(`${siteUrl}//`, `${siteUrl}/`)
        },
      },
    ],
  
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['react', 'react-dom', 'framer-motion', 'react-icons'],
        },
      },
    },
    chunkSizeWarningLimit: 600,
    // Remove console.log and debugger in production
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
  
  // Server configuration
  server: {
    port: 5173,
    host: true,
  },
  
  // Preview configuration (for production-like testing)
  preview: {
    port: 4173,
    host: true,
  },
  
  // Resolve aliases for cleaner imports
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  }
})
