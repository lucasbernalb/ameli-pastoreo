import { useEffect, useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { useAssetPreloader } from './useAssetPreloader'

export interface AmeliLoaderProps {
  children: React.ReactNode
}

/** Tiempo mínimo en pantalla para que el logo no "parpadee" si todo carga rápido. */
const MIN_VISIBLE_MS = 1400
/** Tope de seguridad: con mala conexión nunca se queda trabado más que esto. */
const MAX_VISIBLE_MS = 5000

const BG = '#5C4033'
const MARKER = '#F5C242'

export const AmeliLoader = ({ children }: AmeliLoaderProps) => {
  const { ready: assetsReady } = useAssetPreloader()
  const reduceMotion = useReducedMotion()
  const [minElapsed, setMinElapsed] = useState(false)
  const [maxElapsed, setMaxElapsed] = useState(false)

  useEffect(() => {
    const t1 = setTimeout(() => setMinElapsed(true), MIN_VISIBLE_MS)
    const t2 = setTimeout(() => setMaxElapsed(true), MAX_VISIBLE_MS)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [])

  const done = (assetsReady && minElapsed) || maxElapsed

  useEffect(() => {
    document.body.style.overflow = done ? '' : 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [done])

  return (
    <div className="relative min-h-screen">
      <div>{children}</div>

      <AnimatePresence>
        {!done && (
          <motion.div
            key="loader"
            role="status"
            aria-label="Cargando Ameli Pastoreo"
            className="fixed inset-0 z-50 flex flex-col items-center justify-center"
            style={{
              backgroundColor: BG,
              backgroundImage:
                'radial-gradient(ellipse at 50% 45%, rgba(255,255,255,0.07) 0%, rgba(0,0,0,0.18) 100%)',
            }}
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="flex flex-col items-center px-8">
              <motion.img
                src="/logo-ameli/logo-blanco.png"
                alt="Ameli, huevos de campo en pastoreo"
                width={359}
                height={184}
                className="w-56 md:w-72 h-auto select-none"
                initial={reduceMotion ? false : { opacity: 0, y: 14, filter: 'blur(6px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.9, ease: 'easeOut' }}
                draggable={false}
              />

              {/* Subrayado tipo marcador, dibujado a mano */}
              <svg
                viewBox="0 0 300 24"
                className="mt-6 w-40 md:w-52 h-auto overflow-visible"
                aria-hidden="true"
              >
                <motion.path
                  d="M4 14 C 40 6, 70 19, 110 11 S 190 5, 230 13 S 280 10, 296 8"
                  fill="none"
                  stroke={MARKER}
                  strokeWidth="7"
                  strokeLinecap="round"
                  initial={reduceMotion ? false : { pathLength: 0, opacity: 0.9 }}
                  animate={{ pathLength: 1, opacity: 0.9 }}
                  transition={{ delay: 0.35, duration: 1, ease: 'easeInOut' }}
                />
              </svg>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default AmeliLoader
