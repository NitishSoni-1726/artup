import React, { useEffect, useState } from "react";
import image from "./assets/Images/crownfundinglogin.png";
import { Link } from "react-router-dom";
import { dataref, db, storage } from "../Firebase/Firebase";
import { onValue, ref } from "firebase/database";
import noimage from "./assets/Images/noimage.jpg";
function Crowdfundingsignup() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const database = ref(db, "crowdfunding/users/");
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
    const email = document.getElementById("crowdfunding-signup-email").value;
    const phone = document.getElementById("crowdfunding-signup-phone").value;
    let emailList = [];
    let phoneList = [];
    for (let i = 0; i < data.length; i++) {
      emailList.push(data[i].email);
      phoneList.push(data[i].phonenumber);
    }
    if (emailList.includes(email) === true || phoneList.includes(phone)) {
      document
        .getElementById("crowdfunding-login-successalert")
        .classList.remove("d-none");
      document.registrationform.reset();
    } else {
      document
        .getElementById("crowdfunding-login-successalert")
        .classList.add("d-none");
    }
  }
  function checkpassword() {
    const password = document.getElementById("crowdfunding-signup-password");
    const confirmpassword = document.getElementById(
      "crowdfunding-signup-confirmpassword"
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
      "crowdfunding-signup-specialcharacter"
    );
    const uppercase = document.getElementById("crowdfunding-signup-upperCase");
    const lowercase = document.getElementById("crowdfunding-signup-lowerCase");
    const number = document.getElementById("crowdfunding-signup-number");
    const character = document.getElementById("crowdfunding-signup-character");
    const password = document.getElementById(
      "crowdfunding-signup-password"
    ).value;
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
    setFile(URL.createObjectURL(e.target.files[0]));
  }
  function formSubmit(event) {
    event.preventDefault();
    const firstName = document.getElementById(
      "crowdfunding-signup-firstname"
    ).value;
    const lastName = document.getElementById(
      "crowdfunding-signup-lastname"
    ).value;
    const email = document.getElementById("crowdfunding-signup-email").value;
    const phone = document.getElementById("crowdfunding-signup-phone").value;
    const password = document.getElementById(
      "crowdfunding-signup-password"
    ).value;
    const profilepicture = document.getElementById(
      "crowdfunding-signup-fileupload"
    ).files[0];
    const emaildata = email.replace(".", "");
    const data = {
      firstname: firstName,
      lastname: lastName,
      email: email,
      phonenumber: phone,
      password: password,
    };
    dataref.ref(`crowdfunding/users/${emaildata}`).set({
      firstname: firstName,
      lastname: lastName,
      email: email,
      phonenumber: phone,
      password: password,
    });
    storage.ref(`/crowdfunding/${emaildata}`).put(noimage);
    sessionStorage.setItem(email, JSON.stringify(data));
    document.registrationform.reset();
    setFile(noimage);

    const success = document.getElementById("crowdfunding-signup-alert");
    success.classList.remove("d-none");
    both();
  }
  function verifyOTP() {
    document.getElementById("otp").classList.remove("d-none");
  }
  function submitOTP() {
    document.getElementById("otp").classList.add("d-none");
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
                        alt="login form"
                        className="w-100 h-100"
                      />
                    </div>

                    <div className="col-md-6 col-lg-7 d-flex align-items-center">
                      <div className="card-body p-4 p-lg-5 text-black bg-dark">
                        <div
                          className="alert alert-success text-center d-none"
                          role="alert"
                          id="crowdfunding-signup-alert"
                        >
                          <span>
                            Registration Successfull{" "}
                            <Link to="/crowdfunding" className="alert-link">
                              Cick Here
                            </Link>{" "}
                            to login
                          </span>
                        </div>
                        <div
                          className="alert alert-success text-center d-none"
                          role="alert"
                          id="crowdfunding-login-successalert"
                        >
                          User Already Registered Try to Login
                        </div>
                        <form
                          className="form px-4"
                          name="registrationform"
                          onSubmit={formSubmit}
                        >
                          <h3 className="text-light">
                            Crowdfunding Registration
                          </h3>
                          <h5 className="fw-normal mb-3 pb-3 text-light">
                            Enter Your Details
                          </h5>
                          <div className="form-outline mb-4">
                            <input
                              type="file"
                              className="d-none"
                              id="crowdfunding-signup-fileupload"
                              accept="image/png, image/jpeg"
                              required
                              onChange={handleChange}
                            />
                            <div className="d-flex flex-column align-items-center">
                              <img className="profileimage" src={file} alt="" />
                              <span
                                className="btn btn-dark rounded my-1"
                                onClick={function upload() {
                                  document
                                    .getElementById(
                                      "crowdfunding-signup-fileupload"
                                    )
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
                              htmlFor="firstname"
                            >
                              First Name
                            </label>
                            <input
                              type="text"
                              id="crowdfunding-signup-firstname"
                              className="form-control form-control-lg"
                              required
                            />
                          </div>
                          <div className="form-outline mb-4">
                            <label
                              className="form-label text-light"
                              htmlFor="lastname"
                            >
                              Last Name
                            </label>
                            <input
                              type="text"
                              id="crowdfunding-signup-lastname"
                              className="form-control form-control-lg"
                              required
                            />
                          </div>

                          <div className="form-outline mb-4">
                            <label
                              className="form-label text-light"
                              htmlFor="email"
                            >
                              Email address
                            </label>
                            <input
                              type="email"
                              id="crowdfunding-signup-email"
                              className="form-control form-control-lg"
                              onBlur={checkUser}
                              required
                            />
                          </div>
                          <div className="form-outline mb-4">
                            <label
                              className="form-label text-light"
                              htmlFor="phone"
                            >
                              Phone Number
                            </label>
                            <div className="d-flex">
                              <input
                                type="tel"
                                placeholder="+91-XXXXXXXXXX"
                                minLength="10"
                                pattern="[0-9]{10}"
                                id="crowdfunding-signup-phone"
                                onBlur={checkUser}
                                required
                                className="form-control form-control-lg"
                              />
                              <button
                                type="button"
                                className="btn btn-warning ms-1"
                                onClick={verifyOTP}
                              >
                                Verify
                              </button>
                            </div>
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
                              id="crowdfunding-signup-password"
                              className="form-control form-control-lg"
                              pattern="(?=.*?[#?!@$%^&*-])(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
                              onKeyUp={both}
                              required
                            />
                            <div className="password-authentication text-light">
                              "Your Password should contain atleast One
                              <span id="crowdfunding-signup-specialcharacter">
                                {" "}
                                Special Character
                              </span>{" "}
                              One
                              <span id="crowdfunding-signup-upperCase">
                                {" "}
                                UpperCase Letter
                              </span>
                              , One
                              <span id="crowdfunding-signup-lowerCase">
                                {" "}
                                LowerCase Letter
                              </span>
                              , One
                              <span id="crowdfunding-signup-number">
                                {" "}
                                Number{" "}
                              </span>
                              and Min Length should be
                              <span id="crowdfunding-signup-character">
                                {" "}
                                6 Character
                              </span>
                              ."
                            </div>
                            <label
                              className="form-label my-2 text-light"
                              htmlFor="form2Example27"
                            >
                              Confirm Password
                            </label>
                            <input
                              type="password"
                              id="crowdfunding-signup-confirmpassword"
                              className="form-control form-control-lg"
                              onKeyUp={checkpassword}
                              required
                            />
                          </div>

                          <div className="pt-1 mb-4 text-center">
                            <button
                              className="btn btn-success btn-lg"
                              type="submit"
                              id="crowdfunding-register"
                            >
                              Register
                            </button>
                          </div>
                          <div className="pt-1 mb-4 text-center text-light">
                            Already Have an Account ?
                            <Link
                              className="nav-link text-light"
                              to="/crowdfunding"
                            >
                              Login Here
                            </Link>
                          </div>
                        </form>
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

export default Crowdfundingsignup;
