import React from 'react';
import './Experience.css';

const Experience = ({ data }) => {
  if (!data) return <div>Loading...</div>;

  return (
    <section id="experience" className="experience">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Work Experience</h2>
          <p className="section-subtitle">
            My professional journey as a Java developer
          </p>
        </div>

        <div className="experience-timeline">
          {data.map((job, index) => (
            <div 
              key={job.id} 
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
            >
              <div className="timeline-marker">
                <div className="marker-dot"></div>
              </div>
              
              <div className="timeline-content">
                <div className="experience-card">
                  <div className="card-header">
                    <div className="job-info">
                      <h3 className="job-title">{job.position}</h3>
                      <h4 className="company-name">{job.company}</h4>
                      <div className="job-meta">
                        <span className="duration">{job.duration}</span>
                        <span className="location">{job.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="card-body">
                    <p className="job-description">{job.description}</p>
                    
                    <div className="technologies">
                      <h5>Technologies Used:</h5>
                      <div className="tech-tags">
                        {job.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className="tech-tag">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;