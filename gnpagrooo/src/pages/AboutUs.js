import React from 'react';
import './AboutUs.css';
import aboutImage from '../assets/images/about.jpg';
import leafLogo from '../assets/icons/leaf-logo.png';
import certImage1 from '../assets/images/cert1.png';
import certImage2 from '../assets/images/cert2.png';
import certImage3 from '../assets/images/cert3.png';

const AboutUs = () => {
    return (
        <div className="about-page">
            {/* Header Section */}
            <header
                className="about-header"
                style={{ backgroundImage: `url(${aboutImage})` }}
            >
                <div className="header-overlay">
                    <h1>About Us</h1>
                </div>
            </header>

            {/* Main Content */}
            <section className="about-container">
                <div className="about-section">
                    <h1>Company Introduction</h1>
                    <p>
                        GNP AgroSciences Pvt. Ltd. is a leading agrochemical manufacturing company specializing in the production of high-quality crop protection chemicals, fertilizers, plant growth regulators, and other agricultural organic inputs. We have carved a niche for ourselves by designing products that deliver unmatched results in the field. Our approach combines quality with dedicated research to deliver effective solutions at reasonable costs for farmers.
                    </p>
                    <p>
                        The company is committed to strong values, ensuring no compromise on dedication and commitment to our customers. Our proactive approach to technology allows us to utilize sophisticated machinery in both production and research, setting us apart in the industry.
                    </p>
                </div>
                <div className="products-section">
                    <h2>Our Products</h2>
                    <ul>
                        {['Insecticides', 'Herbicides', 'Fungicides', 'Plant Growth Regulators (PGR)', 'Micronutrient & Fertilizers', 'Organic Products'].map((product, index) => (
                            <li key={index}>
                                <img src={leafLogo} alt="Leaf Logo" className="leaf-logo" />
                                {product}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* Vision and Mission */}
            <section className="vision-mission-container">
                <div className="vision-section">
                    <h2>Our Vision</h2>
                    <p>To be a global leader in providing innovative and sustainable agrochemical solutions.</p>
                </div>
                <div className="mission-section">
                    <h2>Our Mission</h2>
                    <p>Our mission is to enhance crop productivity and improve farmers’ livelihoods by developing and manufacturing high-quality agrochemical products.</p>
                </div>
            </section>

            {/* Certifications */}
            <section className="certified-section">
                <h2>Certified By</h2>
                <div className="certified-images">
                    {[certImage1, certImage2, certImage3].map((image, index) => (
                        <div className="certified-item" key={index}>
                            <img src={image} alt={`Certification ${index + 1}`} />
                        </div>
                    ))}
                </div>
            </section>

            {/* YouTube Video */}
            <section className="video-section">
                <h2>Watch Our Video</h2>
                <iframe
                    src="https://www.youtube.com/embed/ki0-nrh22hw?si=asWM1nvn6LEo1Sb_"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </section>
        </div>
    );
};

export default AboutUs;
