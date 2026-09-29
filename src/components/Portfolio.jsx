import About from './About.jsx'
import Background from './Background.jsx'
import Contact from './Contact.jsx'
import Expertise from './Expertise.jsx'
import Footer from './Footer.jsx'
import Header from './Header.jsx'
import Hero from './Hero.jsx'
import Projects from './Projects.jsx'
import Stack from './Stack.jsx'

export default function Portfolio() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-lg focus:bg-cyan-500 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-[#04121a]"
      >
        Lompat ke konten utama
      </a>

      <Background />
      <Header />

      <main id="main">
        <Hero />
        <About />
        <Expertise />
        <Stack />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </>
  )
}
