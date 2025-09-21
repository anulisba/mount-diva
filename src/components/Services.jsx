import React, { useEffect, useState } from "react";
import "./Services.css";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons for the hamburger menu
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import bgImg from '../assets/1u.png';
const OurServices = () => {
    const serviceImages = ['https://res.cloudinary.com/dpo91btlc/image/upload/v1758444839/Untitled_design_9_buapq6.png', 'https://res.cloudinary.com/dpo91btlc/image/upload/v1758444839/Untitled_design_10_x6j8bb.png', 'https://res.cloudinary.com/dpo91btlc/image/upload/v1758444839/Untitled_design_11_bwekwu.png', 'https://res.cloudinary.com/dpo91btlc/image/upload/v1758211246/Untitled_design_2_i4l5j7.png', 'https://res.cloudinary.com/dpo91btlc/image/upload/v1758211245/Untitled_design_3_nlukvw.png', 'https://res.cloudinary.com/dpo91btlc/image/upload/v1758211246/Untitled_design_1_md5qqz.png', 'https://res.cloudinary.com/dpo91btlc/image/upload/v1758211245/Untitled_design_4_xvcpez.png'];
    const [activeIndex, setActiveIndex] = useState(0);
    return (
        <section id="service" className="service-section" style={{ backgroundImage: `url(${bgImg})` }}>
            <div className="services-overlay">
                <span className="about-subtitle">Our Services</span>
                <h2 className="about-heading">Delivering Excellence in Every Service</h2>

                <div className="service-name-line"></div>
                <Swiper
                    modules={[Navigation, Autoplay]}
                    spaceBetween={50}
                    slidesPerView={1}
                    loop={true}
                    speed={2000}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    navigation={true}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        640: { slidesPerView: 2, spaceBetween: 20 },
                        1024: { slidesPerView: 3, spaceBetween: 30 }
                    }}
                    className="service-slider"
                    onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                >

                    {serviceImages.map((img, index) => {
                        const isElevated = index === (activeIndex + 1) % serviceImages.length;
                        const serviceNames = ["Management Services", "AMC services", "Painting & Decorating", "Annual Maintenance Contracts", "Maintenance on a Call-Out Basis", "Glass works and Aluminium works", "Interior Designing"];


                        return (
                            <SwiperSlide key={index} style={{ top: "30px" }} className={`service-slide ${isElevated ? "elevated" : ""}`}>
                                <div className="image-container">
                                    <img src={img} alt="service Performing" />

                                    <div className="service-info">

                                        <div className="service-text">
                                            <h3>{serviceNames[index]}</h3>
                                            <div className="blue-line"></div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        );
                    })}



                </Swiper>
            </div>

        </section>
    );
};

export default OurServices;
