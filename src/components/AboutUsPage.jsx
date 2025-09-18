import React from "react";
import { motion } from "framer-motion";
import "./AboutUsPage.css";

const AboutUsPage = () => {
    return (
        <div className="aboutus-container">
            {/* Hero Section with Geometric Background */}
            <section className="aboutus-hero">

                <div className="hero-content">
                    <motion.h1
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        About Mount Diva
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                    >
                        At Mount Diva Technical Services LLC, we redefine service standards with
                        quality, professionalism, and customer care at the heart of everything we do.
                    </motion.p>
                </div>
            </section>

            {/* Introduction with Diagonal Split Layout */}
            <motion.section
                className="aboutus-section intro-diagonal"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
            >
                <div className="diagonal-bg">
                    <div className="diagonal-content">
                        <h2>Who We Are</h2>
                        <div className="divider-line"></div>
                        <p>
                            Mount Diva Technical Services L.L.C is a UAE-based company focused on
                            delivering excellence through technical services. We pride ourselves in how
                            we connect with our customers and the trust we build through every project.
                            Our practices revolve around creating a professional, positive, and seamless
                            experience for clients, ensuring value and quality at every step.
                        </p>
                    </div>
                </div>
                <div className="diagonal-image">
                    <img src="https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                        alt="Technical team working" />
                </div>
            </motion.section>

            {/* Mission & Vision with Card Layout */}
            <section className="mission-vision-cards">
                <motion.div
                    className="mv-card mission-card"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: false }}
                >

                    <h3>Our Mission</h3>
                    <p>
                        To empower businesses and individuals through cutting-edge solutions,
                        fostering growth, efficiency, and sustainability. We strive to deliver
                        exceptional project management, transparency, and accountability while
                        valuing the dedication of our employees.
                    </p>
                </motion.div>

                <motion.div
                    className="mv-card vision-card"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    viewport={{ once: false }}
                >

                    <h3>Our Vision</h3>
                    <p>
                        To maintain and strengthen the quality we provide to our customers. With
                        years of experience on major projects and a strong client base, we are
                        committed to engineering and construction excellence driven by teamwork
                        and shared values.
                    </p>
                </motion.div>
            </section>

            {/* Clients Section with Logo Grid */}
            <motion.section
                className="clients-section-grid"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
            >
                <div className="clients-content">
                    <h2>Our Esteemed Clients</h2>
                    <div className="divider-line"></div>
                    <p>
                        We are privileged to work with some of the most prestigious names in the
                        hospitality and real estate sector including Hilton, Waldorf Astoria, Landmark
                        Group, Marriott, Aldar Hospitality, and many more across the UAE.
                    </p>
                </div>
                <div className="clients-logos-grid">
                    {/* Client logos - add more as needed */}
                    {[...Array(15)].map((_, i) => (
                        <div key={i} className="client-logo-grid">
                            <img
                                src={`https://logo.clearbit.com/example${i % 5 + 1}.com`}
                                alt={`Client ${i + 1}`}
                            />
                        </div>
                    ))}
                </div>
            </motion.section>

            {/* Why Choose Mount Diva Section */}
            <motion.section
                className="why-choose-steps"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
            >
                <h2>Why Choose Mount Diva?</h2>
                <div className="divider-line"></div>
                <div className="steps-container">
                    <div className="step">
                        <div className="step-number">01</div>
                        <div className="step-content">
                            <h4>Expert Technicians</h4>
                            <p>Expertise and skills of highly trained technicians</p>
                        </div>
                    </div>
                    <div className="step">
                        <div className="step-number">02</div>
                        <div className="step-content">
                            <h4>Modern Fleet</h4>
                            <p>Fully equipped new fleet of vans</p>
                        </div>
                    </div>
                    <div className="step">
                        <div className="step-number">03</div>
                        <div className="step-content">
                            <h4>Quality Control</h4>
                            <p>Stringent quality control processes</p>
                        </div>
                    </div>
                    <div className="step">
                        <div className="step-number">04</div>
                        <div className="step-content">
                            <h4>Customer Focus</h4>
                            <p>Customer-focused, responsive service</p>
                        </div>
                    </div>
                    <div className="step">
                        <div className="step-number">05</div>
                        <div className="step-content">
                            <h4>Reliability</h4>
                            <p>Best-in-class accountability and reliability</p>
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* Our Commitment Section */}
            <motion.section
                className="our-commitment-steps"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
            >
                <h2>Our Commitment</h2>
                <div className="divider-line"></div>
                <div className="steps-container">
                    <div className="step">
                        <div className="step-number">01</div>
                        <div className="step-content">
                            <h4>Quality Excellence</h4>
                            <p>Uncompromising commitment to quality in all our services</p>
                        </div>
                    </div>
                    <div className="step">
                        <div className="step-number">02</div>
                        <div className="step-content">
                            <h4>Timely Delivery</h4>
                            <p>Completing projects within agreed timelines</p>
                        </div>
                    </div>
                    <div className="step">
                        <div className="step-number">03</div>
                        <div className="step-content">
                            <h4>Customer Satisfaction</h4>
                            <p>Ensuring complete customer satisfaction</p>
                        </div>
                    </div>
                    <div className="step">
                        <div className="step-number">04</div>
                        <div className="step-content">
                            <h4>Innovation</h4>
                            <p>Continuous improvement and innovation</p>
                        </div>
                    </div>
                    <div className="step">
                        <div className="step-number">05</div>
                        <div className="step-content">
                            <h4>Sustainability</h4>
                            <p>Environmentally responsible practices</p>
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* Core Values with Modern Card Layout */}
            <motion.section
                className="core-values-cards"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
            >
                <h2>Our Core Values</h2>
                <div className="divider-line"></div>
                <div className="values-container">
                    <div className="value-card">
                        <div className="value-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 5.5V7H9V5.5L3 7V9L9 10.5V12L3 13.5V15.5L9 14V16H15V14L21 15.5V13.5L15 12V10.5L21 9Z" />
                            </svg>
                        </div>
                        <h4>Teamwork</h4>
                        <p>Collaborating effectively to achieve common goals</p>
                    </div>
                    <div className="value-card">
                        <div className="value-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path d="M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22 22 17.52 22 12 17.52 2 12 2ZM7.07 18.28C7.5 17.38 10.12 16.5 12 16.5S16.5 17.38 16.93 18.28C15.57 19.36 13.86 20 12 20S8.43 19.36 7.07 18.28ZM18.36 16.83C16.93 15.09 13.46 14.5 12 14.5S7.07 15.09 5.64 16.83C4.62 15.49 4 13.82 4 12C4 7.59 7.59 4 12 4S20 7.59 20 12C20 13.82 19.38 15.49 18.36 16.83ZM12 6C10.06 6 8.5 7.56 8.5 9.5S10.06 13 12 13 15.5 11.44 15.5 9.5 13.94 6 12 6ZM12 11C11.17 11 10.5 10.33 10.5 9.5S11.17 8 12 8 13.5 8.67 13.5 9.5 12.83 11 12 11Z" />
                            </svg>
                        </div>
                        <h4>Customer Experience</h4>
                        <p>Putting customers at the center of everything we do</p>
                    </div>
                    <div className="value-card">
                        <div className="value-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path d="M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22 22 17.52 22 12 17.52 2 12 2ZM7 12C7 10.9 7.9 10 9 10C10.1 10 11 10.9 11 12C11 13.1 10.1 14 9 14C7.9 14 7 13.1 7 12ZM15 14C13.9 14 13 13.1 13 12C13 10.9 13.9 10 15 10C16.1 10 17 10.9 17 12C17 13.1 16.1 14 15 14Z" />
                            </svg>
                        </div>
                        <h4>Courtesy</h4>
                        <p>Treating everyone with respect and professionalism</p>
                    </div>
                    <div className="value-card">
                        <div className="value-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path d="M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22 22 17.52 22 12 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20ZM16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z" />
                            </svg>
                        </div>
                        <h4>Commitment</h4>
                        <p>Dedicated to delivering on our promises</p>
                    </div>
                    <div className="value-card">
                        <div className="value-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path d="M14 9H10V15H14V9ZM16 17H8V7H16V17ZM12 2C6.48 2 2 6.48 2 12S6.48 22 12 22 22 17.52 22 12 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20Z" />
                            </svg>
                        </div>
                        <h4>Integrity</h4>
                        <p>Doing the right thing, even when no one is watching</p>
                    </div>
                </div>
            </motion.section>
        </div>
    );
};

export default AboutUsPage;