import React from 'react';
import { personalInfo } from '../data';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="contact-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Get In Touch</h2>
                </div>


                <div className="contact-container">
                    <div className="contact-info">
                        <div className="contact-info-header">
                            <h3 className="contact-title">Let's connect</h3>
                            <p className="contact-subtitle">I'm open for freelance projects and full-time opportunities.</p>
                        </div>

                        <div className="contact-options">
                            <a href={`mailto:${personalInfo.contact.email}`} className="contact-card">
                                <i className='bx bx-envelope contact-card-icon'></i>
                                <div className="contact-card-content">
                                    <h3>Email</h3>
                                    <span>{personalInfo.connect.email}</span>
                                </div>
                            </a>

                            <a href={personalInfo.contact.github} target="_blank" rel="noopener noreferrer" className="contact-card">
                                <i className='bx bxl-linkedin contact-card-icon'></i>
                                <div className="contact-card-content">
                                    <h3>LinkedIn</h3>
                                    <span>Detailed Profile</span>
                                </div>
                            </a>

                            <a href="#" className="contact-card">
                                <i className='bx bxl-whatsapp contact-card-icon'></i>
                                <div className="contact-card-content">
                                    <h3>WhatsApp</h3>
                                    <span>Chat with me</span>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div className="contact-content">
                        <form action="https://formsubmit.co/agherabansi2@gmail.com" method="POST" className="contact-form">
                            <div className="contact-form-div">
                                <label className="contact-form-label">Name</label>
                                <input type="text" name="name" placeholder="Enter your name" className="contact-form-input" required />
                            </div>

                            <div className="contact-form-div">
                                <label className="contact-form-label">Email</label>
                                <input type="email" name="email" placeholder="Enter your email" className="contact-form-input" required />
                            </div>

                            <div className="contact-form-div contact-form-area">
                                <label className="contact-form-label">Message</label>
                                <textarea name="message" placeholder="Tell me about your project..." className="contact-form-input" required></textarea>
                            </div>

                            <input type="hidden" name="_next" value="http://localhost:5173/" />
                            <input type="hidden" name="_captcha" value="false" />

                            <button type="submit" className="button contact-button-submit">
                                Send Message
                                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
