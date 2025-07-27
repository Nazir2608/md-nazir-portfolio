import React from 'react';
import './Footer.css';

const Footer = ({ data }) => {
  const currentYear = new Date().getFullYear();

  if (!data) return null;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="brand-logo" onClick={scrollToTop}>
              <span className="brand-text">{data.name?.split(' ').map(n => n[0]).join('')}</span>
            </div>
            <p className="brand-description">
              Software Developer passionate about building scalable, efficient applications and contributing to the developer community.
            </p>
          </div>

          <div className="footer-links">
            <div className="link-group">
              <h4>Navigation</h4>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>

            <div className="link-group">
              <h4>Connect</h4>
              <ul>
                {data.github && (
                  <li>
                    <a href={data.github} target="_blank" rel="noopener noreferrer">
                      GitHub
                    </a>
                  </li>
                )}
                {data.linkedin && (
                  <li>
                    <a href={data.linkedin} target="_blank" rel="noopener noreferrer">
                      LinkedIn
                    </a>
                  </li>
                )}
                {data.twitter && (
                  <li>
                    <a href={data.twitter} target="_blank" rel="noopener noreferrer">
                      Twitter
                    </a>
                  </li>
                )}
                <li>
                  <a href={`mailto:${data.email}`}>Email</a>
                </li>
              </ul>
            </div>

            <div className="link-group">
              <h4>Resources</h4>
              <ul>
                {data.resume && (
                  <li>
                    <a href={data.resume} target="_blank" rel="noopener noreferrer">
                      Resume
                    </a>
                  </li>
                )}
                <li><a href="#projects">Portfolio</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#skills">Technologies</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <div className="footer-info">
            <p className="copyright">
              © {currentYear} {data.name}. All rights reserved.
            </p>
            <p className="built-with">
              Built with React, Node.js, and lots of ☕
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;