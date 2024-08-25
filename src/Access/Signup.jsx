import React from 'react';
import './Signup.css';

function Signup({setTab}) {
  return (
    <div className="access-form-container">
      <h2>Sign Up</h2>
      <form className="access-form">
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <input type="password" placeholder="Confirm Password" required />
        <button type="submit" className="access-btn">Sign Up</button>
      </form>
      <p>Already have an account? <span className="switch-link" onClick={() => setTab('Login')}>Log In</span></p>
    </div>
  );
}

export default Signup;