import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  
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
})
