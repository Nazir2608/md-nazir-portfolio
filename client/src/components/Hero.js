import React, { useEffect, useState, useMemo } from 'react';
import './Hero.css';

const Hero = ({ data }) => {
  const [typedText, setTypedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const titles = useMemo(() => [
  'Java Developer',
  'Backend Engineer', 
  'Spring Boot Developer',
  'Problem Solver'
], []);

  useEffect(() => {
    const currentTitle = titles[currentIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (typedText.length < currentTitle.length) {
          setTypedText(currentTitle.slice(0, typedText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (typedText.length > 0) {
          setTypedText(currentTitle.slice(0, typedText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prevIndex) => (prevIndex + 1) % titles.length);
        }
      }
    }, isDeleting ? 100 : 150);

    return () => clearTimeout(timeout);
  }, [typedText, currentIndex, isDeleting, titles]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!data) return <div>Loading...</div>;

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="bg-pattern"></div>
        <div className="gradient-overlay"></div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-greeting animate-fadeInUp">
              <span className="greeting-text">Hello, I'm</span>
            </div>
            
            <h1 className="hero-name animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
              {data.name}
            </h1>
            
            <div className="hero-title animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
              <span className="typed-text">{typedText}</span>
              <span className="cursor">|</span>
            </div>
            
            <p className="hero-description animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
              {data.bio}
            </p>
            
            <div className="hero-actions animate-fadeInUp" style={{ animationDelay: '0.8s' }}>
              <button 
                className="btn btn-primary"
                onClick={() => scrollToSection('projects')}
              >
                View My Work
              </button>
              <button 
                className="btn btn-outline"
                onClick={() => scrollToSection('contact')}
              >
                Get In Touch
              </button>
            </div>
            
            <div className="hero-social animate-fadeInUp" style={{ animationDelay: '1s' }}>
              {data.github && (
                <a 
                  href={data.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="GitHub"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              )}
              {data.linkedin && (
                <a 
                  href={data.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="LinkedIn"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              )}
              {data.twitter && (
                <a 
                  href={data.twitter} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="Twitter"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
              )}
            </div>
          </div>
          
          <div className="hero-visual animate-fadeInRight">
            <div className="code-block">
              <div className="code-header">
                <div className="code-buttons">
                  <span className="code-button red"></span>
                  <span className="code-button yellow"></span>
                  <span className="code-button green"></span>
                </div>
                <span className="code-title">Developer.java</span>
              </div>
              <div className="code-content">
                <div className="code-line">
                  <span className="line-number">1</span>
                  <span className="code-text">
                    <span className="keyword">@Component</span>
                  </span>
                </div>
                <div className="code-line">
                  <span className="line-number">2</span>
                  <span className="code-text">
                    <span className="keyword">public class</span> <span className="class-name">JavaDeveloper</span> {'{'}
                  </span>
                </div>
                <div className="code-line">
                  <span className="line-number">3</span>
                  <span className="code-text">
                    {'    '}<span className="keyword">private final</span> <span className="class-name">String</span> <span className="property">name</span> = <span className="string">"Nazir"</span>;
                  </span>
                </div>
                <div className="code-line">
                  <span className="line-number">4</span>
                  <span className="code-text">
                    {'    '}<span className="keyword">private final</span> <span className="class-name">List</span>{'<String>'} <span className="property">skills</span> = <span className="keyword">Arrays</span>.<span className="method">asList</span>(
                  </span>
                </div>
                <div className="code-line">
                  <span className="line-number">5</span>
                  <span className="code-text">
                    {'        '}<span className="string">"Spring Boot"</span>, <span className="string">"Oracle PL/SQL"</span>, 
                  </span>
                </div>
                <div className="code-line">
                  <span className="line-number">6</span>
                  <span className="code-text">
                    {'        '}<span className="string">"IBM MQ"</span>, <span className="string">"Microservices"</span>
                  </span>
                </div>
                <div className="code-line">
                  <span className="line-number">7</span>
                  <span className="code-text">
                    {'    '});
                  </span>
                </div>
                <div className="code-line">
                  <span className="line-number">8</span>
                  <span className="code-text">
                    {'    '}<span className="comment">// 2+ years in Banking Domain</span>
                  </span>
                </div>
                <div className="code-line">
                  <span className="line-number">9</span>
                  <span className="code-text">
                    {'}'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="scroll-indicator">
          <div className="scroll-mouse">
            <div className="scroll-wheel"></div>
          </div>
          <span>Scroll to explore</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;