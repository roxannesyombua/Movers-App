import React, { useState } from 'react';
import './SlidingAuthForm.css';

const SlidingAuthForm = () => {
    const [isSignup, setIsSignup] = useState(false);

    const toggleForm = () => {
        setIsSignup(!isSignup);
    };

    return (
        <div className={`container ${isSignup ? 'active' : ''}`}>
            <div className="form-container">
                {/* Sign Up Form */}
                <div className="form signup-form">
                    <h2>SIGN UP</h2>
                    <form>
                        <input type="text" placeholder="First name" required />
                        <input type="text" placeholder="Last name" required />
                        <input type="email" placeholder="Email address" required />
                        <input type="password" placeholder="Password" required />
                        <button type="submit">Sign Up</button>
                    </form>
                    <p>OR</p>
                    <button className="google-btn">Sign up with Google</button>
                    <button onClick={toggleForm} className="toggle-btn">Have an account? Log In</button>
                </div>

                {/* Log In Form */}
                <div className="form login-form">
                    <h2>log in</h2>
                    <form>
                        <input type="text" placeholder="First name" required />
                        <input type="text" placeholder="Last name" required />
                        <input type="password" placeholder="Password" required />
                        <button type="submit">Log In</button>
                    </form>
                    <p>OR</p>
                    <button className="google-btn">login with google</button>
                    <button onClick={toggleForm} className="toggle-btn">Don't have an account? Sign Up</button>
                </div>
            </div>
            <div className="image-container">
                <div className="signup-image">
                    <img src="https://i.pinimg.com/474x/b0/64/74/b06474d58b12f6ec355727b45fdc4a08.jpg" alt="Sign Up" />
                    <h3>Create your account</h3>
                    <p>move with ease</p>
                </div>
                <div className="login-image">
                    <img src="https://i.pinimg.com/474x/24/5d/78/245d789a62c777af5b61b1ebee25c951.jpg" alt="Log In" />
                    <h3>Welcome Back</h3>
                    <p>We appreciate your presence</p>
                </div>
            </div>
        </div>
    );
};

export default SlidingAuthForm;
