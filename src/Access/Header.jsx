import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import Navbar from "../Common/Navbar";


const Header = ({setTab}) => {
  return (
    <header className="header">
      <div className="logo">Budget App</div>
        <Navbar/>
      <div className="user-actions">

        <button className="logout-button" onClick={() => setTab("Signup")}>Get Started</button>
      </div>
    </header>
  );
};

export default Header;
