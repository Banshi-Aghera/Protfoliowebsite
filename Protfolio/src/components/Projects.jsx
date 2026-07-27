import React, { useState } from 'react';
import { projects } from '../data';
import ProjectModal from './ProjectModal';
import './Projects.css';

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const handleProjectClick = (project) => {
        if (project.gallery) {
            setSelectedProject(project);
        }
    };

    return (
        <section id="projects" className="projects-section">
            <div className="container">
                <h2 className="section-title">Featured Projects</h2>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div key={project.id} className="project-card glass-card">
                            {/* Project Cover Image */}
                            <div className="project-image-wrapper" onClick={() => handleProjectClick(project)}>
                                <img
                                    src={project.gallery ? project.gallery[0].src : ''}
                                    alt={project.title}
                                    className="project-cover-image"
                                />
                                <div className="project-overlay">
                                    <span className="view-text">View Details</span>
                                </div>
                            </div>

                            <div className="project-content">
                                <div className="project-header">
                                    <h3 className="project-title">{project.title}</h3>
                                    <span className="project-id">0{project.id}</span>
                                </div>

                                <p className="project-tech">{project.tech}</p>
                                <p className="project-desc">{project.description}</p>

                                <div className="project-footer">
                                    <div className="project-features-tag">
                                        <i className='bx bx-star'></i> {project.features.split(',')[0]}
                                    </div>

                                    <div className="project-actions">
                                        {project.github && (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="btn-github"
                                                aria-label="GitHub Repo"
                                                onClick={(e) => e.stopPropagation()}
                                            >
                                                <i className='bx bxl-github'></i>
                                            </a>
                                        )}
                                        <button
                                            className="btn-details"
                                            onClick={() => handleProjectClick(project)}
                                        >
                                            <i className='bx bx-right-arrow-alt'></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <ProjectModal
                project={selectedProject}
                onClose={() => setSelectedProject(null)}
            />
        </section>
    );
};

export default Projects;
