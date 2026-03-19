import { Navbar, Footer } from './components';
import { Hero, About, Products, Gallery, Contact } from './sections';

function App() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Products />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
