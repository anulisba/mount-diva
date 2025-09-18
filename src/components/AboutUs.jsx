import React from "react";
import "./AboutUs.css";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
    const navigate = useNavigate();
    const handleAboutUs = () => {
        navigate('/about-us');
    }
    return (
        <section id="about-us" className="about-us-section">
            <motion.div
                className="about-us-container"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
            >
                {/* Left Image Section */}
                <div className="image-content">
                    <div className="main-image">
                        <img
                            src="https://res.cloudinary.com/dpo91btlc/image/upload/v1757845573/Excellence_Since_2016_n4knjt.png"
                            alt="Excellence"
                        />

                    </div>
                </div>

                {/* Right Text Section */}
                <div className="about-text-content">
                    <span className="about-subtitle">About Us</span>
                    <h2 className="about-heading">Excellence You Can Trust</h2>
                    <p className="about-description">
                        Mount Diva Technical Services L.L.C is a UAE-based company providing
                        reliable technical and MEP solutions with integrity, efficiency, and
                        innovation. Backed by a skilled multinational team, we deliver
                        cost-effective results with speed and precision while maintaining
                        the highest standards. Committed to excellence and professionalism,
                        we focus on building lasting client relationships and creating value
                        for our customers, partners, and community.
                    </p>

                    <button className="about-btn" onClick={handleAboutUs}>Know More</button>
                </div>
            </motion.div>
        </section>
    );
};

export default AboutUs;
