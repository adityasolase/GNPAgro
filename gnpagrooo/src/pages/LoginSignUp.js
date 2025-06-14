import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginSignUp.css';

const LoginSignUp = () => {
    const navigate = useNavigate();
    const [isLogin, setIsLogin] = useState(true);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        phone: '',
    });
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null); // Clear previous error

        try {
            if (isLogin) {
                // Simulate login by checking against stored data
                const storedUser = JSON.parse(localStorage.getItem('userData'));
                if (
                    storedUser &&
                    storedUser.email === formData.email &&
                    storedUser.password === formData.password
                ) {
                    alert('Login successful!');
                    navigate('/AboutUs');
                } else {
                    setError('Invalid email or password.');
                }
            } else {
                // Save sign-up data to local storage for this example
                localStorage.setItem('userData', JSON.stringify(formData));
                alert('Sign-up successful! You can now log in.');
                setIsLogin(true);
            }

            // Clear form after submission
            setFormData({
                name: '',
                email: '',
                password: '',
                phone: '',
            });
        } catch (err) {
            console.error(err);
            setError('An error occurred. Please try again.');
        }
    };

    return (
        <div className="login-signup-container">
            <h1>{isLogin ? "Login" : "Sign Up"}</h1>
            {error && <div className="error-message">{error}</div>}
            <form onSubmit={handleSubmit}>
                {!isLogin && (
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                )}
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Your Password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
                {!isLogin && (
                    <input
                        type="text"
                        name="phone"
                        placeholder="Your Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                )}
                <button type="submit">{isLogin ? "Login" : "Sign Up"}</button>
            </form>
            <div className="toggle-form" onClick={() => setIsLogin(!isLogin)}>
                {isLogin ? "Don't have an account? Sign Up" : "Already have an account? Login"}
            </div>
        </div>
    );
};

export default LoginSignUp;
