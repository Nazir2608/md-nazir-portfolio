import React, { useEffect, useState, useMemo } from 'react';
import './Hero.css';

const Hero = ({ data }) => {
  const [typedText, setTypedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // ✨ Updated titles aligned with your real positioning
  const titles = useMemo(() => data?.roles || [
    'Java Backend Engineer',
    'Spring Boot Developer',
    'Microservices Architect',
    'Fintech Engineer',
    'AI Integration Specialist',
    'Distributed Systems Builder'
  ], [data?.roles]);

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
    }, isDeleting ? 60 : 120);

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
      {/* Animated Background */}
      <div className="hero-background">
        <div className="bg-pattern"></div>
        <div className="gradient-overlay"></div>
      </div>

      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            {/* 🟢 Live Status Badge */}
            <div className="status-badge animate-fadeInUp">
              <span className="status-dot"></span>
              <span className="status-text">
                {data.availability || 'Open to Senior Backend opportunities'}
              </span>
            </div>

            {/* Greeting */}
            <div className="hero-greeting animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
              <span className="greeting-text">👋 Hello, I'm</span>
            </div>

            {/* Name with Gradient */}
            <h1 className="hero-name animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
              {data.name}
            </h1>

            {/* Typing Animation */}
            <div className="hero-title animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
              <span className="typed-text">{typedText}</span>
              <span className="cursor">|</span>
            </div>

            {/* Bio */}
            <p className="hero-description animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
              {data.bio}
            </p>

            {/* Quick Highlights */}
            <div className="hero-highlights animate-fadeInUp" style={{ animationDelay: '0.7s' }}>
              <div className="highlight-item">
                <span className="highlight-icon">⚡</span>
                <span className="highlight-text">3+ Years</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">🚀</span>
                <span className="highlight-text">46+ GitHub Repos</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">🏦</span>
                <span className="highlight-text">Fintech Domain</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">🤖</span>
                <span className="highlight-text">AI Integration</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="hero-actions animate-fadeInUp" style={{ animationDelay: '0.8s' }}>
              <button
                className="btn btn-primary"
                onClick={() => scrollToSection('projects')}
              >
                <span>View My Work</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
              <button
                className="btn btn-outline"
                onClick={() => scrollToSection('contact')}
              >
                Get In Touch
              </button>
              {data.resume && (
                <a
                  href={data.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
                  </svg>
                  Resume
                </a>
              )}
            </div>

            {/* Social Links */}
            <div className="hero-social animate-fadeInUp" style={{ animationDelay: '1s' }}>
              {data.github && (
                <a
                  href={data.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="GitHub"
                  title="GitHub"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
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
                  title="LinkedIn"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              )}
              {data.email && (
                <a
                  href={`mailto:${data.email}`}
                  className="social-link"
                  aria-label="Email"
                  title="Email"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </a>
              )}
              {data.whatsapp && (
                <a
                  href={data.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="WhatsApp"
                  title="WhatsApp"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                </a>
              )}
            </div>
          </div>

          {/* Code Block - Aligned with GitHub */}
          <div className="hero-visual animate-fadeInRight">
            <div className="code-block">
              <div className="code-header">
                <div className="code-buttons">
                  <span className="code-button red"></span>
                  <span className="code-button yellow"></span>
                  <span className="code-button green"></span>
                </div>
                <span className="code-title">BackendEngineer.java</span>
                <span className="code-lang">☕ Java 21</span>
              </div>
              <div className="code-content">
                <div className="code-line">
                  <span className="line-number">1</span>
                  <span className="code-text">
                    <span className="keyword">@Service</span>
                  </span>
                </div>
                <div className="code-line">
                  <span className="line-number">2</span>
                  <span className="code-text">
                    <span className="keyword">public class</span> <span className="class-name">BackendEngineer</span> {'{'}
                  </span>
                </div>
                <div className="code-line">
                  <span className="line-number">3</span>
                  <span className="code-text">
                    {'  '}<span className="keyword">private final</span> <span className="class-name">String</span> <span className="property">name</span> = <span className="string">"Md Nazir"</span>;
                  </span>
                </div>
                <div className="code-line">
                  <span className="line-number">4</span>
                  <span className="code-text">
                    {'  '}<span className="keyword">private final</span> <span className="class-name">String</span> <span className="property">role</span> = <span className="string">"SDE @ LCF Group"</span>;
                  </span>
                </div>
                <div className="code-line">
                  <span className="line-number">5</span>
                  <span className="code-text">
                    {'  '}<span className="keyword">private final int</span> <span className="property">experience</span> = <span className="number">3</span>;
                  </span>
                </div>
                <div className="code-line">
                  <span className="line-number">6</span>
                  <span className="code-text">
                    {'  '}<span className="keyword">private final</span> <span className="class-name">List</span>{'<String>'} <span className="property">stack</span> = <span className="class-name">List</span>.<span className="method">of</span>(
                  </span>
                </div>
                <div className="code-line">
                  <span className="line-number">7</span>
                  <span className="code-text">
                    {'    '}<span className="string">"Spring Boot 3"</span>, <span className="string">"Microservices"</span>,
                  </span>
                </div>
                <div className="code-line">
                  <span className="line-number">8</span>
                  <span className="code-text">
                    {'    '}<span className="string">"Apache Kafka"</span>, <span className="string">"Redis"</span>,
                  </span>
                </div>
                <div className="code-line">
                  <span className="line-number">9</span>
                  <span className="code-text">
                    {'    '}<span className="string">"PostgreSQL"</span>, <span className="string">"Oracle PL/SQL"</span>,
                  </span>
                </div>
                <div className="code-line">
                  <span className="line-number">10</span>
                  <span className="code-text">
                    {'    '}<span className="string">"IBM MQ"</span>, <span className="string">"Docker"</span>,
                  </span>
                </div>
                <div className="code-line">
                  <span className="line-number">11</span>
                  <span className="code-text">
                    {'    '}<span className="string">"Gemini AI"</span>, <span className="string">"VLM"</span>
                  </span>
                </div>
                <div className="code-line">
                  <span className="line-number">12</span>
                  <span className="code-text">
                    {'  '});
                  </span>
                </div>
                <div className="code-line">
                  <span className="line-number">13</span>
                  <span className="code-text">
                    {'  '}<span className="comment">// Building scalable distributed systems</span>
                  </span>
                </div>
                <div className="code-line">
                  <span className="line-number">14</span>
                  <span className="code-text">
                    {'  '}<span className="comment">// 46+ open-source projects on GitHub 🚀</span>
                  </span>
                </div>
                <div className="code-line">
                  <span className="line-number">15</span>
                  <span className="code-text">
                    {'}'}
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* Scroll Indicator */}
          <div className="scroll-indicator">
            <div className="scroll-mouse">
              <div className="scroll-wheel"></div>
            </div>
            <span>Scroll to explore</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;