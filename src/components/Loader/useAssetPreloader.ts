import { useEffect, useRef, useState } from 'react'

const LOGOS = [
  '/logo-ameli/logotipo1.png',
  '/logo-ameli/logotipo2.png',
  '/logo-ameli/logotipo3.png',
  '/logo-ameli/logotipo4.png',
]

const CRITICAL_IMAGES = [
  '/images/optimized/chickens-group.webp',
  '/images/optimized/chickens-group2.webp',
  '/logo-ameli/logo ameli corregido blanco.png',
  '/texturas/278759-egg-shell.png',
  ...LOGOS,
]

const CRITICAL_VIDEOS = [
  '/videos/video-gallinero-pasto-moviendose.mp4',
]

function preloadImage(src: string): Promise<void> {
  return new Promise((resolve) => {
    const img = new Image()
    img.onload = () => resolve()
    img.onerror = () => resolve()
    img.src = src
  })
}

function preloadVideo(src: string): Promise<void> {
  return new Promise((resolve) => {
    const video = document.createElement('video')
    video.muted = true
    video.playsInline = true
    video.preload = 'auto'

    let settled = false
    const resolveOnce = () => {
      if (!settled) {
        settled = true
        resolve()
      }
    }

    video.addEventListener('canplaythrough', resolveOnce, { once: true })
    video.addEventListener('error', resolveOnce, { once: true })
    video.addEventListener('abort', resolveOnce, { once: true })

    video.src = src
    video.load()

    setTimeout(resolveOnce, 10000)
  })
}

export function useAssetPreloader() {
  const [ready, setReady] = useState(false)
  const [progress, setProgress] = useState(0)
  const mountedRef = useRef(true)

  useEffect(() => {
    mountedRef.current = true

    const total = CRITICAL_IMAGES.length + CRITICAL_VIDEOS.length
    let completed = 0

    const increment = () => {
      if (!mountedRef.current) return
      completed++
      setProgress(Math.min(completed / total, 1))
      if (completed >= total) {
        setReady(true)
      }
    }

    const imagePromises = CRITICAL_IMAGES.map((src) =>
      preloadImage(src).then(increment)
    )
    const videoPromises = CRITICAL_VIDEOS.map((src) =>
      preloadVideo(src).then(increment)
    )

    Promise.all([...imagePromises, ...videoPromises]).then(() => {
      if (mountedRef.current) setReady(true)
    })

    return () => {
      mountedRef.current = false
    }
  }, [])

  return { ready, progress }
}
