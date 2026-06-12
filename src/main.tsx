import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { MockC } from './pages/MockC'
import { AdminPage } from './pages/admin'
import { HeroPrototype } from './experiments/HeroPrototype'
import { PhotoLanding } from './experiments/PhotoLanding'

const Page = () => {
  if (window.location.pathname === '/lab/hero') return <HeroPrototype />
  if (window.location.pathname === '/lab/photo') return <PhotoLanding />
  if (window.location.pathname === '/admin') {
    return <AdminPage />
  }
  return <MockC />
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Page />
  </StrictMode>,
)
