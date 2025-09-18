import React from 'react';
import './OurServices.css';
import { motion } from 'framer-motion';
import {
    FaChartLine,
    FaUserTie,
    FaBalanceScale,
    FaHandsHelping,
    FaDollarSign,
    FaLightbulb
} from "react-icons/fa";

const services = [
    {
        title: 'Consistent High Quality',
        description: 'We ensure top-notch quality in every project, maintaining excellence from start to finish.',
        icon: <FaChartLine />
    },
    {
        title: 'Professionalism',
        description: 'Our team upholds the highest standards of professionalism in communication, conduct, and delivery.',
        icon: <FaUserTie />
    },
    {
        title: 'Integrity',
        description: 'We build trust by being transparent, ethical, and committed to doing the right thing always.',
        icon: <FaBalanceScale />
    },
    {
        title: 'Genuine Customer Care',
        description: 'Our clients are at the heart of everything we do, ensuring personalized attention and lasting relationships.',
        icon: <FaHandsHelping />
    },
    {
        title: 'Value for Money',
        description: 'We deliver services that maximize impact and efficiency, ensuring the best return on investment.',
        icon: <FaDollarSign />
    },
    {
        title: 'Innovation',
        description: 'We embrace creativity and modern solutions to bring fresh, forward-thinking ideas to every project.',
        icon: <FaLightbulb />
    },
];

const values = () => {
    return (
        <section className="our-services-section">
            <div className="our-services-header-padding">
                <div className="our-services-header">
                    <span className="about-subtitle">Our Values</span>
                    <h2 className="about-heading">Why People Choose Us</h2>
                </div>
            </div>
            <div className="our-services-grid-wrapper">
                <div className="our-services-grid">
                    {services.map((service, index) => (
                        <motion.div
                            className="service-card"
                            key={index}
                            initial={{ x: -50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.2, ease: 'easeInOut' }}
                            viewport={{ once: false, amount: 0.3 }}
                        >
                            <div className="service-card-inner">
                                {/* Front */}
                                <div className="service-card-front">
                                    <div className="service-icon">{service.icon}</div>
                                    <h3>{service.title}</h3>
                                </div>

                                {/* Back */}
                                <div className="service-card-back">
                                    <p>{service.description}</p>
                                </div>
                            </div>
                        </motion.div>

                    ))}
                </div>
            </div>
        </section>
    );
};

export default values;