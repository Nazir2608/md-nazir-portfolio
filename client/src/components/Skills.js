import React, { useState } from 'react';
import './Skills.css';

const Skills = ({ data }) => {
  const [activeCategory, setActiveCategory] = useState('languages');

  if (!data) return <div>Loading...</div>;

  const skillCategories = [
    { id: 'languages', label: 'Languages', icon: '💻' },
    { id: 'frameworks', label: 'Frameworks', icon: '🚀' },
    { id: 'databases', label: 'Databases', icon: '🗄️' },
    { id: 'cloud', label: 'Cloud & DevOps', icon: '☁️' },
    { id: 'tools', label: 'Tools', icon: '🛠️' }
  ];

  const getSkillLevel = (skill) => {
    // This would typically come from the API data
    // For now, we'll assign levels based on common Java developer skills
    const levels = {
      'Java': 95,
      'Spring Boot': 90,
      'Spring Security': 85,
      'PostgreSQL': 85,
      'AWS': 80,
      'Docker': 85,
      'IntelliJ IDEA': 95,
      'Python': 75,
      'JavaScript': 70,
      'TypeScript': 65,
      'Hibernate': 85,
      'JUnit': 90,
      'Maven': 90,
      'Gradle': 85,
      'MySQL': 80,
      'MongoDB': 75,
      'Redis': 80,
      'Kubernetes': 75,
      'Jenkins': 80,
      'Git': 95,
      'Eclipse': 85,
      'Postman': 90,
      'Jira': 85,
      'Confluence': 80
    };
    
    return levels[skill] || 70;
  };

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="skills-content">
          <div className="skills-categories">
            {skillCategories.map((category) => (
              <button
                key={category.id}
                className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
              >
                <span className="category-icon">{category.icon}</span>
                <span className="category-label">{category.label}</span>
              </button>
            ))}
          </div>

          <div className="skills-display">
            <div className="skills-grid">
              {data[activeCategory]?.map((skill, index) => (
                <div 
                  key={index} 
                  className="skill-item"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="skill-header">
                    <span className="skill-name">{skill}</span>
                    <span className="skill-percentage">{getSkillLevel(skill)}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress"
                      style={{ '--progress': `${getSkillLevel(skill)}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="skills-summary">
          <div className="summary-card">
            <h3>Core Competencies</h3>
            <div className="competencies-grid">
              <div className="competency-item">
                <div className="competency-icon">🏗️</div>
                <h4>Architecture Design</h4>
                <p>Microservices, distributed systems, and scalable application design</p>
              </div>
              <div className="competency-item">
                <div className="competency-icon">🔒</div>
                <h4>Security Implementation</h4>
                <p>Authentication, authorization, and security best practices</p>
              </div>
              <div className="competency-item">
                <div className="competency-icon">📊</div>
                <h4>Performance Optimization</h4>
                <p>Database tuning, caching strategies, and application performance</p>
              </div>
              <div className="competency-item">
                <div className="competency-icon">🔄</div>
                <h4>DevOps Integration</h4>
                <p>CI/CD pipelines, containerization, and cloud deployment</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;