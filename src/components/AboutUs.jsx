import React from 'react';
import './AboutUs.css';
import { motion } from 'framer-motion';
import img1 from '../assets/aboutus1.jpg';
import img2 from '../assets/aboutus2.jpg';
import img3 from '../assets/aboutus1.jpg'; // Add a third image for the gallery

const AboutUs = () => {
    return (
        <section id="about-us" className="about-us-section">
            <div className="golden-line"></div>

            <motion.div
                className="about-us-container"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
            >
                <div className="about-text-content">
                    <div className="our-services-header">
                        <div className='our-service-title'>
                            <motion.h2
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                            >Designing More Than Spaces,<br />We Craft Experiences</motion.h2>
                            <div className="our-service-line-heading" />
                        </div>
                        <div className="about-us-line-container">
                            <div className="about-us-line" />
                            <motion.span
                                className="about-us-subtitle"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >ABOUT US</motion.span>
                        </div>

                    </div>


                    <div className="description-container">
                        <motion.p
                            className="about-us-description"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            At Abhi's Planet, we believe interior design is about more than aesthetics — it's about crafting spaces that inspire, uplift, and feel deeply personal.
                            Our thoughtful approach blends creativity with functionality to turn every space into a meaningful reflection of the people who live in it.
                            We aim to create environments that not only look beautiful but also support your lifestyle and well-being.
                        </motion.p>

                        <motion.p
                            className="about-us-description"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                        >
                            With a passion for quality, sustainability, and innovation, our team collaborates closely with each client to understand their vision.
                            From concept to completion, we deliver tailored design solutions that elevate your surroundings and enhance everyday living.
                            Every project is a partnership, and we’re committed to turning your ideas into timeless spaces you’ll love.
                        </motion.p>
                    </div>


                    <motion.div
                        className="button-container"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <motion.button
                            className="about-us-button"
                            whileHover={{
                                color: "#ffffff"
                            }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Contact Us
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </motion.button>
                    </motion.div>
                </div>

                <div className="image-content">
                    <motion.div
                        className="image-grid"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.div
                            className="main-image"
                            whileHover={{ scale: 1.03 }}
                            transition={{ duration: 0.4 }}
                        >
                            <img src="https://res.cloudinary.com/dpo91btlc/image/upload/v1748751683/modern-minimalist-office_2_xxopco.jpg" alt="Luxury interior design" />
                        </motion.div>
                        <div className="secondary-images">
                            <motion.div
                                className="image-2"
                                whileHover={{ scale: 1.03 }}
                                transition={{ duration: 0.4 }}
                            >
                                <img src="https://res.cloudinary.com/dpo91btlc/image/upload/v1748697877/IMG_2211_ylsviu.jpg" alt="Design detail" />
                            </motion.div>
                            <motion.div
                                className="image-3"
                                whileHover={{ scale: 1.03 }}
                                transition={{ duration: 0.4 }}
                            >
                                <img src="https://res.cloudinary.com/dpo91btlc/image/upload/v1748751402/3d-rendering-luxury-modern-living-room-with-fabric-sofa_uglzwv.jpg" alt="Material texture" />
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* <motion.div
                        className="stats-container"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <motion.div
                            className="stat-item"
                            whileHover={{ y: -5 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="stat-value">15+</div>
                            <div className="stat-label">Years Experience</div>
                        </motion.div>
                        <div className="stat-divider"></div>
                        <motion.div
                            className="stat-item"
                            whileHover={{ y: -5 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="stat-value">250+</div>
                            <div className="stat-label">Projects Completed</div>
                        </motion.div>
                        <div className="stat-divider"></div>
                        <motion.div
                            className="stat-item"
                            whileHover={{ y: -5 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="stat-value">50+</div>
                            <div className="stat-label">Awards Received</div>
                        </motion.div>
                    </motion.div> */}
                </div>
            </motion.div>

            <motion.div
                className="signature-container"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.7 }}
            >
                <div className="signature-line"></div>
                <div className="signature">Founder & Creative Director - Abhilash Prasad</div>
            </motion.div>
        </section>
    );
};

export default AboutUs;
