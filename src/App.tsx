import Navbar from './components/Navbar'
import Hero from './components/Hero'
import BrandMessage from './components/BrandMessage'
import Gallery from './components/Gallery'
import Products from './components/Products'
import Differentiation from './components/Differentiation'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <main>
        <Hero />
        <BrandMessage />
        <Gallery />
        <Products />
        <Differentiation />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
