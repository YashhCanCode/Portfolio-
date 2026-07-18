import ScrollProgress from './components/ScrollProgress'
import KonamiEasterEgg from './components/KonamiEasterEgg'
import Preloader from './components/Preloader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import NewtonsCradle from './components/NewtonsCradle'
import StickyNote from './components/StickyNote'
import Projects from './components/Projects'
import Skills from './components/Skills'
import GridMelt from './components/GridMelt'
import TerminalSeam from './components/TerminalSeam'
import ModeSwitch from './components/ModeSwitch'
import Certifications from './components/Certifications'
import LeetCode from './components/LeetCode'
import Space from './components/Space'
import OffClock from './components/OffClock'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <ScrollProgress />
      <div aria-hidden className="grain-overlay pointer-events-none fixed inset-0 z-[45] opacity-[0.045]" />
      <KonamiEasterEgg />
      <Preloader />
      <Navbar />
      <Hero />
      <About />
      <StickyNote side="right" rotate="3deg" color="#d3e8f2" foldColor="#a9cfe0">
        <p className="font-script text-xl text-brand-dark leading-tight mb-1.5">🎓 Education —</p>
        <p className="font-script text-lg text-brand-dark/90 leading-snug">
          B.Tech in <span className="font-bold">CSE — Data Science</span>, CGPA <span className="font-bold">8.31</span>
        </p>
        <p className="font-sans text-[10px] uppercase tracking-[0.15em] text-brand-medium/80 font-bold mt-4 leading-snug">
          Marri Laxman Reddy Institute of Technology &amp; Management
        </p>
      </StickyNote>
      <Experience />
      <NewtonsCradle />
      <Projects />
      <StickyNote side="right" rotate="4deg">
        <p className="font-script text-xl text-brand-dark leading-tight mb-1.5 underline"> ☘︎ Small Achievement -</p>
        <p className="font-script text-lg text-brand-dark/90 leading-snug">
          Selected for the <span className="font-bold">State-Level Buildathon</span> with <span className="font-bold">Project Evolve</span>!
        </p>
        <p className="font-sans text-[10px] uppercase tracking-[0.16em] text-brand-medium/80 font-bold mt-4">
          OpenAI Academy × NxtWave
        </p>
      </StickyNote>
      <LeetCode />
      <Skills />
      <GridMelt />
      <TerminalSeam />
      <Certifications />
      <ModeSwitch />
      <Space />
      <OffClock />
      <Contact />
      <Footer />
    </>
  )
}

export default App
