import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { AdminPage } from './pages/admin'
import { CinematicLanding } from './experiments/CinematicLanding'
import { AmeliLoader } from './components/Loader'

const Page = () => {
  if (window.location.pathname === '/admin') {
    return <AdminPage />
  }
  return (
    <AmeliLoader>
      <CinematicLanding />
    </AmeliLoader>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Page />
  </StrictMode>,
)
