import React from "react";
import { Link } from "react-router-dom";
import image from "./assets/Images/about.png";
import dharma from "./assets/Images/dharma.jpg";
import isha from "./assets/Images/isha.jpg";
import kshitij from "./assets/Images/kshitij.jpg";
import nitish from "./assets/Images/nitish.jpg";
function About() {
  return (
    <>
      <div className="bg-black bg-gradient">
        <div className="p-5 d-flex flex-column justify-content-center">
          <div className="card bg-dark border aboutcard">
            <h5 className="card-header text-danger border">ArtUp</h5>
            <div className="card-body aboutcardtext flex-column p-3">
              <h1 className="card-title text-success">
                We Help Startups Raise Funding
              </h1>
              <h4 className="card-text text-light ">
                We’ve built the largest business funding platform dedicated
                exclusively to helping startups raise capital.
              </h4>
            </div>
          </div>
          <div className="card bg-dark border mt-4 aboutcard">
            <div className="card-body">
              <h4 className="card-text text-light aboutcardtext p-3">
                ArtUp is a web based application, focused on providing a
                platform for start-up to gain monetary strength via showcasing
                and "pitching" their product onto the platform and obtaining
                funds from investors. Crowdfunding remains the sole objective of
                the platform, wherein not only venture capitalists get to fund
                start-ups but also non-accredited investors (normal people) get
                to invest and promote their favorite start-ups.
              </h4>
            </div>
          </div>
          <div className="card bg-dark border mt-4 aboutcard">
            <div className="card-body">
              <h4 className="card-text text-light aboutcardtext p-3">
                ArtUp, a start-up-only focused crowdfunding platform, will be
                helping the start-ups in need of funding to acquire that after
                having made a pitch about their product. To fast-track to
                complete funding ecosystem, the platform will also enable
                non-accredited investors to shortlist and invest in a start-up
                of choice.
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className="p-1 pt-5 pb-5 bg-dark d-flex justify-content-center align-items-center">
        <div
          className="card w-75 bg-black bg-gradient border d-flex justify-content-center align-items-center"
          onMouseEnter={() => {
            document.getElementById("aboutimage").classList.add("annimation");
          }}
        >
          <img
            src={image}
            className="card-img-top bg-transparent aboutdataimage p-2"
            id="aboutimage"
            alt="..."
          />
          <div className="card-body bg-black bg-gradient w-100">
            <div className="card-text bg-transparent">
              <h2 className="text-success mt-1">Hands-On Service</h2>
              <h4 className="text-light">
                Our team takes a very hands-on approach to help companies
                understand the fundraising process and launch their funding
                campaigns. From profile creation to marketing, we’re there at
                each step.
              </h4>
              <h2 className="text-success mt-4">Founder Friendly</h2>
              <h4 className="text-light">
                ArtUp was created by the founders of startups who have
                collectively raised from dozens of angel investors and venture
                capitalists. We understand the challenges you face as you create
                a business, and we’re happy to offer our personal expertise to
                all clients looking to raise funding.
              </h4>
              <h2 className="text-success mt-4">We Love What We Do</h2>
              <h4 className="text-light">
                In our first year ArtUp generated over ₹ 0 in funding
                commitments from investors, customers, and friends. Those
                numbers are growing exponentially and we couldn’t be happier.
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black bg-gradient p-1 pt-5 pb-5">
        <h2 className="text-light text-center">Meet The ArtUp Team.</h2>
        <div className="d-flex flex-wrap justify-content-center align-items-center">
          <div className="card investordatacard my-5 bg-dark border bg-gradient mx-4 text-decoration-none d-flex align-items-center">
            <img
              src={nitish}
              className="card-img-top investorimagedata p-1"
              alt="..."
            />
            <div className="card-body text-light">
              <h3 className="card-title pitchdata">Nitish Soni</h3>
              <h5 className="card-title pitchdata">19BTRSE021</h5>
              <div className="card-text text-light my-2 w-100 d-flex align-items-center justify-content-center mt-4">
                <Link
                  to="https://twitter.com/_2nitish6_"
                  className="btn btn-dark border mx-2"
                >
                  <i className="fa fa-twitter"></i>
                </Link>
                <Link
                  to="https://www.instagram.com/_2nitish6_"
                  className="btn btn-dark border mx-2"
                >
                  <i className="fa fa-instagram"></i>
                </Link>
                <Link
                  to="https://www.linkedin.com/in/nitish-soni-ba0085206"
                  className="btn btn-dark border mx-2"
                >
                  <i className="fa fa-linkedin"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="card investordatacard my-5 bg-dark border bg-gradient mx-4 text-decoration-none d-flex align-items-center">
            <img
              src={kshitij}
              className="card-img-top investorimagedata p-1"
              alt="..."
            />
            <div className="card-body text-light">
              <h3 className="card-title pitchdata">Kshitij Agrawal</h3>
              <h5 className="card-title pitchdata">19BTRSE018</h5>
              <div className="card-text text-light my-2 w-100 d-flex align-items-center justify-content-center mt-4">
                <Link to="" className="btn btn-dark border mx-2">
                  <i className="fa fa-twitter"></i>
                </Link>
                <Link
                  to="https://www.instagram.com/kshittijagrawal"
                  className="btn btn-dark border mx-2"
                >
                  <i className="fa fa-instagram"></i>
                </Link>
                <Link
                  to="https://www.linkedin.com/in/kshittijagrawal"
                  className="btn btn-dark border mx-2"
                >
                  <i className="fa fa-linkedin"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="card investordatacard my-5 bg-dark border bg-gradient mx-4 text-decoration-none d-flex align-items-center">
            <img
              src={dharma}
              className="card-img-top investorimagedata p-1"
              alt="..."
            />
            <div className="card-body text-light">
              <h3 className="card-title pitchdata">Dharma</h3>
              <h5 className="card-title pitchdata">19BTRSE040</h5>
              <div className="card-text text-light my-2 w-100 d-flex align-items-center justify-content-center mt-4">
                <Link
                  to="https://twitter.com/SeerviDharma"
                  className="btn btn-dark border mx-2"
                >
                  <i className="fa fa-twitter"></i>
                </Link>
                <Link
                  to="https://www.instagram.com/dharmaxseervi"
                  className="btn btn-dark border mx-2"
                >
                  <i className="fa fa-instagram"></i>
                </Link>
                <Link
                  to="https://www.linkedin.com/in/dharma-seervi-33972819a"
                  className="btn btn-dark border mx-2"
                >
                  <i className="fa fa-linkedin"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="card investordatacard my-5 bg-dark border bg-gradient mx-4 text-decoration-none d-flex align-items-center">
            <img
              src={isha}
              className="card-img-top investorimagedata p-1"
              alt="..."
            />
            <div className="card-body text-light">
              <h3 className="card-title pitchdata">Isha Jain</h3>
              <h5 className="card-title pitchdata">19BTRSE016</h5>
              <div className="card-text text-light my-2 w-100 d-flex align-items-center justify-content-center mt-4">
                <button className="btn btn-dark border mx-2">
                  <i className="fa fa-twitter"></i>
                </button>
                <Link
                  to="https://www.instagram.com/ishajaain"
                  className="btn btn-dark border mx-2"
                >
                  <i className="fa fa-instagram"></i>
                </Link>
                <Link
                  to="https://www.linkedin.com/in/isha-jain-682a751b2"
                  className="btn btn-dark border mx-2"
                >
                  <i className="fa fa-linkedin"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default About;
