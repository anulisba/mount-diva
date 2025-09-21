// components/ContactSection.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import './ContactUs.css';
import Header from './Header';
import Footer from './Footer';
import Page from './ScrollToTop';
import emailjs from 'emailjs-com';

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

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        emailjs
            .send(
                'service_6c6do5l',
                'template_4t6imcx',
                {
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    message: formData.message,
                    to_email: 'abhisplanet2025@gmail.com'
                },
                'zQ4O3aRATuQjHFFMg'
            )
            .then(() => {
                setIsSubmitted(true);
                setIsSubmitting(false);
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
                    <div className="contact-container">

                        {/* Header */}
                        <motion.div
                            className="contact-header"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}

                        >
                            <h2 className="section-title">Contact Us</h2>
                            <p className="section-description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
                                luctus nec ullamcorper mattis, pulvinar dapibus leo.
                            </p>
                        </motion.div>

                        {/* Logos */}
                        <div className="logo-row">
                            <img src="/logos/logo1.png" alt="logo1" />
                            <img src="/logos/logo2.png" alt="logo2" />
                            <img src="/logos/logo3.png" alt="logo3" />
                            <img src="/logos/logo4.png" alt="logo4" />
                        </div>

                        {/* Form + Newsletter */}
                        <div className="form-newsletter-grid">
                            {/* Contact Form */}
                            <motion.div
                                className="contact-form-container"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
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
                                        <div className="form-row">
                                            <input
                                                type="email"
                                                name="email"
                                                placeholder="Email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                            />
                                            <input
                                                type="text"
                                                name="phone"
                                                placeholder="Phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>

                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="Name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                        />

                                        <textarea
                                            name="message"
                                            placeholder="Message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows="5"
                                            required
                                        ></textarea>

                                        <button type="submit" className="submit-btn" disabled={isSubmitting}>
                                            {isSubmitting ? 'Sending...' : 'Submit Button'}
                                        </button>
                                    </form>
                                )}
                            </motion.div>

                            {/* Newsletter */}
                            <motion.div
                                className="newsletter-box"
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                            >
                                <h3>Our Newsletters</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
                                    luctus nec ullamcorper mattis, pulvinar dapibus leo.
                                </p>
                                <div className="newsletter-form">
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        value={newsletterEmail}
                                        onChange={handleNewsletterChange}
                                    />
                                    <button>Submit Button</button>
                                </div>
                            </motion.div>
                        </div>

                        {/* Contact Info Cards */}
                        <div className="info-cards">
                            <div className="info-card">
                                <FaPhoneAlt />
                                <h4>(+876) 765 665</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                            <div className="info-card">
                                <FaEnvelope />
                                <h4>mail@influenca.id</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                            <div className="info-card">
                                <FaMapMarkerAlt />
                                <h4>London Eye London</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                        </div>

                        {/* Google Map */}
                        <div className="map-container">
                            <iframe
                                title="Google Map"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19802.23640134847!2d-0.1246261!3d51.5032978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604b900fb2f55%3A0xb64b7f6ecb8b67e4!2sLondon%20Eye!5e0!3m2!1sen!2suk!4v1634134534970!5m2!1sen!2suk"
                                width="100%"
                                height="350"
                                allowFullScreen=""
                                loading="lazy"
                            ></iframe>
                        </div>
                    </div>
                </Page>
            </section>
            <Footer />
        </>
    );
};

export default ContactSection;
