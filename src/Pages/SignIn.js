import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './SignIn.css';
import Header from '../Components/AppBar';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [dog] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        // Here you would typically handle form validation and authentication
        // For simplicity, we'll just log the email, password, and dog to the console
        console.log('Email:', email);
        console.log('Password:', password);
        console.log('Which dog:', dog);

        // Navigate to the adoption page after signing in
        navigate('/adoption');
    };

    return (
        <div className="signin-page">

      < Header/>
        <div className="signin-container">
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
        
                <button type="submit" className="signin-btn">Sign In</button>
            </form>
            <p>
                Don't have an account? <Link to="/register">Register here</Link>
            </p>
        </div>
        </div>
    );
};

export default SignIn;