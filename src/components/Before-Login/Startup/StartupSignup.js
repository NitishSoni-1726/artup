import React, { useEffect, useState } from "react";
import image from "./assets/Images/startuplogin.png";
import { Link } from "react-router-dom";
import { dataref, db, storage } from "../Firebase/Firebase";
import { onValue, ref } from "firebase/database";
import noimage from "./assets/Images/noimage.jpg";
function StartupSignup() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const database = ref(db, "startup/users/");
    onValue(database, (snapshot) => {
      const data = snapshot.val();
      if (data === null) {
        return;
      } else {
        const newData = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));
        setData(newData);
      }
    });
  }, []);
  function checkUser() {
    const email = document.getElementById("startup-signup-email-id").value;
    let emailList = [];
    for (let i = 0; i < data.length; i++) {
      emailList.push(data[i].email);
    }
    if (emailList.includes(email) === true) {
      document
        .getElementById("startup-login-successalert")
        .classList.remove("d-none");
      document.registrationform.reset();
    } else {
      document
        .getElementById("startup-login-successalert")
        .classList.add("d-none");
    }
  }
  function checkpassword() {
    const password = document.getElementById("startup-signup-password");
    const confirmpassword = document.getElementById(
      "startup-signup-confirmpassword"
    );
    const value1 = password.value;
    const value2 = confirmpassword.value;
    if (value1 === "" || value2 === "") {
      password.style.border = "2px solid lightgrey";
      confirmpassword.style.border = "2px solid lightgrey";
    } else if (value1 === value2) {
      password.style.border = "2px solid green";
      confirmpassword.style.border = "2px solid green";
    } else {
      password.style.border = "2px solid red";
      confirmpassword.style.border = "2px solid red";
    }
  }
  function passwordauthentication() {
    const specialcharacter = document.getElementById(
      "startup-signup-specialcharacter"
    );
    const uppercase = document.getElementById("startup-signup-upperCase");
    const lowercase = document.getElementById("startup-signup-lowerCase");
    const number = document.getElementById("startup-signup-number");
    const character = document.getElementById("startup-signup-character");
    const password = document.getElementById("startup-signup-password").value;
    if (password === "") {
      specialcharacter.style.color = "white";
      lowercase.style.color = "white";
      uppercase.style.color = "white";
      number.style.color = "white";
      character.style.color = "white";
    } else {
      let specialCharacter = /[#,?,!,@,$,%,^,&,*,-,]/g;
      if (password.match(specialCharacter)) {
        specialcharacter.style.color = "green";
      } else {
        specialcharacter.style.color = "red";
      }
      let lowerCaseLetters = /[a-z]/g;
      if (password.match(lowerCaseLetters)) {
        lowercase.style.color = "green";
      } else {
        lowercase.style.color = "red";
      }
      let upperCaseLetters = /[A-Z]/g;
      if (password.match(upperCaseLetters)) {
        uppercase.style.color = "green";
      } else {
        uppercase.style.color = "red";
      }
      let numbers = /[0-9]/g;
      if (password.match(numbers)) {
        number.style.color = "green";
      } else {
        number.style.color = "red";
      }
      if (password.length >= 6) {
        character.style.color = "green";
      } else {
        character.style.color = "red";
      }
    }
  }
  function both() {
    checkpassword();
    passwordauthentication();
  }
  const [file, setFile] = useState(noimage);
  function handleChange(e) {
    console.log(e.target.files[0]);
    setFile(URL.createObjectURL(e.target.files[0]));
  }
  function formSubmit(event) {
    event.preventDefault();
    const startupName = document.getElementById("start-up-name").value;
    const emailAdress = document.getElementById(
      "startup-signup-email-id"
    ).value;
    const phoneNumber = document.getElementById(
      "startup-signup-phone-number"
    ).value;
    const password = document.getElementById("startup-signup-password").value;
    const productName = document.getElementById(
      "startup-signup-product-name"
    ).value;
    const quickPitch = document.getElementById(
      "startup-signup-product-pitch"
    ).value;
    const industry = document.getElementById("startup-signup-industry").value;
    const fundingGoals = document.getElementById(
      "startup-signup-funding-goals"
    ).value;
    const profilepicture = document.getElementById("startup-signup-fileupload")
      .files[0];
    const emaildata = emailAdress.replace(".", "");
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const posteddate = [day, month, year].join("-");

    const data = {
      startupname: startupName,
      email: emailAdress,
      phone: phoneNumber,
      password: password,
      product: productName,
      pitch: quickPitch,
      industry: industry,
      goal: fundingGoals,
      date: posteddate,
      status: false,
      funding: false,
      likes: 0,
    };
    dataref.ref(`startup/users/${emaildata}`).set({
      startupname: startupName,
      email: emailAdress,
      phone: phoneNumber,
      password: password,
      product: productName,
      pitch: quickPitch,
      industry: industry,
      goal: fundingGoals,
      date: posteddate,
      status: false,
      funding: false,
      likes: 0,
    });
    storage.ref(`/startup/${emaildata}`).put(profilepicture);
    sessionStorage.setItem(emailAdress, JSON.stringify(data));
    document.registrationform.reset();
    setFile(
      "https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"
    );
    const success = document.getElementById("startup-signup-alert");
    success.classList.remove("d-none");
    both();
  }

  return (
    <>
      <div className="container">
        <section>
          <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col col-xl-10">
                <div className="card bg-dark">
                  <div className="row g-0">
                    <div className="col-md-6 col-lg-5 d-none d-md-block">
                      <img
                        src={image}
                        alt="loginform"
                        className="w-100 h-100"
                      />
                    </div>
                    <div
                      className="col-md-6 col-lg-7 d-flex align-items-center bg-dark"
                      id="form-element"
                    >
                      <div className="card-body p-4 p-lg-5 text-black">
                        <div
                          className="alert alert-success text-center d-none"
                          role="alert"
                          id="startup-signup-alert"
                        >
                          Registration Successfull{" "}
                          <Link to="/startuplogin" className="alert-link">
                            Cick Here
                          </Link>{" "}
                          to login
                        </div>
                        <div
                          className="alert alert-success text-center d-none"
                          role="alert"
                          id="startup-login-successalert"
                        >
                          User Already Registered Try to Login
                        </div>
                        <form
                          name="registrationform"
                          className="form px-4"
                          onSubmit={formSubmit}
                        >
                          <h3 className="text-light">Start-up Registration</h3>
                          <h5 className="fw-normal mb-3 pb-3 text-light">
                            Enter Your Details
                          </h5>
                          <div className="form-outline mb-4">
                            <input
                              type="file"
                              className="d-none"
                              id="startup-signup-fileupload"
                              accept="image/png, image/jpeg"
                              onChange={handleChange}
                            />
                            <div className="d-flex flex-column align-items-center">
                              <img className="profileimage" src={file} alt="" />
                              <span
                                className="btn btn-dark rounded my-1"
                                onClick={function upload() {
                                  document
                                    .getElementById("startup-signup-fileupload")
                                    .click();
                                }}
                              >
                                {" "}
                                <i className="fa fa-camera upload-button text-light"></i>
                              </span>
                            </div>
                          </div>
                          <div className="form-outline mb-4">
                            <label
                              className="form-label text-light"
                              htmlFor="start-up-name"
                            >
                              Start-Up Name
                            </label>
                            <input
                              type="text"
                              id="start-up-name"
                              className="form-control form-control-lg"
                              required
                            />
                          </div>
                          <div className="form-outline mb-4">
                            <label
                              className="form-label text-light"
                              htmlFor="startup-signup-email-id"
                            >
                              Email address
                            </label>
                            <input
                              type="email"
                              id="startup-signup-email-id"
                              className="form-control form-control-lg"
                              onBlur={checkUser}
                              required
                            />
                          </div>
                          <div className="form-outline mb-4">
                            <label
                              className="form-label text-light"
                              htmlFor="phone-number"
                            >
                              Phone Number
                            </label>
                            <input
                              type="tel"
                              placeholder="+91-XXXXXXXXXX"
                              minLength="10"
                              pattern="[0-9]{10}"
                              id="startup-signup-phone-number"
                              required
                              className="form-control form-control-lg"
                            />
                          </div>

                          <div className="form-outline mb-4">
                            <label
                              className="form-label text-light"
                              htmlFor="password"
                            >
                              Password
                            </label>
                            <input
                              type="password"
                              id="startup-signup-password"
                              className="form-control form-control-lg"
                              pattern="(?=.*?[#?!@$%^&*-])(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
                              onKeyUp={both}
                              required
                            />
                            <div className="password-authentication text-light">
                              "Your Password should contain atleast One
                              <span id="startup-signup-specialcharacter">
                                {" "}
                                Special Character
                              </span>{" "}
                              One
                              <span id="startup-signup-upperCase">
                                {" "}
                                UpperCase Letter
                              </span>
                              , One
                              <span id="startup-signup-lowerCase">
                                {" "}
                                LowerCase Letter
                              </span>
                              , One
                              <span id="startup-signup-number"> Number</span>
                              and Min Length should be
                              <span id="startup-signup-character">
                                {" "}
                                6 Character
                              </span>
                              ."
                            </div>
                            <label
                              className="form-label my-2 text-light"
                              htmlFor="confirmpassword"
                            >
                              Confirm Password
                            </label>
                            <input
                              type="password"
                              id="startup-signup-confirmpassword"
                              className="form-control form-control-lg"
                              onKeyUp={checkpassword}
                              required
                            />
                          </div>
                          <div className="form-outline mb-4">
                            <label
                              className="form-label text-light"
                              htmlFor="product-name"
                            >
                              Product Name
                            </label>
                            <input
                              type="text"
                              placeholder="Ex. iPod"
                              id="startup-signup-product-name"
                              required
                              className="form-control form-control-lg"
                            />
                          </div>
                          <div className="form-outline mb-4">
                            <label
                              className="form-label text-light"
                              htmlFor="product-pitch"
                            >
                              Quick Pitch
                            </label>
                            <input
                              type="text"
                              placeholder="Ex. Revolutionary music player and entertainment device."
                              id="startup-signup-product-pitch"
                              required
                              className="form-control form-control-lg"
                            />
                          </div>
                          <div className="form-outline mb-4">
                            <label
                              className="form-label text-light"
                              htmlFor="industry"
                            >
                              Industry
                            </label>
                            <select
                              required
                              className="form-control form-control-lg"
                              id="startup-signup-industry"
                            >
                              <option>Select Industry</option>
                              <option>Beauty</option>
                              <option>Boats</option>
                              <option>Cars / Trucks</option>
                              <option>Commercial</option>
                              <option>Communications</option>
                              <option>Consumer Products</option>
                              <option>Design</option>
                              <option>Education</option>
                              <option>Energy</option>
                              <option>Entertainment</option>
                              <option>Fashion</option>
                              <option>Finance</option>
                              <option>Fitness</option>
                              <option>Food</option>
                              <option>Food Service</option>
                              <option>Gadgets</option>
                              <option>Games</option>
                              <option>Hardware</option>
                              <option>Health &amp; Beauty</option>
                              <option>Healthcare</option>
                              <option>Last Mile Logistics</option>
                              <option>Life Science</option>
                              <option>Media (tv, radio, print)</option>
                              <option>Mobile</option>
                              <option>Motorcycle</option>
                              <option>Motors</option>
                              <option>Other</option>
                              <option>Personal Care</option>
                              <option>Products</option>
                              <option>Real Estate</option>
                              <option>Rental</option>
                              <option>Residential</option>
                              <option>Restaurants</option>
                              <option>Retail</option>
                              <option>Services</option>
                              <option>Software</option>
                              <option>Specialty Retail</option>
                              <option>Sporting Goods</option>
                              <option>Sports</option>
                              <option>Stores</option>
                              <option>
                                Stores (restaurants, coffee shops, bars)
                              </option>
                              <option>Wellness</option>
                              <option>Technology</option>
                              <option>Web</option>
                            </select>
                          </div>
                          <div className="form-outline mb-4">
                            <label
                              className="form-label text-light"
                              htmlFor="funding-goals"
                            >
                              Funding Goals
                            </label>
                            <input
                              type="number"
                              placeholder="&#8377;"
                              id="startup-signup-funding-goals"
                              required
                              className="form-control form-control-lg"
                              min={0}
                            />
                          </div>

                          <div className="pt-1 m-4 text-center">
                            <button
                              className="btn btn-success btn-lg"
                              type="submit"
                            >
                              Register
                            </button>
                          </div>
                          <div className="text-center">
                            <div className="mb-5 pb-lg-2 d-flex flex-column justify-content-center text-light">
                              Already have an Account?
                              <div>
                                <Link
                                  to="/startuplogin"
                                  className="nav-link mx-2 text-light"
                                >
                                  Login Here
                                </Link>
                              </div>
                            </div>
                          </div>
                        </form>
                        <div
                          className="d-none"
                          id="startup-signup-registration-done"
                        >
                          <h3>Thanks for Registering</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
export default StartupSignup;
