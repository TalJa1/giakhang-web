import About from './components/About'
import Achievements from './components/Achievements'
import Beyond from './components/Beyond'
import Contact from './components/Contact'
import Cursor from './components/Cursor'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Leadership from './components/Leadership'
import Projects from './components/Projects'
import { usePointerFx } from './hooks/usePointerFx'
import { useReveal } from './hooks/useReveal'

export default function App() {
  useReveal()
  usePointerFx()

  return (
    <>
      {/* Intro curtain: wipes away on load (CSS only; skipped for reduced motion). */}
      <div className="intro" aria-hidden="true">
        <span className="intro__mark" />
      </div>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Projects />
        <Achievements />
        <Leadership />
        <Beyond />
        <Contact />
      </main>
      <Footer />
      <Cursor />
    </>
  )
}
