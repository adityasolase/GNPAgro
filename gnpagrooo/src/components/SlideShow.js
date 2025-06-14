import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import './SlideShow.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';

import slide1 from '../assets/images/slide1.jpg';
import slide2 from '../assets/images/slide2.jpg';
import slide3 from '../assets/images/slide3.jpg';
import slide4 from '../assets/images/slide4.jpg';
import slide5 from '../assets/images/slide5.jpg';

const slides = [
    {
        img: slide1,
        text: "Protect your crops with our advanced pesticide solutions.",
    },
    {
        img: slide2,
        text: "Sustainable farming starts with GNP Agro's eco-friendly products.",
    },
    {
        img: slide3,
        text: "Enhance your yield with our scientifically proven pesticides.",
    },
    {
        img: slide4,
        text: "Join the revolution in agricultural safety and efficacy.",
    },
    {
        img: slide5,
        text: "Partner with us for a greener and safer farming future.",
    },
];

const Home = () => {
    const navigate = useNavigate(); // Initialize useNavigate

    const handleJoinClick = () => {
        navigate('/login'); // Navigate to the LoginSignUp page
    };

    const handleContactClick = () => {
        navigate('/contactus'); // Navigate to the ContactUs page
    };

    return (
        <div className="home-container">
            <Carousel>
                {slides.map((slide, index) => (
                    <Carousel.Item key={index}>
                        <img className="d-block w-100" src={slide.img} alt={`Slide ${index + 1}`} />
                        <Carousel.Caption className="carousel-caption">
                            <h3>{slide.text}</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>

            <div className="carousel-overlay">
                <div className="quote2">
                    <h1><span className="text-orange-500">GNP AGROSCIENCES PVT.LTD</span></h1>
                </div>
                <p className="quote">
                    “Empowering Farmers with Innovative Solutions for a Sustainable Future.”
                </p>
                <div className="button-container">
                    <button onClick={handleJoinClick}>SignUp/Login</button>
                    <button onClick={handleContactClick}>Contact Us</button> {/* Updated */}
                </div>
            </div>
        </div>
    );
};

export default Home;
