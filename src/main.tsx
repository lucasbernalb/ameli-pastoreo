import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { AdminPage } from '@/pages/admin'
import { LandingPage } from '@/pages/landing'
import { AmeliLoader } from '@/components/Loader'
import { PlanProvider } from '@/features/landing/plans/PlanProvider'

export const Page = () => {
  if (window.location.pathname === '/admin') {
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
