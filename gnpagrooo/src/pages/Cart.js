// src/pages/Cart.js
import React from 'react';
import { useCartContext } from '../context/CartContext';
import './Cart.css';

const Cart = () => {
    const { cartItems, removeFromCart, clearCart, updateQuantity } = useCartContext();

    const handleBuyAll = () => {
        if (cartItems.length > 0) {
            alert("Proceeding to buy all items!");
        }
    };

    const handleBuyNow = (item) => {
        alert(`Proceeding to buy ${item.name}`);
        // Here, you could redirect to a checkout page or perform further actions
    };

    return (
        <div className="cart-page">
            <h1>Your Cart</h1>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div className="cart-container">
                    <ul className="cart-list">
                        {cartItems.map((item) => (
                            <li key={item.id} className="cart-item">
                                <img src={item.imageUrl} alt={item.name} className="cart-item-image" />
                                <div className="cart-item-info">
                                    <h2>{item.name}</h2>
                                    <p>${item.price}</p>
                                </div>
                                <div className="quantity-controls">
                                    <button
                                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                        disabled={item.quantity <= 1}
                                    >
                                        -
                                    </button>
                                    <span>{item.quantity}</span>
                                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                                </div>
                                <div className="cart-item-actions">
                                    <button onClick={() => removeFromCart(item.id)} className="remove-button">
                                        Remove
                                    </button>
                                    <button onClick={() => handleBuyNow(item)} className="buy-now">
                                        Buy Now
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className="cart-actions">
                        <button onClick={clearCart} className="clear-cart">Clear Cart</button>
                        <button onClick={handleBuyAll} className="buy-all">Buy All</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;
