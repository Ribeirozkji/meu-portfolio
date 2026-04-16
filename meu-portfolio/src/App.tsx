import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Stack from './components/Stack'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './index.css'

function App() {
  return (
    <div className="app">
      <header className="hero-wrapper">
        <div className="container">
          <Navbar />
          <Hero />
        </div>
      </header>

      <main className="container">
        <About />
        <Stack />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App