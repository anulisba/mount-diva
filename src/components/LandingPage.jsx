// src/components/LandingPage.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './LandingPage.css';
import Header from './Header';
import bg1 from '../assets/bg.jpg'
import bg2 from '../assets/bg1.jpg'
import bg3 from '../assets/bg2.jpg'
import AboutUs from './AboutUs';
import OurServices from './Services';
import ReportCounter from './ReportCounter';
import ProjectSection from './ProjectSection';
import OurWorkFlow from './OurServices';
import CustomerReviews from './CustomerReviews';
import Footer from './Footer';
import { FaInstagram, FaWhatsapp, FaFacebookF, FaArrowRight } from "react-icons/fa";
import ContactLandingSection from './ContactLanding';
import logo from '../assets/logo.png'
import { useNavigate } from 'react-router-dom';
import { FaPaperPlane } from 'react-icons/fa';
import emailjs from 'emailjs-com';
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

import ContactLanding from './ContactLanding';
const SplashScreen = ({ onComplete }) => {
    const [step, setStep] = useState(0);
    const [showElements, setShowElements] = useState(false);

    const companyName = "Mount Diva";
    const tagline = "Fit-Out • Design • Maintenance";

    useEffect(() => {
        const totalSteps = 5;

        const timer = setTimeout(() => {
            if (step < totalSteps) {
                setStep(step + 1);
            } else {
                setTimeout(() => {
                    onComplete();
                }, 600);
            }
        }, step === 0 ? 800 : step === 1 ? 500 : step === 2 ? 400 : step === 3 ? 300 : 800);

        if (step === 1) {
            setShowElements(true);
        }

        return () => clearTimeout(timer);
    }, [step, onComplete]);

    return (
        <div className="splash-container">
            {/* Subtle Background Pattern */}
            <div className="background-pattern" />

            {/* Architectural Grid Lines */}
            {showElements && (
                <div className="grid-lines">
                    <div className="grid-line horizontal"></div>
                    <div className="grid-line vertical"></div>
                    <div className="grid-line diagonal-1"></div>
                    <div className="grid-line diagonal-2"></div>
                </div>
            )}

            {/* Geometric Elements representing construction/fitout */}
            <div className="architectural-elements">
                <motion.div
                    className="element blueprint-square"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 0.1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                />
                <motion.div
                    className="element blueprint-circle"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 0.1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.7 }}
                />
                <motion.div
                    className="element blueprint-triangle"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 0.1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.9 }}
                />
            </div>

            {/* Main Content */}
            <div className="content-wrapper">
                {/* Logo with professional reveal */}
                <motion.div
                    className="logo-container"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{
                        opacity: step >= 0 ? 1 : 0,
                        y: step >= 0 ? 0 : -20
                    }}
                    transition={{
                        duration: 0.8,
                        ease: "easeOut"
                    }}
                >
                    <div className="logo-wrapper">
                        <div className="logo-backdrop">
                            <img src={logo} alt="Mount Diva" className="logo-image" />
                        </div>
                    </div>
                </motion.div>

                {/* Company Name with professional typography */}
                <motion.div
                    className="name-container"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{
                        opacity: step >= 1 ? 1 : 0,
                        y: step >= 1 ? 0 : 10
                    }}
                    transition={{
                        duration: 0.6,
                        ease: "easeOut"
                    }}
                >
                    {companyName}
                </motion.div>

                {/* Tagline emphasizing interior fitout expertise */}
                <motion.div
                    className="tagline-container"
                    initial={{ opacity: 0, y: 5 }}
                    animate={{
                        opacity: step >= 2 ? 1 : 0,
                        y: step >= 2 ? 0 : 5
                    }}
                    transition={{
                        duration: 0.5,
                        ease: "easeOut",
                        delay: 0.2
                    }}
                >
                    {tagline}
                </motion.div>

                {/* Progress indicator resembling architectural measurement */}
                <motion.div
                    className="progress-container"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: step >= 3 ? 1 : 0 }}
                    transition={{ delay: 0.3 }}
                >
                    <div className="progress-indicator">
                        <motion.div
                            className="progress-bar"
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: step >= 4 ? 1 : 0 }}
                            transition={{
                                duration: 0.8,
                                ease: "easeInOut"
                            }}
                        />
                        <div className="progress-marks">
                            {[...Array(5)].map((_, i) => (
                                <div key={i} className="progress-mark" />
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

const ContactPopup = ({ onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     setIsSubmitting(true);

    //     emailjs.send(

    //         'service_jee5dxn',
    //         'template_7w33feq',
    //         {
    //             name: formData.name,
    //             email: formData.email,
    //             phone: formData.phone,
    //             message: formData.message,
    //             to_email: 'info@mountdiva.com'
    //         },
    //         'QsuWbxMdTgVxpVuje'

    //     ).then(() => {
    //         setIsSubmitted(true);
    //         setIsSubmitting(false);
    //         setTimeout(() => {
    //             onClose();
    //         }, 3000);
    //     }).catch((error) => {
    //         console.error('Failed to send message:', error);
    //         setIsSubmitting(false);
    //         alert('Failed to send message. Please try again later.');
    //     });
    // };
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // const whatsappNumber = "971588188566"; // Your WhatsApp number with country code
        const whatsappNumber = "971588188566";
        const textMessage = `New Contact Form Submission:
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Subject: ${formData.subject}
Message: ${formData.message}`;

        // Redirect to WhatsApp
        const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(textMessage)}`;
        window.open(whatsappURL, "_blank");

        setIsSubmitted(true);
        setIsSubmitting(false);

        setTimeout(() => {
            onClose();
        }, 3000);
    };

    return (
        <motion.div
            className="contact-popup-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <motion.div
                className="contact-popup-box"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: 'spring', damping: 25 }}
            >
                <button className="contact-popup-close-btn" onClick={onClose}>✕</button>
                <h2>Interested in Our Services?</h2>
                <p>Leave your details and we'll get back to you!</p>

                <motion.div
                    className="contact-popup-form-container"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                >
                    {isSubmitted ? (
                        <div className="contact-popup-success-message">
                            <FaPaperPlane className="contact-popup-success-icon" />
                            <h3>Message Sent Successfully!</h3>
                            <p>Thank you for contacting us. We'll get back to you soon.</p>
                        </div>
                    ) : (
                        <form className="contact-popup-form" onSubmit={handleSubmit}>
                            <div className="contact-popup-form-group">
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your Name"
                                    required
                                    className="contact-popup-form-input"
                                />
                                <span className="contact-popup-input-highlight"></span>
                            </div>

                            <div className="contact-popup-form-row">
                                <div className="contact-popup-form-group">
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Email Address"
                                        required
                                        className="contact-popup-form-input"
                                    />
                                    <span className="contact-popup-input-highlight"></span>
                                </div>

                                <div className="contact-popup-form-group">
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="Phone Number"
                                        className="contact-popup-form-input"
                                    />
                                    <span className="contact-popup-input-highlight"></span>
                                </div>
                            </div>

                            <div className="contact-popup-form-group">
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    placeholder="Subject"
                                    required
                                    className="contact-popup-form-input"
                                />
                                <span className="contact-popup-input-highlight"></span>
                            </div>

                            <div className="contact-popup-form-group">
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Your Message"
                                    rows="4"
                                    required
                                    className="contact-popup-form-textarea"
                                ></textarea>
                                <span className="contact-popup-input-highlight"></span>
                            </div>

                            <motion.button
                                className="contact-popup-submit-btn"
                                type="submit"
                                disabled={isSubmitting}
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                {isSubmitting ? (
                                    <span>Sending...</span>
                                ) : (
                                    <>
                                        <span>Send Message</span>
                                        <FaPaperPlane className="contact-popup-send-icon" />
                                    </>
                                )}
                                <div className="contact-popup-btn-hover-effect"></div>
                            </motion.button>
                        </form>
                    )}
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

const LandingPage = () => {
    const [showSplash, setShowSplash] = useState(false);
    const [showContent, setShowContent] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showPopup, setShowPopup] = useState(false);
    const slides = [
        {
            image: bg1,
            title: "Your Trusted Partner for Interior Fit-Out & Technical Services in UAE",
            subtitle: "Delivering reliable MEP solutions with quality, efficiency, and integrity."
        },
        {
            image: bg2,
            title: "Building Excellence, One Project at a Time",
            subtitle: "Innovative designs and top-notch technical expertise for your business."
        },
        {
            image: bg3,
            title: "Where Vision Meets Execution",
            subtitle: "Transforming spaces into functional, modern, and sustainable environments."
        }
    ];

    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        // Trigger animations after mount
        setTimeout(() => {
            setAnimate(true);
        }, 1000);
    }, []);
    const navigate = useNavigate();

    const contactus = () => {
        navigate('/contact-us')
    }
    const handleKnowMore = () => {
        navigate('/about-us');
    }
    useEffect(() => {
        const hasSeenSplash = localStorage.getItem('hasSeenSplash');
        if (!hasSeenSplash) {
            setShowSplash(true);
        } else {
            setShowSplash(false);
            // Don't set showContent here - will be handled by the next useEffect
        }
    }, []);

    useEffect(() => {
        if (!showSplash) {
            setShowContent(true);
            const interval = setInterval(() => {
                setCurrentIndex((prev) => (prev + 1) % slides.length);
            }, 3000); // 3 seconds

            return () => clearInterval(interval);
        }
    }, [showSplash]);


    useEffect(() => {
        if (showContent) {
            const popupShown = localStorage.getItem('popupShown');
            if (!popupShown) {
                const popupTimer = setTimeout(() => {
                    setShowPopup(true);
                    localStorage.setItem('popupShown', 'true');
                }, 15000);

                return () => clearTimeout(popupTimer);
            }
        }
    }, [showContent]);

    useEffect(() => {
        const clearOnExit = () => {
            localStorage.removeItem('hasSeenSplash');
            localStorage.removeItem('popupShown');
        };

        window.addEventListener('beforeunload', clearOnExit);
        return () => {
            window.removeEventListener('beforeunload', clearOnExit);
        };
    }, []);

    const handleSplashComplete = () => {
        setShowSplash(false);
        localStorage.setItem('hasSeenSplash', 'true'); // important fix
    };

    return (
        <div className="app-container">

            <AnimatePresence mode="wait">
                {showSplash ? (
                    <SplashScreen onComplete={handleSplashComplete} />
                ) : (

                    <motion.div
                        className="landing-page-container"
                        initial={{ y: "100vh" }}
                        animate={{ y: 0 }}
                        exit={{ y: "-100vh" }}
                        transition={{ duration: 3, ease: [0.10, 1, 0.36, 1] }}
                    >
                        {showContent && (
                            <>
                                <Header />

                                <section className="landing">
                                    <div className={`frame-outline ${animate ? "draw" : ""}`}></div>

                                    <div className={`landing-content ${animate ? "fade-in" : ""}`}>
                                        <h1>
                                            Your Trusted Partner <br /> for Inertior Fit-Out & <br />Technical Services <br /> in UAE
                                        </h1>
                                        <p>
                                            Delivering reliable MEP solutions with quality, efficiency, and integrity.
                                        </p>
                                        <div className="lbtn-group">
                                            {/* Contact Us with WhatsApp link */}
                                            <a href="https://wa.me/971588188566" target="_blank" rel="noopener noreferrer">
                                                <button className="lbtn contact">
                                                    <FaWhatsapp className="licon" /> Contact Us
                                                </button>
                                            </a>

                                            {/* Know More with arrow */}
                                            <button className="lbtn know" onClick={handleKnowMore}>
                                                Know More <FaArrowRight className="licon" />
                                            </button>
                                        </div>
                                    </div>
                                    <div className={`frame-outline ${animate ? "draw" : ""}`}>
                                        <span></span>
                                    </div>

                                </section>


                                {/* Client Logo Scrolling Section */}
                                <section className="client-logos">
                                    <div className="logo-track">
                                        <div className="logo-slide">
                                            <img src={client1} alt="Client 1" />
                                            <img src={client2} alt="Client 2" />
                                            <img src={client3} alt="Client 3" />
                                            <img src={client4} alt="Client 4" />
                                            <img src={client5} alt="Client 5" />
                                            <img src={client6} alt="Client 6" />
                                            <img src={client7} alt="Client 7" />
                                            <img src={client8} alt="Client 8" />
                                            <img src={client10} alt="Client 10" />
                                            <img src={client11} alt="Client 11" />
                                            <img src={client12} alt="Client 12" />
                                            <img src={client13} alt="Client 13" />
                                            <img src={client14} alt="Client 14" />
                                            <img src={client15} slt="client15" />
                                            <img src={client16} slt="client15" />
                                            <img src={client17} slt="client15" />
                                        </div>
                                        {/* Duplicate for seamless loop */}
                                        <div className="logo-slide">
                                            <img src={client1} alt="Client 1" />
                                            <img src={client2} alt="Client 2" />
                                            <img src={client3} alt="Client 3" />
                                            <img src={client4} alt="Client 4" />
                                            <img src={client5} alt="Client 5" />
                                            <img src={client6} alt="Client 6" />
                                            <img src={client7} alt="Client 7" />
                                            <img src={client8} alt="Client 8" />
                                            <img src={client10} alt="Client 10" />
                                            <img src={client11} alt="Client 11" />
                                            <img src={client12} alt="Client 12" />
                                            <img src={client13} alt="Client 13" />
                                            <img src={client14} alt="Client 14" />
                                            <img src={client15} slt="client15" />
                                            <img src={client16} slt="client15" />
                                            <img src={client17} slt="client15" />
                                        </div>
                                    </div>
                                </section>

                                <section id='about-us'>
                                    <AboutUs />
                                </section>
                                <ReportCounter />
                                <OurServices />
                                <section id='workflow'>
                                    <OurWorkFlow />
                                </section>
                                {/* <section id='reviews'>
                                    <CustomerReviews />
                                </section> */}
                                <section id='contact'>
                                    <ContactLanding />
                                </section>
                                <section id='footer'>
                                    <Footer />
                                </section>
                            </>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
            <AnimatePresence>
                {showPopup && (
                    <ContactPopup onClose={() => setShowPopup(false)} />
                )}
            </AnimatePresence>
        </div>
    );
};

export default LandingPage;