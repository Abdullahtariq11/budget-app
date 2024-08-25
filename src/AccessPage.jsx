import React, { useState } from "react";
import Footer from "./Dashboard/Footer";
import "./AcessPage.css";
import Header from "./Access/Header";
import Login from "./Access/Login";
import Signup from "./Access/Signup";

function AccessPage({isLogin,setIsLogin}) {
  const [tab, setTab] = useState("Home");

  return (
    <div className="landing-container">
      <Header setTab={setTab} isLogin={isLogin}/>
      <main className="landing-main">
        <div className="landing-text">
          <h1>Welcome to Budget App</h1>
          <p>Your personal finance assistant</p>
          {tab === "Home" && (
            <div className="cta-buttons">
              <button className="primary-btn" onClick={() => setTab("Signup")}>
                Sign Up
              </button>
              <button className="secondary-btn" onClick={() => setTab("Login")}>
                Log In
              </button>
            </div>
          )}
        </div>
        {tab === "Signup" && <Signup setTab={setTab} />}
        {tab === "Login" && <Login setTab={setTab} setIsLogin={setIsLogin} />}
      </main>
      <Footer />
    </div>
  );
}

export default AccessPage;
