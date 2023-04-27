import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top p-3">
        <div className="container-fluid">
          <Link className="navbar-brand text-light" to="/home">
            <h1 className="logo">ArtUp</h1>
          </Link>
          <button
            className="navbar-toggler bg-transparent"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  to="/browsestartup"
                  className="nav-link text-light js-scroll-trigger"
                >
                  Browse-Startup
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-light js-scroll-trigger"
                  to="/about"
                >
                  About
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-light"
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Get-Started
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link
                      className="dropdown-item js-scroll-trigger"
                      to="/startupsignup"
                    >
                      Start-Up Signup
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item js-scroll-trigger"
                      to="/investorsignup"
                    >
                      Investor-Signup
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link
                      className="dropdown-item js-scroll-trigger"
                      to="/crowdfundingsignup"
                    >
                      Crowd-Funding
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-light"
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Login
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link
                      className="dropdown-item js-scroll-trigger"
                      to="/startuplogin"
                    >
                      Start-Up Login
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item js-scroll-trigger"
                      to="/investorlogin"
                    >
                      Investor-Login
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link
                      className="dropdown-item js-scroll-trigger"
                      to="/crowdfunding"
                    >
                      Crowd-Funding
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
