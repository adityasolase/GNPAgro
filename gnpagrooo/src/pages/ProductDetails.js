// src/pages/ProductDetails.js
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './ProductDetails.css'; // Import CSS for styling

const ProductDetails = ({ products }) => {
    const { id } = useParams(); // Get the product ID from the URL parameters
    const navigate = useNavigate(); // Initialize the navigation hook

    const product = products.find((product) => product.id === parseInt(id)); // Find the product by ID

    if (!product) {
        return <div className="product-not-found">Product not found</div>; // Handle case where product is not found
    }

    const handleEnquireClick = () => {
        navigate('/contactus'); // Redirect to /contactus
    };

    return (
        <div className="product-details">
            <h2>{product.name}</h2>
            <img src={product.imageUrl} alt={product.name} className="product-image" />
            <p className="product-description">{product.description}</p>
            <p className="price">Price: ₹{product.price}</p>
            <button className="btn enquire-button" onClick={handleEnquireClick}>
                Enquire
            </button>
        </div>
    );
};

export default ProductDetails;
