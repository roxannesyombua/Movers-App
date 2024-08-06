import React from 'react';
import './SignupForm.css'; 
import '@fortawesome/fontawesome-free/css/all.min.css';

const SignupForm = () => {
  return (
    <div className="signup-container">
      <div className="image-section">
        <div className="image-text">
          <h1>Create your account</h1>
          <p>move with ease</p>
        </div>
      </div>
      <div className="form-section">
        <form>
          <h2>SIGN UP</h2>
          <input type="text" placeholder="First name" />
          <input type="text" placeholder="Last name" />
          <input type="email" placeholder="Email address" />
          <input type="password" placeholder="Password" />
          <button type="submit">SIGN UP</button>
        </form>
        <div className="or-divider">OR</div>
        <button className="google-signup">
        <i class="fa-brands fa-google-plus"></i> Sign up with Google
        </button>
      </div>
    </div>
  );
};

export default SignupForm;
