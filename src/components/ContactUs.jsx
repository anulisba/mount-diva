// components/ContactSection.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaPaperPlane } from 'react-icons/fa';
import './ContactUs.css'
import bg1 from '../assets/bg1.jpg';
import Header from './Header';
import Footer from './Footer';
import Page from './ScrollToTop';
import emailjs from 'emailjs-com';
const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [activeMap, setActiveMap] = useState('dubai');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        emailjs.send(
            'service_6c6do5l', // replace with your actual service ID
            'template_4t6imcx', // replace with your actual template ID
            {
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                title: formData.subject,
                message: formData.message,
                to_email: 'abhisplanet2025@gmail.com' // optional if defined in template
            },
            'zQ4O3aRATuQjHFFMg' // replace with your public key
        ).then(() => {
            setIsSubmitted(true);
            setIsSubmitting(false);

            setTimeout(() => {

            }, 3000);
        }).catch((error) => {
            console.error('Failed to send message:', error);
            setIsSubmitting(false);
            alert('Failed to send message. Please try again later.');
        });
    };

    return (
        <>
            <Header />
            <section id="contact" className="contact-section">
                <Page>
                    <div className="contact-container">
                        {/* Header */}
                        <motion.div
                            className="contact-header"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <div className="our-services-header">
                                <div className='our-service-title'>
                                    <h2>Let's Create Something<br />Exciting</h2>
                                    <div className="our-service-line-heading" />
                                </div>
                                <div className="about-us-line-container">
                                    <div className="about-us-line" />
                                    <span className="about-us-subtitle">CONTACT US</span>
                                </div>
                            </div>
                        </motion.div>

                        <div className="contact-content">
                            {/* Contact Information with Background */}
                            <motion.div
                                className="contact-info"
                                style={{ backgroundImage: `url(${bg1})` }}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                viewport={{ once: true }}
                            >
                                <div className="contact-info-overlay"></div>
                                <div className="contact-info-content">
                                    <div className="info-card">
                                        <div className="info-icon">
                                            <FaMapMarkerAlt className="icon" />
                                        </div>
                                        <div className="info-text">
                                            <h3>Our Studio – Dubai</h3>
                                            <p>Qusais, Industrial Area 2, Dubai</p>
                                            <p>+971562511837</p>
                                            <h3>Our Studio – Kerala</h3>
                                            <p>FABDEC INTERIORS PRIVATE LIMITED</p>
                                            <p>Kundanoor, Maradu, Ernakulam - 682304</p>
                                            <p>+91 97475 15517</p>
                                        </div>
                                    </div>

                                    <div className="info-card">
                                        <div className="info-icon">
                                            <FaClock className="icon" />
                                        </div>
                                        <div className="info-text">
                                            <h3>Working Hours</h3>
                                            <p>Monday - Saturday: 9am - 6pm</p>
                                        </div>
                                    </div>


                                    <div className="map-tabs">
                                        <div className="map-tab-buttons">
                                            <button
                                                className={activeMap === 'dubai' ? 'active' : ''}
                                                onClick={() => setActiveMap('dubai')}
                                            >
                                                Dubai Office
                                            </button>
                                            <button
                                                className={activeMap === 'kerala' ? 'active' : ''}
                                                onClick={() => setActiveMap('kerala')}
                                            >
                                                Kerala Office
                                            </button>
                                        </div>

                                        <div className="map-placeholder">
                                            {activeMap === 'dubai' && (
                                                <iframe
                                                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3607.886178276538!2d55.37862017538427!3d25.274414077661387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDE2JzI3LjkiTiA1NcKwMjInNTIuMyJF!5e0!3m2!1sen!2sin!4v1751958930555!5m2!1sen!2sin"
                                                    width="100%"
                                                    height="300"
                                                    style={{ border: 0 }}
                                                    allowFullScreen=""
                                                    loading="lazy"
                                                    referrerPolicy="no-referrer-when-downgrade"
                                                ></iframe>
                                            )}
                                            {activeMap === 'kerala' && (
                                                <iframe
                                                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3929.963287605679!2d76.3158454750303!3d9.937012690165187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOcKwNTYnMTMuMyJOIDc2wrAxOScwNi4zIkU!5e0!3m2!1sen!2sin!4v1752421803120!5m2!1sen!2sin"
                                                    width="100%"
                                                    height="300"
                                                    style={{ border: 0 }}
                                                    allowFullScreen=""
                                                    loading="lazy"
                                                    referrerPolicy="no-referrer-when-downgrade"
                                                ></iframe>
                                            )}
                                        </div>
                                    </div>


                                </div>
                            </motion.div>

                            {/* Contact Form */}
                            <motion.div
                                className="contact-form-container"
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                viewport={{ once: true }}
                            >
                                {isSubmitted ? (
                                    <div className="success-message">
                                        <FaPaperPlane className="success-icon" />
                                        <h3>Message Sent Successfully!</h3>
                                        <p>Thank you for contacting us. We'll get back to you soon.</p>
                                    </div>
                                ) : (
                                    <form className="contact-form" onSubmit={handleSubmit}>
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                placeholder="Your Name"
                                                required
                                                className="form-input"
                                            />
                                            <span className="input-highlight"></span>
                                        </div>

                                        <div className="form-row">
                                            <div className="form-group">
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    placeholder="Email Address"
                                                    required
                                                    className="form-input"
                                                />
                                                <span className="input-highlight"></span>
                                            </div>

                                            <div className="form-group">
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    placeholder="Phone Number"
                                                    className="form-input"
                                                />
                                                <span className="input-highlight"></span>
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <input
                                                type="text"
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                placeholder="Subject"
                                                required
                                                className="form-input"
                                            />
                                            <span className="input-highlight"></span>
                                        </div>

                                        <div className="form-group">
                                            <textarea
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                placeholder="Your Message"
                                                rows="4"
                                                required
                                                className="form-textarea"
                                            ></textarea>
                                            <span className="input-highlight"></span>
                                        </div>

                                        <motion.button
                                            className="submit-btn"
                                            type="submit"
                                            disabled={isSubmitting}
                                            whileHover={{ scale: 1.03 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            {isSubmitting ? (
                                                <span>Sending...</span>
                                            ) : (
                                                <>
                                                    <span>Send Message</span>
                                                    <FaPaperPlane className="send-icon" />
                                                </>
                                            )}
                                            <div className="btn-hover-effect"></div>
                                        </motion.button>
                                    </form>
                                )}
                            </motion.div>
                        </div>
                    </div>
                </Page>
            </section>
            <Footer />
        </>
    );
};

export default ContactSection;