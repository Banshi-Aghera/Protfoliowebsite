import React from 'react';
import { skills } from '../data';
import './Skills.css';

const getCategoryIcon = (category) => {
    switch (category.toLowerCase()) {
        case 'frontend': return <i className='bx bx-code-alt'></i>;
        case 'backend': return <i className='bx bx-server'></i>;
        case 'tools': return <i className='bx bx-wrench'></i>;
        case 'mobile': return <i className='bx bx-mobile-alt'></i>;
        default: return <i className='bx bx-layer'></i>;
    }
};

const Skills = () => {
    return (
        <section id="skills" className="skills-section">
            <div className="container">
                <h2 className="section-title">Tech Stack</h2>
                <div className="skills-grid">
                    {Object.entries(skills).map(([category, items]) => (
                        <div key={category} className="skill-card glass-card">
                            <div className="skill-header">
                                <span className="skill-icon">{getCategoryIcon(category)}</span>
                                <h3 className="skill-category">{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
                            </div>
                            <div className="skill-tags">
                                {items.map((skill) => (
                                    <span key={skill} className="skill-tag">{skill}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
