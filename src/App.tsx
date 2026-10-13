import About from './components/About'
import Achievements from './components/Achievements'
import Beyond from './components/Beyond'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Leadership from './components/Leadership'
import Projects from './components/Projects'
import { useReveal } from './hooks/useReveal'

export default function App() {
  useReveal()

  return (
    <>
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
    </>
  )
}
