import React, { useEffect } from "react";
import { motion } from "framer-motion";
import "./AboutUsPage.css";
import bgImg from '../assets/1u.png'
import Header from "./Header";
import client1 from "../assets/client-logo/Gemini_Generated_Image_fo3c9cfo3c9cfo3c.png";
import client2 from "../assets/client-logo/Gemini_Generated_Image_k38f2nk38f2nk38f.png";
import client3 from "../assets/client-logo/Gemini_Generated_Image_lm3sj5lm3sj5lm3s.png";
import client4 from "../assets/client-logo/Gemini_Generated_Image_p7iktip7iktip7ik.png";
import client5 from "../assets/client-logo/Gemini_Generated_Image_vql01pvql01pvql0.png";
import client6 from "../assets/client-logo/Gemini_Generated_Image_y3u952y3u952y3u9.png";
import client7 from "../assets/client-logo/Gemini_Generated_Image_ymweevymweevymwe.png";
import client8 from "../assets/client-logo/Gemini_Generated_Image_yxun50yxun50yxun.png";

import client10 from "../assets/client-logo/Untitled design (13).png";
import client11 from "../assets/client-logo/Untitled design (14).png";
import client12 from "../assets/client-logo/Untitled design (18).png";
import client13 from "../assets/client-logo/Untitled design (19).png";
import client14 from "../assets/client-logo/Untitled design (20).png";
import client15 from "../assets/client-logo/Untitled design (21).png";
import client16 from '../assets/client-logo/Untitled design (22).png';
import client17 from '../assets/client-logo/WhatsApp Image 2025-09-12 at 2.29.06 PM.jpeg';
import Footer from "./Footer";
const AboutUsPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="aboutus-page-container">
            <Header />
            {/* Hero Section with Geometric Background */}
            <section className="aboutus-page-hero">
                <div className="hero-content-abt">
                    <motion.h1
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        About Mount Diva
                    </motion.h1>
                    <motion.p className="since-text-abt"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                    >
                        Since 2016
                    </motion.p>

                </div>
            </section>

            {/* Introduction with Diagonal Split Layout */}
            <motion.section
                className="aboutus-page-section intro-diagonal"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
            >
                <div className="diagonal-bg">
                    <div className="diagonal-content">
                        <h2 className="about-heading-wh">Who We Are</h2>
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
            <section className="mission-vision-modern">
                <div className="container">


                    <div className="mv-container">
                        <motion.div
                            className="mv-card mission-card"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                        >
                            <div className="mv-card-header">

                                <h3 className="about-heading">Our Mission</h3>
                            </div>
                            <p>
                                To empower businesses and individuals through cutting-edge solutions,
                                fostering growth, efficiency, and sustainability. We strive to deliver
                                exceptional project management, transparency, and accountability while
                                valuing the dedication of our employees.
                            </p>
                            <div className="mv-card-highlight"></div>
                        </motion.div>

                        <div className="mv-center-divider">
                            <div className="mv-divider-line"></div>
                            <div className="mv-divider-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm.53 5.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l1.72-1.72v5.69a.75.75 0 0 0 1.5 0v-5.69l1.72 1.72a.75.75 0 1 0 1.06-1.06l-3-3Z" clipRule="evenodd" />
                                </svg>
                            </div>
                        </div>

                        <motion.div
                            className="mv-card vision-card"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7, delay: 0.4 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                        >
                            <div className="mv-card-header">

                                <h3 className="about-heading">Our Vision</h3>
                            </div>
                            <p>
                                To maintain and strengthen the quality we provide to our customers. With
                                years of experience on major projects and a strong client base, we are
                                committed to engineering and construction excellence driven by teamwork
                                and shared values.
                            </p>
                            <div className="card-highlight"></div>
                        </motion.div>
                    </div>
                </div>
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
                    <h2 className="about-heading">Our Esteemed Clients</h2>
                    <div className="divider-line"></div>
                    <p>
                        We are privileged to work with some of the most prestigious names in the
                        hospitality and real estate sector including Hilton, Waldorf Astoria, Landmark
                        Group, Marriott, Aldar Hospitality, and many more across the UAE.
                    </p>
                </div>
                <div className="clients-logos-grid">
                    {/* Client logos - add more as needed */}
                    {[
                        { src: client1, alt: "Client 1" },
                        { src: client2, alt: "Client 2" },
                        { src: client3, alt: "Client 3" },
                        { src: client4, alt: "Client 4" },
                        { src: client5, alt: "Client 5" },
                        { src: client6, alt: "Client 6" },
                        { src: client7, alt: "Client 7" },
                        { src: client8, alt: "Client 8" },
                        { src: client10, alt: "Client 10" },
                        { src: client11, alt: "Client 11" },
                        { src: client12, alt: "Client 12" },
                        { src: client13, alt: "Client 13" },
                        { src: client14, alt: "Client 14" },
                        { src: client15, alt: "Client 15" },
                        { src: client16, alt: "Client 16" },
                        { src: client17, alt: "Client 17" },
                    ].map((client, index) => (
                        <div key={index} className="client-logo-grid">
                            <img
                                key={index} src={client.src} alt={client.alt}
                            />
                        </div>
                    ))}
                </div>
            </motion.section>

            {/* Why Choose Mount Diva Section */}
            <div style={{ backgroundImage: "url('https://res.cloudinary.com/dpo91btlc/image/upload/v1758446708/Untitled_design_12_y2nfi3.png')" }}>
                <motion.section
                    className="why-choose-vsteps"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}

                >

                    <h2 className="about-heading">Why Choose Mount Diva?</h2>
                    <div className="divider-line"></div>
                    <div className="vsteps-container">
                        <div className="vstep">
                            <div className="vstep-number">01</div>
                            <div className="vstep-content">
                                <h4>Expert Technicians</h4>
                                <p>Expertise and skills of highly trained technicians</p>
                            </div>
                        </div>
                        <div className="vstep">
                            <div className="vstep-number">02</div>
                            <div className="vstep-content">
                                <h4>Modern Fleet</h4>
                                <p>Fully equipped new fleet of vans</p>
                            </div>
                        </div>
                        <div className="vstep">
                            <div className="vstep-number">03</div>
                            <div className="vstep-content">
                                <h4>Quality Control</h4>
                                <p>Stringent quality control processes</p>
                            </div>
                        </div>
                        <div className="vstep">
                            <div className="vstep-number">04</div>
                            <div className="vstep-content">
                                <h4>Customer Focus</h4>
                                <p>Customer-focused, responsive service</p>
                            </div>
                        </div>
                        <div className="vstep">
                            <div className="vstep-number">05</div>
                            <div className="vstep-content">
                                <h4>Reliability</h4>
                                <p>Best-in-class accountability and reliability</p>
                            </div>
                        </div>
                    </div>
                </motion.section>
            </div>

            {/* Our Commitment Section */}
            {/* <motion.section
                className="our-commitment-vsteps"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
            >
                <h2 className="about-heading">Our Commitment</h2>
                <div className="divider-line"></div>
                <div className="vsteps-container">
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
            </motion.section> */}

            {/* Core Values with Modern Card Layout */}
            <motion.section
                className="core-values-section"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
            >
                <div className="c">
                    <h2 className="about-heading">Our Core Values</h2>
                    <div className="service-name-line"></div>

                    <div className="cvalues-grid">
                        <motion.div
                            className="cvalue-item"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.05 }}
                        >
                            <div className="cvalue-content">
                                <div className="cvalue-number">01</div>
                                <h4>Teamwork</h4>
                                <p>Collaborating effectively to achieve common goals</p>
                            </div>
                            <div className="cvalue-hover-bg"></div>
                        </motion.div>

                        <motion.div
                            className="cvalue-item"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.05 }}
                        >
                            <div className="cvalue-content">
                                <div className="cvalue-number">02</div>
                                <h4>Customer Experience</h4>
                                <p>Putting customers at the center of everything we do</p>
                            </div>
                            <div className="cvalue-hover-bg"></div>
                        </motion.div>

                        <motion.div
                            className="cvalue-item"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.05 }}
                        >
                            <div className="cvalue-content">
                                <div className="cvalue-number">03</div>
                                <h4>Courtesy</h4>
                                <p>Treating everyone with respect and professionalism</p>
                            </div>
                            <div className="cvalue-hover-bg"></div>
                        </motion.div>

                        <motion.div
                            className="cvalue-item"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.05 }}
                        >
                            <div className="cvalue-content">
                                <div className="cvalue-number">04</div>
                                <h4>Commitment</h4>
                                <p>Dedicated to delivering on our promises</p>
                            </div>
                            <div className="cvalue-hover-bg"></div>
                        </motion.div>

                        <motion.div
                            className="cvalue-item"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.05 }}
                        >
                            <div className="cvalue-content">
                                <div className="cvalue-number">05</div>
                                <h4>Integrity</h4>
                                <p>Doing the right thing, even when no one is watching</p>
                            </div>
                            <div className="cvalue-hover-bg"></div>
                        </motion.div>
                    </div>
                </div>
            </motion.section>
            <div style={{ marginBottom: "20px" }}></div>
            <Footer />
        </div>
    );
};

export default AboutUsPage;