import React from 'react'
import Preloader from './components/Preloader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Certifications from './components/Certifications'
import LeetCode from './components/LeetCode'
import Space from './components/Space'
import OffClock from './components/OffClock'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Preloader />
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <LeetCode />
      <Skills />
      <Certifications />
      <Space />
      <OffClock />
      <Contact />
      <Footer />
    </>
  )
}

export default App
