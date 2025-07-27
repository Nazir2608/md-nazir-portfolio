// client/src/App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';
import ScrollToTop from './components/ScrollToTop';
import portfolioData from './data/portfolioData';

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    // Check for saved theme preference or default to 'light'
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <div className="App">
      <Navbar />
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero data={portfolioData.personal} />
        <About data={portfolioData.personal} />
        <Skills data={portfolioData.skills} />
        <Experience data={portfolioData.experience} />
        <Projects data={portfolioData.projects} />
        <Contact data={portfolioData.personal} />
      </main>
      <Footer data={portfolioData.personal} />
      <ScrollToTop />
    </div>
  );
}

export default App;