import React from 'react';
import './OurServices.css';
import { motion } from 'framer-motion';
import {
    FaHome,
    FaBuilding,
    FaTree,
    FaPencilRuler,
    FaShoppingBag,
    FaGlassMartiniAlt,
    FaCouch,
    FaHammer,
    FaTv,
    FaPaintRoller
} from 'react-icons/fa';

const services = [
    {
        title: 'Interior Design',
        description: 'Crafting stylish and functional interiors that reflect your personality and purpose.',
        icon: <FaPaintRoller />
    },
    {
        title: 'Residential Design & Build',
        description: 'Complete design and construction solutions for your dream home, blending aesthetics with functionality.',
        icon: <FaHome />
    },
    {
        title: 'Design Consultancy',
        description: 'Expert guidance to refine your vision from concept to execution with tailored solutions.',
        icon: <FaPencilRuler />
    },
    {
        title: 'Corporate Design & Build',
        description: 'Creating inspiring workspaces that reflect your brand identity and enhance productivity.',
        icon: <FaBuilding />
    },
    {
        title: 'Landscaping',
        description: 'Transforming outdoor spaces into serene environments that harmonize with architecture.',
        icon: <FaTree />
    },
    {
        title: 'Renovation Specialist',
        description: 'Breathing new life into existing spaces with innovative transformation solutions.',
        icon: <FaHammer />
    },

];

const values = () => {
    return (
        <section className="our-services-section">
            <div className="our-services-header-padding">
                <div className="our-services-header">
                    <div className='our-service-title'>
                        <h2>Interior Solutions Tailored<br />To You</h2>
                        <div className="our-service-line-heading" />
                    </div>
                    <div className="about-us-line-container">
                        <div className="about-us-line" />
                        <span className="about-us-subtitle">OUR SERVICES</span>
                    </div>
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
                            <div className="service-header">
                                <div className="service-icon">
                                    {service.icon}
                                </div>
                                <h3>{service.title}</h3>
                            </div>
                            <p>{service.description}</p>
                            <div className="service-hover-line"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default values;