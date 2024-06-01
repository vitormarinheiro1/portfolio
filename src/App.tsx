import React from 'react'
import './App.css'
import { About } from './components/About'
import Contact from './components/Contact'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Services from './components/Services'
import Skills from './components/Skills'
import Footer from './components/Footer'

function App() {
    return (
    <main>
      <Hero />
      <About />
      <Services />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </main>
  )
}

export default App
