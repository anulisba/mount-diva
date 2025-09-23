// components/ContactSection.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaUser, FaComment, FaNewspaper } from 'react-icons/fa';
import './ContactUs.css';
import Header from './Header';
import Footer from './Footer';
import Page from './ScrollToTop';
import emailjs from 'emailjs-com';
import logo1 from '../assets/client-logo/Untitled design (22).png'
import logo2 from '../assets/client-logo/Gemini_Generated_Image_lm3sj5lm3sj5lm3s.png'
import logo3 from '../assets/client-logo/Untitled design (13).png'
const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [newsletterEmail, setNewsletterEmail] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleNewsletterChange = (e) => {
        setNewsletterEmail(e.target.value);
    };
    // useEffect(() => {
    //     const text = document.querySelector(".contact-text");
    //     text.classList.add("fade-up");
    // }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        emailjs
            .send(
                'service_jee5dxn',
                'template_7w33feq',
                {
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    message: formData.message,
                    to_email: 'info@mountdiva.com'
                },
                'QsuWbxMdTgVxpVuje'
            )
            .then(() => {
                setIsSubmitted(true);
                setIsSubmitting(false);
                setFormData({ name: '', email: '', phone: '', message: '' });
            })
            .catch((error) => {
                console.error('Failed to send message:', error);
                setIsSubmitting(false);
                alert('Failed to send message. Please try again later.');
            });
    };

    return (
        <>
            <Header />
            <section id="contact" className="contact-sections">
                <Page>


                    {/* Header */}
                    <motion.div
                        className="contact-header"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <div className="header-overlay">
                            <h2 className="section-title">Get In Touch With Us</h2>
                            <p className="section-description">
                                We're here to help you with any questions or inquiries. Reach out to us and we'll respond promptly.
                            </p>
                            <div className="header-decoration">
                                <div className="decoration-circle"></div>
                                <div className="decoration-circle"></div>
                                <div className="decoration-circle"></div>
                            </div>
                        </div>
                    </motion.div>
                    <div className="contact-container">
                        {/* Logos */}
                        <motion.div
                            className="logo-section"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <div className="section-subtitle">
                                <h2 className="about-heading">Trusted by Industry Leaders</h2>
                                <div className="title-underline"></div>
                            </div>
                            <div className="logo-row">
                                <div className="logo-item">
                                    <img src={logo1} alt="logo1" />
                                </div>
                                <div className="logo-item">
                                    <img src={logo2} alt="logo2" />
                                </div>
                                <div className="logo-item">
                                    <img src={logo3} alt="logo3" />
                                </div>

                            </div>
                        </motion.div>

                        {/* Form + Newsletter */}
                        <div className="form-newsletter-grid">
                            {/* Contact Form */}
                            <motion.div
                                className="contact-form-container"
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.7 }}
                                viewport={{ once: true }}
                            >
                                <div className="form-header">

                                    <h2 className="about-heading">Send us a Message</h2>
                                    <p>Fill out the form below and we'll get back to you within 24 hours</p>
                                </div>

                                {isSubmitted ? (
                                    <motion.div
                                        className="success-message"
                                        initial={{ scale: 0.8 }}
                                        animate={{ scale: 1 }}
                                        transition={{ duration: 0.4 }}
                                    >
                                        <FaPaperPlane className="success-icon" />
                                        <h3>Message Sent Successfully!</h3>
                                        <p>Thank you for contacting us. We'll get back to you soon.</p>
                                        <button
                                            className="back-to-form"
                                            onClick={() => setIsSubmitted(false)}
                                        >
                                            Send Another Message
                                        </button>
                                    </motion.div>
                                ) : (
                                    <form className="contact-form" onSubmit={handleSubmit}>
                                        <div className="input-with-icon">
                                            <FaUser className="input-icon" />
                                            <input
                                                type="text"
                                                name="name"
                                                placeholder="Your Full Name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>

                                        <div className="form-row">
                                            <div className="input-with-icon">
                                                <FaEnvelope className="input-icon" />
                                                <input
                                                    type="email"
                                                    name="email"
                                                    placeholder="Email Address"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>
                                            <div className="input-with-icon">
                                                <FaPhoneAlt className="input-icon" />
                                                <input
                                                    type="text"
                                                    name="phone"
                                                    placeholder="Phone Number"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="input-with-icon textarea-container">
                                            <FaComment className="input-icon" />
                                            <textarea
                                                name="message"
                                                placeholder="Your Message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                rows="5"
                                                required
                                            ></textarea>
                                        </div>

                                        <motion.button
                                            type="submit"
                                            className="submit-btn"
                                            disabled={isSubmitting}
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <div className="spinner"></div>
                                                    Sending...
                                                </>
                                            ) : (
                                                <>
                                                    <FaPaperPlane className="btn-icon" />
                                                    Send Message
                                                </>
                                            )}
                                        </motion.button>
                                    </form>
                                )}
                            </motion.div>

                            {/* Newsletter */}
                            {/* <motion.div
                                className="newsletter-box"
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.7 }}
                                viewport={{ once: true }}
                            >
                                <div className="newsletter-header">
                                    <FaNewspaper className="newsletter-icon" />
                                    <h3>Stay Updated</h3>
                                </div>
                                <p>
                                    Subscribe to our newsletter and get the latest updates, news, and offers directly to your inbox.
                                </p>
                                <div className="newsletter-form">
                                    <div className="input-with-icon">
                                        <FaEnvelope className="input-icon" />
                                        <input
                                            type="email"
                                            placeholder="Enter your email"
                                            value={newsletterEmail}
                                            onChange={handleNewsletterChange}
                                        />
                                    </div>
                                    <motion.button
                                        className="newsletter-btn"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        Subscribe
                                    </motion.button>
                                </div>
                                <div className="newsletter-benefits">
                                    <span>✓ Weekly updates</span>
                                    <span>✓ Exclusive content</span>
                                    <span>✓ No spam</span>
                                </div>
                            </motion.div> */}

                            <div className="contact-box-l">
                                <h2 className="contact-text-l">
                                    Join multiple people <br /> who already trust us!
                                </h2>
                                {/* <button className="contact-btn">Contact with us to know more</button> */}

                                {/* Animated Circles */}
                                <div className="circle circle1"></div>
                                <div className="circle circle2"></div>
                                <div className="circle circle3"></div>
                            </div>

                        </div>

                        {/* Contact Info Cards */}
                        <motion.div
                            className="info-section"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <div className="section-subtitle">
                                <h2 className="about-heading">Other Ways to Reach Us</h2>
                                <div className="title-underline"></div>
                            </div>
                            <div className="info-cards">
                                <motion.div
                                    className="info-card"
                                    whileHover={{ y: -5 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className='values-icon-wrapper'>
                                        <div className="value-icon">
                                            <FaPhoneAlt />
                                        </div>
                                    </div>
                                    <h4>+971 42685661</h4>
                                    <p>Call us anytime during business hours for immediate assistance</p>
                                    <span className="card-footer">Mon-Fri: 9AM-6PM</span>
                                </motion.div>
                                <motion.div
                                    className="info-card"
                                    whileHover={{ y: -5 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className='values-icon-wrapper'>
                                        <div className="value-icon">
                                            <FaEnvelope />
                                        </div>
                                    </div>
                                    <h4>info@mountdiva.com</h4>
                                    <p>Send us an email and we'll respond within 24 hours</p>
                                    <span className="card-footer">Response within 24h</span>
                                </motion.div>
                                <motion.div
                                    className="info-card"
                                    whileHover={{ y: -5 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className='values-icon-wrapper'>
                                        <div className="value-icon">
                                            <FaMapMarkerAlt />
                                        </div>
                                    </div>
                                    <h4>ALBAHAR Building, Al Khabeesi</h4>
                                    <p>Visit our office for a face-to-face consultation</p>
                                    <span className="card-footer">Open to visitors</span>
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* Google Map */}
                        <motion.div
                            className="map-section"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <div className="section-subtitle">
                                <h2 className="about-heading">Visit Our Office</h2>
                                <div className="title-underline"></div>
                            </div>
                            <div className="map-container">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.954857267737!2d55.33494377538425!3d25.272103977662805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5cea68cbaa51%3A0xfbcf93226ea27caa!2sABDUL%20RAHAM%20AL%20BAHAR%20BUILDING!5e0!3m2!1sen!2sin!4v1758642181796!5m2!1sen!2sin" width="600" height="450" allowFullScreen="" loading="lazy"></iframe>
                                {/* <div className="map-overlay">
                                    <div className="map-info">
                                        <h4>Our Location</h4>
                                        <p>London Eye, London, UK</p>
                                        <button className="directions-btn">Get Directions</button>
                                    </div>
                                </div> */}
                            </div>
                        </motion.div>
                    </div>
                </Page>
            </section>
            <Footer />
        </>
    );
};

export default ContactSection;