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
import t1 from '../assets/bg.jpg';
import t2 from '../assets/bg2.jpg';
import t3 from '../assets/bg1.jpg';
import t4 from '../assets/bg3.jpg';
import t5 from '../assets/bg1.jpg';
import t6 from '../assets/aboutus1.jpg';
const OurServices = () => {
    const serviceImages = [t1, t2, t3, t4, t5, t6];
    const [activeIndex, setActiveIndex] = useState(0);
    return (
        <section id="service" className="service-section" style={{ backgroundImage: `url(${bgImg})` }}>
            <div className="services-overlay">
                <h4 className="small-heading">Our Services</h4>
                <h2 className="main-heading">Delivering Excellence in Every Service</h2>

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
                        const serviceNames = ["Abhishek Oommen", "Anix Samuel", "Paulwin Seby", "Abhinanth Mohan", "Rahul G Nair", "Sunny Stephan"];


                        return (
                            <SwiperSlide key={index} style={{ top: "30px" }} className={`service-slide ${isElevated ? "elevated" : ""}`}>
                                <div className="image-container">
                                    <img src={img} alt="service Performing" />
                                    <div className="image-overlay"></div>
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
