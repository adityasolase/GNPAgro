
import React, { useState } from 'react';
import './Products.css';
import { useCartContext } from '../context/CartContext'; 
import { Link } from 'react-router-dom'; 

import Agriminda from '../assets/images/insecticidess/Agriminda.jpg';
import Bold4GR from '../assets/images/insecticidess/Bold4GR.jpg';
import DiZine from '../assets/images/insecticidess/DiZine.jpg';
import Fipropride from '../assets/images/insecticidess/Fipropride.jpg';
import GFipro from '../assets/images/insecticidess/GFipro.jpg';
import Gmire from '../assets/images/insecticidess/Gmire.jpg';
import GRoma from '../assets/images/insecticidess/GRoma.jpg';
import KeeparPlus from '../assets/images/insecticidess/KeeparPlus.jpg';
import Gati from '../assets/images/herbicidess/Gati.jpg';
import Glypho from '../assets/images/herbicidess/Glypho.jpg';
import GOxy from '../assets/images/herbicidess/GOxy.jpg';
import Imizza from '../assets/images/herbicidess/Imizza.jpg';
import Matraaz from '../assets/images/herbicidess/Matraaz.jpg';
import Pclor from '../assets/images/herbicidess/Pclor.jpg';
import SuperKill from '../assets/images/herbicidess/SuperKill.jpg';
import Gtwofour from '../assets/images/herbicidess/Gtwofour.jpg';
import Blutol from '../assets/images/fungicidess/Blutol.jpg';
import Carbol from '../assets/images/fungicidess/Carbol.jpg';
import Carmax from '../assets/images/fungicidess/Carmax.jpg';
import Cleaver from '../assets/images/fungicidess/Cleaver.jpg';
import Cymote from '../assets/images/fungicidess/Cymote.jpg';
import Gold from '../assets/images/fungicidess/Gold.jpg';
import HexaSuper from '../assets/images/fungicidess/HexaSuper.jpg';
import Jivic from '../assets/images/fungicidess/Jivic.jpg';
import DonSuper from '../assets/images/organics/DonSuper.jpg';
import GLong from '../assets/images/organics/GLong.jpg';
import GoldSuper from '../assets/images/organics/GoldSuper.jpg';
import HumiP from '../assets/images/organics/HumiP.jpg';
import SiliconProtection from '../assets/images/organics/SiliconProtection.jpg';
import SoilGold from '../assets/images/organics/SoilGold.jpg';
import Sugergold from '../assets/images/organics/Sugergold.jpg';
import Tejal from '../assets/images/organics/Tejal.jpg';


import insecticidesLogo from '../assets/icons/insecticides.png';
import herbicidesLogo from '../assets/icons/herbicides.png';
import fungicidesLogo from '../assets/icons/fungicides.png';
import pgrLogo from '../assets/icons/pgr.png';
import micronutrientsLogo from '../assets/icons/micronutrients.png';
import organicLogo from '../assets/icons/organic.png';

const productCategories = {
    INSECTICIDES: [
        { id: 1, name: 'Agriminda', description: 'High-quality pesticide for crop protection.', price: 2500, imageUrl: Agriminda },
        { id: 2, name: 'Bold-4-GR', description: 'Organic pesticide for sustainable farming.', price: 3000, imageUrl: Bold4GR },
        { id: 3, name: 'Di-Zine', description: 'Fast-acting pesticide for pest control.', price: 3500, imageUrl: DiZine },
        { id: 4, name: 'Fipropride', description: 'Fast-acting pesticide for pest control.', price: 3550, imageUrl: Fipropride },
        { id: 5, name: 'G-Fipro', description: 'Wide-spectrum pesticide with fast action.', price: 4550, imageUrl: GFipro },
        { id: 6, name: 'G-mire', description: 'Effective pest control for organic farming.', price: 5050, imageUrl: Gmire },
        { id: 7, name: 'G-Roma', description: 'Protects crops from common pests.', price: 5500, imageUrl: GRoma },
        { id: 8, name: 'Keepar-Plus', description: 'Protects crops from common pests.', price: 5550, imageUrl: KeeparPlus },
    ],
    HERBICIDES: [
        { id: 9, name: 'G-ati', description: 'High-quality pesticide for crop protection.', price: 2450, imageUrl: Gati },
        { id: 10, name: 'G-lypho', description: 'Organic pesticide for sustainable farming.', price: 5300, imageUrl: Glypho },
        { id: 11, name: 'G Oxy', description: 'Fast-acting pesticide for pest control.', price: 9350, imageUrl: GOxy },
        { id: 12, name: 'Imizza', description: 'Fast-acting pesticide for pest control.', price: 3450, imageUrl: Imizza },
        { id: 13, name: 'Matraaz', description: 'Wide-spectrum pesticide with fast action.', price: 7450, imageUrl: Matraaz },
        { id: 14, name: 'Pclor', description: 'Effective pest control for organic farming.', price: 5500, imageUrl: Pclor },
        { id: 15, name: 'Super Kill', description: 'Protects crops from common pests.', price: 4550, imageUrl: SuperKill },
        { id: 16, name: 'G-2,4', description: 'Protects crops from common pests.', price: 5050, imageUrl: Gtwofour },
    ],
    FUNGICIDES: [
        { id: 17, name: 'Blutol', description: 'High-quality pesticide for crop protection.', price: 2550, imageUrl: Blutol },
        { id: 18, name: 'Carbol', description: 'Organic pesticide for sustainable farming.', price: 3800, imageUrl: Carbol },
        { id: 19, name: 'Carmax', description: 'Fast-acting pesticide for pest control.', price: 3950, imageUrl: Carmax },
        { id: 20, name: 'Cleaver', description: 'Fast-acting pesticide for pest control.', price: 4350, imageUrl: Cleaver },
        { id: 21, name: 'Cymote', description: 'Wide-spectrum pesticide with fast action.', price: 4550, imageUrl: Cymote },
        { id: 22, name: 'Gold', description: 'Effective pest control for organic farming.', price: 5500, imageUrl: Gold },
        { id: 23, name: 'Hexa Super', description: 'Protects crops from common pests.', price: 4550, imageUrl: HexaSuper },
        { id: 24, name: 'Jivic', description: 'Protects crops from common pests.', price: 5500, imageUrl: Jivic },
    ],
    PGR: [
        { id: 5, name: 'Pesticide E', description: 'Wide-spectrum pesticide with fast action.', price: 4520, imageUrl: Bold4GR },
    ],
    MICRONUTRIENTS_FERTILIZERS: [
        { id: 6, name: 'Pesticide F', description: 'Effective pest control for organic farming.', price: 5200, imageUrl: DiZine },
    ],
    ORGANIC_PRODUCTS: [
        { id: 41, name: 'Tejal', description: 'High-quality pesticide for crop protection.', price: 2450, imageUrl: Tejal },
        { id: 42, name: 'Suger gold', description: 'Organic pesticide for sustainable farming.', price: 9300, imageUrl: Sugergold },
        { id: 43, name: 'Soil Gold', description: 'Fast-acting pesticide for pest control.', price: 3450, imageUrl: SoilGold },
        { id: 44, name: 'Silicon Protection', description: 'Fast-acting pesticide for pest control.', price: 7350, imageUrl: SiliconProtection },
        { id: 45, name: 'HumiP', description: 'Wide-spectrum pesticide with fast action.', price: 2450, imageUrl: HumiP },
        { id: 46, name: 'Gold Super', description: 'Effective pest control for organic farming.', price: 5800, imageUrl: GoldSuper },
        { id: 47, name: 'G-Long', description: 'Protects crops from common pests.', price: 5500, imageUrl: GLong },
        { id: 48, name: 'Don Super', description: 'Protects crops from common pests.', price: 7550, imageUrl: DonSuper },
    ],
};

const Message = ({ text }) => (
    <div className={`pop-up-message ${text ? 'show' : ''}`}>{text}</div>
);

const Products = () => {
    const [message, setMessage] = useState('');
    const { addToCart } = useCartContext(); // Use the cart context
    const [selectedCategory, setSelectedCategory] = useState(null); // Start with no selected category

    const handleAddToCart = (product) => {
        addToCart(product); // Add product to cart using the context
        setMessage(`${product.name} added to cart successfully!`);
        setTimeout(() => setMessage(''), 3000);
    };

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    const handleGoBack = () => {
        setSelectedCategory(null); // Go back to category selection
    };

    return (
        <div className="product-page">
            <Message text={message} />
            {selectedCategory ? ( // Conditional rendering based on selected category
                <>
                    <button onClick={handleGoBack} className="btn go-back">Back to Products</button>
                    <h2>{selectedCategory}</h2> {/* Display the selected category name */}
                    <div className="product-list">
                        {productCategories[selectedCategory].map((product) => (
                            <div key={product.id} className="product-card">
                                <img src={product.imageUrl} alt={product.name} className="product-image" />
                                <h2>{product.name}</h2>
                                <p>{product.description}</p>
                                <p className="price">Price: {product.price}</p>
                                <div className="button-group">
                                    <button onClick={() => handleAddToCart(product)} className="btn add-to-cart">
                                        Add to Cart
                                    </button>
                                    {/* Link to product details page */}
                                    <Link to={`/product/${product.id}`} className="btn view-details">View Details</Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            ) : (
                <div className="category-options">
                    <div className="category-boxes">
                        <div className="category-box" onClick={() => handleCategoryClick('INSECTICIDES')}>
                            <img src={insecticidesLogo} alt="Insecticides" className="category-logo" />
                            <h2>Insecticides</h2>
                        </div>
                        <div className="category-box" onClick={() => handleCategoryClick('HERBICIDES')}>
                            <img src={herbicidesLogo} alt="Herbicides" className="category-logo" />
                            <h2>Herbicides</h2>
                        </div>
                        <div className="category-box" onClick={() => handleCategoryClick('FUNGICIDES')}>
                            <img src={fungicidesLogo} alt="Fungicides" className="category-logo" />
                            <h2>Fungicides</h2>
                        </div>
                        <div className="category-box" onClick={() => handleCategoryClick('PGR')}>
                            <img src={pgrLogo} alt="PGR" className="category-logo" />
                            <h2>PGR</h2>
                        </div>
                        <div className="category-box" onClick={() => handleCategoryClick('MICRONUTRIENTS_FERTILIZERS')}>
                            <img src={micronutrientsLogo} alt="Micronutrients" className="category-logo" />
                            <h2>Micronutrients</h2>
                        </div>
                        <div className="category-box" onClick={() => handleCategoryClick('ORGANIC_PRODUCTS')}>
                            <img src={organicLogo} alt="Organic Products" className="category-logo" />
                            <h2>Organic Products</h2>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Products;
