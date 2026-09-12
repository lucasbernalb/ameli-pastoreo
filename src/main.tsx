import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { AdminPage } from '@/pages/admin'
import { LandingPage } from '@/pages/landing'
import { AmeliLoader } from '@/components/Loader'
import { PlanProvider } from '@/features/landing/plans/PlanProvider'

const normalizedPathname = window.location.pathname.replace(/\/+$/, '') || '/'
const isAdminRoute = normalizedPathname === '/admin' || normalizedPathname.startsWith('/admin/')

if (isAdminRoute) {
  document.title = 'Admin | Ameli Pastoreo'
  document.querySelector('meta[name="robots"]')?.setAttribute('content', 'noindex, nofollow')
  document.querySelector('meta[name="description"]')?.setAttribute('content', 'Panel de administración de Ameli Pastoreo.')
  document.querySelector('link[rel="canonical"]')?.remove()
  document.querySelectorAll('meta[property^="og:"], meta[name^="twitter:"]').forEach((meta) => meta.remove())
  document.querySelector('script[type="application/ld+json"]')?.remove()
}

export const Page = () => {
  if (isAdminRoute) {
    return <AdminPage />
  }
  return (
    <PlanProvider>
      <AmeliLoader>
        <LandingPage />
      </AmeliLoader>
    </PlanProvider>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Page />
  </StrictMode>,
)
