import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Budget App</div>
      <nav className="nav-links">
        <ul>
        <li>
            <Link to="/" className="nav-link">
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/FinancePage" className="nav-link">
              Finances
            </Link>
          </li>
          <li>
            <Link to="/ReportsPage" className="nav-link">
              Reports 
            </Link>
          </li>
        </ul>
      </nav>
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