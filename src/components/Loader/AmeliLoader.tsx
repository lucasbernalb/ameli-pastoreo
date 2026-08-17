import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useAssetPreloader } from './useAssetPreloader'

interface LogoConfig {
  src: string
  bg: string
  accent: string
  scale: number
}

const LOGOS: LogoConfig[] = [
  { src: '/logo-ameli/logotipo1.png', bg: '#4A3426', accent: '#FFFFFF', scale: 0.86 },
  { src: '/logo-ameli/logotipo2.png', bg: '#F5C242', accent: '#5C4033', scale: 1 },
  { src: '/logo-ameli/logotipo3.png', bg: '#5C4033', accent: '#F5F0E8', scale: 1.02 },
  { src: '/logo-ameli/logotipo4.png', bg: '#F8F5F0', accent: '#5C4033', scale: 1.08 },
]

export interface AmeliLoaderProps {
  children: React.ReactNode
}

type Phase = 'loading' | 'ready' | 'complete'

const LOGO_DISPLAY_MS = 2500

const RING_CIRCUMFERENCE = 2 * Math.PI * 44

function hexToRgba(hex: string, alpha: number): string {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  return `rgba(${r},${g},${b},${alpha})`
}

export const AmeliLoader = ({ children }: AmeliLoaderProps) => {
  const { ready: assetsReady } = useAssetPreloader()
  const [phase, setPhase] = useState<Phase>('loading')
  const [logoIndex, setLogoIndex] = useState(0)
  const timerRef = useRef<ReturnType<typeof setTimeout>>()

  const allLogosSeen = logoIndex >= LOGOS.length - 1
  const accent = LOGOS[logoIndex].accent

  useEffect(() => {
    if (phase !== 'loading') return

    timerRef.current = setTimeout(() => {
      if (logoIndex < LOGOS.length - 1) {
        setLogoIndex((prev) => prev + 1)
      }
    }, LOGO_DISPLAY_MS)

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [logoIndex, phase])

  useEffect(() => {
    if (!(assetsReady && allLogosSeen)) return

    const t1 = setTimeout(() => setPhase('ready'), 0)
    const t2 = setTimeout(() => setPhase('complete'), 800)

    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [assetsReady, allLogosSeen])

  useEffect(() => {
    if (phase !== 'complete') {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [phase])

  const progress = (logoIndex + 0.5) / LOGOS.length

  return (
    <div className="relative min-h-screen">
      <div>
        {children}
      </div>

      <AnimatePresence>
        {phase !== 'complete' && (
          <motion.div
            key="loader"
            className="fixed inset-0 z-50 flex flex-col items-center justify-center"
            initial={{ backgroundColor: LOGOS[0].bg }}
            animate={{ backgroundColor: LOGOS[logoIndex].bg }}
            exit={{ opacity: 0, scale: 1.02, filter: 'blur(4px)' }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
          >
            <div className="relative w-56 h-56 md:w-64 md:h-64 flex items-center justify-center">
              <svg
                className="absolute inset-0 w-full h-full -rotate-90"
                viewBox="0 0 100 100"
                aria-hidden="true"
              >
                <circle
                  cx="50" cy="50" r="44"
                  fill="none"
                  stroke={hexToRgba(accent, 0.15)}
                  strokeWidth="1.5"
                />
                <motion.circle
                  cx="50" cy="50" r="44"
                  fill="none"
                  stroke={hexToRgba(accent, 0.35)}
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeDasharray={RING_CIRCUMFERENCE}
                  strokeDashoffset={RING_CIRCUMFERENCE * (1 - progress)}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                />
              </svg>

              <motion.div
                className="relative w-28 h-28 md:w-36 md:h-36"
                animate={{ scale: [1, 1.03, 0.98, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              >
                {LOGOS.map((logo, i) => (
                  <img
                    key={i}
                    src={logo.src}
                    alt="Ameli Pastoreo"
                    className="absolute inset-0 w-full h-full object-contain transition-all duration-500"
                    style={{
                      opacity: i === logoIndex ? 1 : 0,
                      transform: `scale(${logo.scale})`,
                      filter: i === logoIndex
                        ? 'drop-shadow(0 4px 20px rgba(0,0,0,0.08))'
                        : 'none',
                    }}
                  />
                ))}
              </motion.div>
            </div>

            <motion.p
              className="mt-10 text-xs tracking-[0.3em] uppercase font-light"
              style={{ color: hexToRgba(accent, 0.7) }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Ameli Pastoreo
            </motion.p>

            {phase === 'ready' && (
              <motion.div
                className="absolute bottom-16 left-1/2 -translate-x-1/2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex gap-1.5">
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: hexToRgba(accent, 0.3) }}
                      animate={{ opacity: [0.2, 0.6, 0.2] }}
                      transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2 }}
                    />
                  ))}
                </div>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default AmeliLoader
