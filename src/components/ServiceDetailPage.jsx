import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./ServiceDetailPage.css";
import bgImg from '../assets/1u.png';

const ServiceDetail = () => {
    const [activeService, setActiveService] = useState(0);

    const services = [
        {
            id: 0,
            name: "Management Services",
            image: "https://res.cloudinary.com/dpo91btlc/image/upload/v1758211588/Untitled_design_7_kdxdg3.png",
            description: "Our comprehensive management services ensure your property is maintained to the highest standards with regular inspections, vendor management, and quality control.",
            details: [
                "Regular property inspections and assessments",
                "Vendor and contractor management",
                "Quality control and assurance",
                "Preventive maintenance scheduling",
                "Budget management and cost optimization"
            ],
            workflow: [
                "Initial property assessment",
                "Customized maintenance plan development",
                "Implementation of management protocols",
                "Regular monitoring and reporting",
                "Continuous improvement and optimization"
            ]
        },
        {
            id: 1,
            name: "AMC Services",
            image: "https://res.cloudinary.com/dpo91btlc/image/upload/v1758211584/Untitled_design_6_mxnxvp.png",
            description: "Annual Maintenance Contracts provide peace of mind with scheduled maintenance, priority service, and cost predictability for all your property needs.",
            details: [
                "Scheduled preventive maintenance",
                "Priority response for emergency calls",
                "Discounted rates on parts and labor",
                "Comprehensive system checks",
                "Detailed maintenance reports"
            ],
            workflow: [
                "Contract customization based on property needs",
                "Scheduled maintenance visits",
                "Detailed inspection and servicing",
                "Comprehensive reporting",
                "Follow-up and feedback collection"
            ]
        },
        {
            id: 2,
            name: "Painting & Decorating",
            image: "https://res.cloudinary.com/dpo91btlc/image/upload/v1758211584/Untitled_design_5_lrkizr.png",
            description: "Transform your space with our professional painting and decorating services, using high-quality materials and skilled craftsmen.",
            details: [
                "Interior and exterior painting",
                "Surface preparation and repair",
                "Color consultation services",
                "Wallpaper installation and removal",
                "Special finishes and decorative techniques"
            ],
            workflow: [
                "Color consultation and selection",
                "Surface preparation and repair",
                "Priming and protection",
                "Precision application",
                "Cleanup and final inspection"
            ]
        },
        {
            id: 3,
            name: "Annual Maintenance Contracts",
            image: "https://res.cloudinary.com/dpo91btlc/image/upload/v1758211246/Untitled_design_2_i4l5j7.png",
            description: "Our comprehensive annual maintenance contracts ensure your property remains in optimal condition throughout the year with regular servicing and priority support.",
            details: [
                "Regular system inspections",
                "Preventive maintenance scheduling",
                "Priority response times",
                "Discounted repair rates",
                "24/7 emergency support"
            ],
            workflow: [
                "Comprehensive property assessment",
                "Customized maintenance plan",
                "Scheduled service visits",
                "Detailed reporting",
                "Continuous plan optimization"
            ]
        },
        {
            id: 4,
            name: "Maintenance on a Call-Out Basis",
            image: "https://res.cloudinary.com/dpo91btlc/image/upload/v1758211245/Untitled_design_3_nlukvw.png",
            description: "For those who prefer flexibility, our call-out maintenance service provides expert assistance when you need it, without long-term commitments.",
            details: [
                "Flexible service without contracts",
                "Rapid response times",
                "Transparent pricing",
                "Skilled technicians",
                "Comprehensive problem resolution"
            ],
            workflow: [
                "Service request received",
                "Rapid dispatch of appropriate technician",
                "Problem diagnosis and solution proposal",
                "Efficient service delivery",
                "Quality assurance and follow-up"
            ]
        },
        {
            id: 5,
            name: "Glass works and Aluminium works",
            image: "https://res.cloudinary.com/dpo91btlc/image/upload/v1758211246/Untitled_design_1_md5qqz.png",
            description: "Expert installation, repair, and maintenance of glass and aluminum structures to enhance both functionality and aesthetics of your property.",
            details: [
                "Window and door installation",
                "Glass replacement and repair",
                "Aluminum framing systems",
                "Shower enclosures and partitions",
                "Custom glass and aluminum fabrication"
            ],
            workflow: [
                "Assessment of requirements",
                "Precise measurements",
                "Fabrication or sourcing of materials",
                "Professional installation",
                "Quality inspection and finishing"
            ]
        },
        {
            id: 6,
            name: "Interior Designing",
            image: "https://res.cloudinary.com/dpo91btlc/image/upload/v1758211245/Untitled_design_4_xvcpez.png",
            description: "Create beautiful, functional spaces with our interior design services, combining aesthetic vision with practical solutions for residential and commercial properties.",
            details: [
                "Space planning and layout design",
                "Color scheme and material selection",
                "Furniture and fixture specification",
                "Lighting design",
                "Project management and implementation"
            ],
            workflow: [
                "Client consultation and needs assessment",
                "Concept development and presentation",
                "Detailed design development",
                "Implementation and project management",
                "Final styling and client handover"
            ]
        }
    ];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="service-detail-container">
            {/* Hero Section */}
            <section
                className="service-detail-hero"
                style={{ backgroundImage: `url(${bgImg})` }}
            >
                <div className="hero-overlay-service">
                    <motion.h1
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        Our Services
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                    >
                        Comprehensive solutions for your property maintenance needs
                    </motion.p>
                </div>
            </section>

            {/* Service Navigation */}
            <section className="service-navigation">
                <div className="container">
                    <h2 className="about-heading">Explore Our Services</h2>
                    <div className="service-name-line"></div>

                    <div className="service-tabs-mobile">
                        {services.map((service, index) => (
                            <div key={service.id} className="mobile-service-item">
                                <button
                                    className={`service-tab ${activeService === index ? 'active' : ''}`}

                                    onClick={(e) => {
                                        e.preventDefault(); // Prevent browser scroll
                                        setActiveService(activeService === index ? null : index);
                                    }}
                                >
                                    {service.name}
                                </button>

                                {activeService === index && (
                                    <div className="mobile-service-details">
                                        <div className="service-image-container">
                                            <img
                                                src={service.image}
                                                alt={service.name}
                                                className="service-detail-image"
                                            />
                                        </div>
                                        <div className="service-text-content">
                                            <p className="service-description">{service.description}</p>
                                            <div className="service-features">
                                                <h3>Service Features</h3>
                                                <ul>
                                                    {service.details.map((detail, i) => (
                                                        <li key={i}>{detail}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Desktop Version */}
                    <div className="service-tabs-desktop">
                        {services.map((service, index) => (
                            <button
                                key={service.id}
                                type="button" // <-- important
                                className={`service-tab ${activeService === index ? 'active' : ''}`}
                                onClick={() => setActiveService(index)}
                            >
                                {service.name}
                            </button>
                        ))}
                    </div>

                </div>
            </section>

            {/* Desktop Service Details */}
            <section className="service-details-section desktop-only">
                <div className="container">
                    <div className="service-content">
                        <div className="service-image-container">
                            <img
                                src={services[activeService].image}
                                alt={services[activeService].name}
                                className="service-detail-image"
                            />
                        </div>
                        <div className="service-text-content">
                            <h2 className="about-heading">{services[activeService].name}</h2>
                            <div className="service-name-line"></div>
                            <p className="service-description">{services[activeService].description}</p>
                            <div className="service-features">
                                <h3>Service Features</h3>
                                <ul>
                                    {services[activeService].details.map((detail, index) => (
                                        <li key={index}>{detail}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Workflow Section */}
            <section className="workflow-section">
                <div className="container">
                    <h2 className="about-heading">Our Workflow Process</h2>
                    <div className="service-name-line"></div>
                    <p className="workflow-intro">
                        We follow a structured approach to ensure quality service delivery for {services[activeService].name}
                    </p>

                    <div className="workflow-steps">
                        {services[activeService].workflow.map((step, index) => (
                            <motion.div
                                key={index}
                                className="workflow-step"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className="step-number">{index + 1}</div>
                                <div className="step-content">
                                    <h4>{step}</h4>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="why-choose-service">
                <div className="container">
                    <h2 className="about-heading">Why Choose The Mount Diva Team for AMCs?</h2>
                    <div className="service-name-line"></div>
                    <div className="why-choose-content">
                        <p>
                            Over the last few years, a recurring topic of conversation amongst friends and colleagues
                            has been the noticeable shortage of high quality, property-related home maintenance
                            services in Dubai, which we as landlords and tenants ourselves, have unfortunately
                            experienced firsthand. The opportunity to make a significant difference and deliver a step-
                            change in existing standards was the inspiration behind establishing The Mount diva Team.
                        </p>
                        <p>
                            We propose to do this by offering a best-in-class, residential-focused service in home
                            maintenance. The Mount diva Team has invested in bringing together specialist managers and
                            technicians that collectively possess decades of experience in providing these services in
                            demanding international markets to create <strong>Dubai's premier building service-related
                                maintenance specialists</strong>.
                        </p>

                        <div className="benefits-grid">
                            <div className="benefit-item">
                                <h4>Friendly & Professional</h4>
                                <p>Words not typically associated with property maintenance companies, but those frequently used by customers to describe our services.</p>
                            </div>
                            <div className="benefit-item">
                                <h4>Fully Insured</h4>
                                <p>Accountability is usually the elephant in the room for businesses like ours. However, you can relax knowing that we're fully insured.</p>
                            </div>
                            <div className="benefit-item">
                                <h4>Qualified Technicians</h4>
                                <p>In our line of work, it's our reputation that makes (or breaks) us. That's why we only employ qualified technicians with the knowledge and hands-on skills to get it right, first time.</p>
                            </div>
                            <div className="benefit-item">
                                <h4>Value for Money</h4>
                                <p>We combine competitive prices with the highest standards of service, which provides great value for money.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServiceDetail;