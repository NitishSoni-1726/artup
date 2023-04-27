import React from "react";
import { Link } from "react-router-dom";
function FirstSection() {
  return (
    <>
      <div className="container firstsection d-flex flex-column justify-content-center align-items-center">
        <h1 className="text-light text-center">Startup Fundraising Platform</h1>
        <h3 className="text-light text-center p-2">
          Start and manage a professional fundraise to attract quality
          accredited investors.
        </h3>
        <div className="dropdown my-4">
          <button
            className="btn btn-success dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Get-Started
          </button>
          <ul className="dropdown-menu">
            <li>
              <Link className="dropdown-item" to="/startupsignup">
                Start-Up-Signup
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/investorsignup">
                Investors-Signup
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/crowdfundingsignup">
                Crowdfunding-Signup
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default FirstSection;
