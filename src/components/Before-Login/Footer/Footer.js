import React from "react";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <>
      <footer className="bg-dark text-center text-white">
        <div className="container p-4">
          <section className="mb-4">
            <a
              className="btn btn-outline-light btn-floating mx-3"
              href="#!"
              role="button"
            >
              <i className="fa fa-facebook"></i>
            </a>
            <a
              className="btn btn-outline-light btn-floating mx-3"
              href="#!"
              role="button"
            >
              <i className="fa fa-twitter"></i>
            </a>

            <a
              className="btn btn-outline-light btn-floating mx-3"
              href="#!"
              role="button"
            >
              <i className="fa fa-instagram"></i>
            </a>

            <a
              className="btn btn-outline-light btn-floating mx-3"
              href="#!"
              role="button"
            >
              <i className="fa fa-linkedin"></i>
            </a>
          </section>
          <section className="">
            <div className="row">
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <ul className="list-unstyled mb-0">
                  <li>
                    <Link
                      to="/startupsignup"
                      className="text-white nav-link my-1"
                    >
                      Start a Fund Raise
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/investorsignup"
                      className="text-white nav-link my-1"
                    >
                      Investors Sign-Up
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <a className="text-uppercase nav-link my-1" href="#!">
                  Browse
                </a>

                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="#!" className="text-white nav-link my-1">
                      Trending
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white nav-link my-1">
                      Recently Funded
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white nav-link my-1">
                      New and Networthy
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white nav-link my-1">
                      Communities
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <a className="text-uppercase my-1 nav-link" href="#!">
                  Resources
                </a>

                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="#!" className="text-white nav-link my-1">
                      FAQ
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white nav-link my-1">
                      Guidelines
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white nav-link my-1">
                      Contact-Us
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <a className="text-uppercase my-1 nav-link" href="#!">
                  Legal
                </a>

                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="#!" className="text-white nav-link my-1">
                      Privacy-Policy
                    </a>
                  </li>
                  <li>
                    <Link to="/" className="text-white nav-link my-1">
                      Terms Of Service
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
        <div className="text-center p-3">
          Copyright © 2023 All rights reserved.
          <Link className="nav-link" to="/home">
            ArtUp.com
          </Link>{" "}
          <p className="text-white footer-details">
            ArtUp is a software as a service funding platform. ArtUp is not a
            registered broker-dealer and does not offer investment advice or
            advise on the raising of capital through securities offerings. ArtUp
            does not recommend or otherwise suggest that any investor make an
            investment in a particular company, or that any company offer
            securities to a particular investor. ArtUp takes no part in the
            negotiation or execution of transactions for the purchase or sale of
            securities, and at no time has possession of funds or securities. No
            securities transactions are executed or negotiated on or through the
            ArtUp platform. ArtUp receives no compensation in connection with
            the purchase or sale of securities.
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
