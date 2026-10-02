import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[#F4F3EF] dark:bg-[#0D0D11] text-[#1C1917] dark:text-[#F3F4F6] transition-colors duration-300 selection:bg-amber-500/20 selection:text-amber-800 dark:selection:bg-amber-400/20 dark:selection:text-amber-300">
        {/* Fixed Navigation Header */}
        <Navbar />

        {/* Main Single Page Portfolio Content */}
        <main>
          {/* Hero Section */}
          <Hero />

          {/* About Section */}
          <About />

          {/* Featured Projects Section */}
          <Projects />

          {/* Skills and Proficiency Section */}
          <Skills />

          {/* Achievements & Certifications */}
          <Achievements />

          {/* Contact Section */}
          <Contact />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
