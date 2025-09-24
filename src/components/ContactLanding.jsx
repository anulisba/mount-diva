import React, { useEffect } from "react";
import "./ContactLanding.css";
import { useNavigate } from "react-router-dom";

const ContactLanding = () => {
    const navigate = useNavigate();
    useEffect(() => {
        const text = document.querySelector(".contact-text");
        text.classList.add("fade-up");
    }, []);
    const contactus = () => {
        navigate('/contact-us');
    }
    return (
        <section className="contact-section">
            <div className="contact-box">
                <h2 className="contact-text">
                    Join multiple people <br /> who already trust us!
                </h2>
                <button className="contact-btn" onClick={contactus}>Contact us</button>

                {/* Animated Circles */}
                <div className="circle circle1"></div>
                <div className="circle circle2"></div>
                {/* <div className="circle circle3"></div> */}
            </div>
        </section>
    );
};

export default ContactLanding;
