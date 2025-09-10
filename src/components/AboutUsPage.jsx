// src/pages/AboutPage.jsx
import React from 'react';
import { motion } from 'framer-motion';
import './AboutUsPage.css';
import Header from './Header';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';
const AboutPage = () => {
    const navigate = useNavigate();
    const handlecontact = () => {
        navigate('/contact-us');
    }
    const services = [
        {
            title: 'Interior Design',
            description: 'Smart spatial planning and elegant design solutions tailored to your lifestyle.',
            image: 'https://res.cloudinary.com/dpo91btlc/image/upload/v1748697879/IMG_2185_i2bhiw.jpg',
        },
        {
            title: 'Residential Design & Build',
            description: 'Complete design and construction solutions for your dream home, blending aesthetics with functionality.',
            image: 'https://res.cloudinary.com/dpo91btlc/image/upload/v1748697879/IMG_2210_l3cwqc.jpg'
        },
        {
            title: 'Design Consultancy',
            description: 'Expert guidance to refine your vision from concept to execution with tailored solutions.',
            image: 'https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
        },
        {
            title: 'Corporate Design & Build',
            description: 'Creating inspiring workspaces that reflect your brand identity and enhance productivity.',
            image: 'https://res.cloudinary.com/dpo91btlc/image/upload/v1748751683/modern-minimalist-office_2_xxopco.jpg'
        },
        {
            title: 'Landscaping',
            description: 'Transforming outdoor spaces into serene environments that harmonize with architecture.',
            image: 'https://images.unsplash.com/photo-1544984243-ec57ea16fe25?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
        },
        {
            title: 'Renovation Specialist',
            description: 'Breathing new life into existing spaces with innovative transformation solutions.',
            image: 'https://res.cloudinary.com/dpo91btlc/image/upload/v1748751402/3d-rendering-luxury-modern-living-room-with-fabric-sofa_uglzwv.jpg'
        },
        {
            title: 'Hospitality Design',
            description: 'Creating luxurious environments for hotels and restaurants that enchant guests.',
            image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
        },
        {
            title: 'Bespoke Furnitures',
            description: 'Custom-crafted furniture pieces designed exclusively for your unique space.',
            image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
        },

        {
            title: 'Exhibition Stand Design',
            description: 'Captivating displays that effectively showcase your brand at events and expos.',
            image: 'https://res.cloudinary.com/dpo91btlc/image/upload/v1748751385/Hungarian_National_Stand_at_Sirha_Lyon_-_WYN_DESIGN_mrz7bq.jpg'
        }
    ];


    const values = [
        {
            title: 'Human-Centered',
            description: 'Prioritizing human experience in every space',
            icon: '👥'
        },
        {
            title: 'Sustainable',
            description: 'Environmentally responsible practices',
            icon: '♻️'
        },
        {
            title: 'Collaborative',
            description: 'True partnership between client and designer',
            icon: '🤝'
        }
    ];

    const workflow = [
        {
            step: '01',
            title: 'Meet Customers',
            description: 'We begin by discussing your space, lifestyle needs, and design preferences to build a clear vision.',
        },
        {
            step: '02',
            title: 'Design Discussion',
            description: 'We collaborate on themes, color palettes, furniture styles, and layouts tailored to your taste and space.',
        },
        {
            step: '03',
            title: 'Drafting Design',
            description: 'We develop detailed floor plans and 3D visualizations to help you preview and refine the interior layout.',
        },
        {
            step: '04',
            title: 'Implementation',
            description: 'We oversee the transformation process—from material selection to furniture setup—ensuring quality execution.',
        },
        {
            step: '05',
            title: 'Final Delivery',
            description: 'We conduct a final walkthrough and deliver a fully styled, functional, and personalized interior space.',
        },
    ];

    return (
        <div className="about-page">
            <Header />
            <div className="about-page-hero">
                <div className="about-page-hero-overlay"></div>
                <motion.div
                    className="about-page-hero-content"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.7 }}
                    >
                        Crafting Spaces with Purpose
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.7 }}
                    >
                        Where design meets emotion and function embraces form
                    </motion.p>
                </motion.div>
            </div>

            {/* Our Story - Minimal redesign */}
            <section className="about-page-story">
                <motion.div
                    className="about-page-section-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <div className="about-page-accent-line"></div>
                    <h2>Our Story</h2>
                </motion.div>

                <div className="about-page-story-content">
                    <motion.div
                        className="about-page-story-text"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        <p>
                            Abhi's Planet began with a simple belief — that interior design should do more than decorate; it should breathe life into spaces and connect deeply with the people who use them.
                            What started as a passion for transforming ordinary rooms into soulful experiences has evolved into a design philosophy centered on authenticity, comfort, and beauty.
                            Every project we take on is an opportunity to tell a unique story through thoughtful details and intuitive design.
                        </p>
                        <p>
                            Today, our team works hand in hand with clients to shape spaces that reflect their vision while embracing sustainability and innovation.
                            From cozy homes to modern commercial interiors, we approach each project with care and creativity, ensuring that every corner feels considered and connected.
                            Our story continues to unfold with every space we design — and we’re honored to be part of yours.
                        </p>
                    </motion.div>

                    {/* <motion.div
                        className="about-page-stats-container"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                    >
                        <div className="about-page-stat-item">
                            <div className="about-page-stat-value">15+</div>
                            <div className="about-page-stat-label">Years</div>
                        </div>
                        <div className="about-page-stat-item">
                            <div className="about-page-stat-value">250+</div>
                            <div className="about-page-stat-label">Projects</div>
                        </div>
                        <div className="about-page-stat-item">
                            <div className="about-page-stat-value">50+</div>
                            <div className="about-page-stat-label">Awards</div>
                        </div>
                    </motion.div> */}
                </div>
            </section>

            {/* Values Section - Minimal redesign */}
            {/* <section className="about-page-values">
                <motion.div
                    className="about-page-section-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <div className="about-page-accent-line"></div>
                    <h2>Our Values</h2>
                </motion.div>

                <div className="about-page-values-grid">
                    {values.map((value, index) => (
                        <motion.div
                            key={index}
                            className="about-page-value-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                        >
                            <div className="about-page-value-icon">{value.icon}</div>
                            <h3>{value.title}</h3>
                            <p>{value.description}</p>
                        </motion.div>
                    ))}
                </div>
            </section> */}

            {/* Services Section - Minimal redesign */}
            <section className="about-page-services">
                <motion.div
                    className="about-page-section-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <div className="about-page-accent-line"></div>
                    <h2>Our Services</h2>
                </motion.div>

                <div className="about-page-services-grid">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className="about-page-service-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <div
                                className="service-image-bg"
                                style={{ backgroundImage: `url(${service.image})` }}
                            >
                                <div className="service-overlay"></div>
                                <div className="service-content">
                                    <h3>{service.title}</h3>
                                    <div className="yellow-line"></div>
                                    <div className="service-description">
                                        <p>{service.description}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Process Section - Minimal redesign */}
            <section className="about-page-process">
                <motion.div
                    className="about-page-section-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <div className="about-page-accent-line"></div>
                    <h2>Our Process</h2>
                </motion.div>

                <div className="about-page-process-steps">
                    {workflow.map((step, index) => (
                        <motion.div
                            key={index}
                            className="about-page-process-step"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                        >
                            <div className="about-page-process-number">{step.step}</div>
                            <div className="about-page-process-content">
                                <h3>{step.title}</h3>
                                <p>{step.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* CTA Section - Kept as requested */}
            <section className="about-page-cta">
                <div className="about-page-cta-overlay"></div>
                <div className="about-page-cta-content">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        Ready to transform your space?
                    </motion.h2>
                    <motion.button
                        className="about-page-cta-button"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        onClick={handlecontact}
                    >
                        Schedule a Consultation
                    </motion.button>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default AboutPage;