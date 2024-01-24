import React from 'react'
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Skill from './Skill';
import Services from './Services';
import Project from './Project';
import Contact from './Contact';
import Footer from './Footer';

export default function Main() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Services />
      <Skill />
      <Project />
      <Contact />
      <Footer />
    </div>
  )
}
