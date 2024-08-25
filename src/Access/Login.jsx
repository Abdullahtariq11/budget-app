import React from 'react';
import './Login.css';

function Login({setTab,setIsLogin}) {
    const handleSubmit=(e)=>{
        e.preventDefault();
        setIsLogin(true);
    }
  return (
    <div className="access-form-container">
      <h2>Log In</h2>
      <form className="access-form" onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit" className="access-btn">Log In</button>
      </form>
      <p>Don't have an account? <span className="switch-link" onClick={(e) => setTab('Signup')}>Sign Up</span></p>
    </div>
  );
}

export default Login;