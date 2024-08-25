import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar({isLogin}) {

  return (
    <>
      {isLogin ? (
        <nav className="nav-links">
          <ul>
            <li>
              <Link to="/DashboardPage" className="nav-link">
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
      ) : (
        <nav className="nav-links">
          <ul>
            <li>
              <Link to="/" className="nav-link">
                About
              </Link>
            </li>
            <li>
              <Link to="/" className="nav-link">
                Contact us
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
}

export default Navbar;
