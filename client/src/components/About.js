import React from 'react';
import './About.css';

const About = ({ data }) => {
  if (!data) return <div>Loading...</div>;

   const stats = [
    { label: 'Years Experience', value: '2+' },
    { label: 'Projects Completed', value: '10+' },
    { label: 'Technologies Used', value: '10+' },
    { label: 'Coffee Consumed', value: '∞' }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Learn more about my journey as a Java developer
          </p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <div className="about-intro">
              <p>
                Hi, I'm <strong>{data.name}</strong>, a passionate Java developer 
                based in {data.location}. I specialize in building robust, scalable 
                applications using modern Java technologies and best practices.
              </p>
              
              <p>
                My journey in software development began after my Civil Engineering studies, 
                where I discovered my passion for backend development and problem-solving. 
                Through intensive training and hands-on experience, I've specialized in Java 
                enterprise development, particularly in banking and financial systems.
              </p>

              <p>
                Currently working at Opalina Technologies, I focus on building and maintaining 
                core banking modules that serve thousands of users. I believe in writing clean, 
                efficient code and have experience with real-time production environments, 
                database optimization, and secure transaction processing.
              </p>

              <p>
                When I'm not coding, I enjoy listening to music, playing cricket, and exploring 
                new technologies. I'm driven by complex challenges and consistently strive for 
                excellence in every task I undertake.
              </p>
            </div>

            <div className="about-highlights">
              <h3>What I Bring to the Table</h3>
              <ul>
                <li>
                  <strong>Banking Domain Expertise:</strong> 2+ years working on core banking modules, delivering 
      real-time production support, incident resolution, and process enhancements.
                </li>
                <li>
                  <strong>Performance Optimization:</strong> Increased SQL efficiency and dashboard performance 
      by 30% through query tuning, indexing, and code-level optimizations.
                </li>
                <li>
                  <strong>Enterprise Integration:</strong> Skilled in IBM MQ messaging, WebSphere deployments, AES 
      encryption, and modernizing legacy systems (e.g., migrating SOAP services to JMS).
                </li>
                <li>
                  <strong>Full-Stack Development:</strong> Proficient in Java backend with Spring Boot 
                  and modern frontend technologies like React.js and Next.js
                </li>
                <li>
                  <strong>Database Management:</strong> Expertise in Oracle database migration, 
                  complex stored procedures, and multi-database environments (Oracle, MySQL, MongoDB)
                </li>
                <li>
                  <strong>AI Integration:</strong> Developed AI-driven applications leveraging APIs like Gemini and 
      DeepSeek to bring intelligence into real-world solutions.
                </li>
              </ul>
            </div>
          </div>

          <div className="about-stats">
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <div key={index} className="stat-item">
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="about-cta">
              <h3>Let's Work Together</h3>
              <p>
                I'm always open to discussing new opportunities and interesting projects. 
                Whether you need a senior developer for your team or want to collaborate 
                on an exciting project, let's connect!
              </p>
              <div className="cta-buttons">
                <a 
                  href={`mailto:${data.email}`} 
                  className="btn btn-primary"
                >
                  Send Email
                </a>
                {data.resume && (
                  <a 
                    href={data.resume} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-outline"
                  >
                    Download Resume
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;