import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import Navbar from "../Common/Navbar";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Budget App</div>
        <Navbar/>
      <div className="user-actions">
        <div className="user-profile">
          <span>User Name</span>
          <img
            src="profile-pic-url"
            alt="User Profile"
            className="profile-pic"
          />
        </div>
        <button className="logout-button">Logout</button>
      </div>
    </header>
  );
};

export default Header;
