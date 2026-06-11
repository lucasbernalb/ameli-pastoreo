import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { MockC } from './pages/MockC'
import { AdminPage } from './pages/admin'

const Page = () => {
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
