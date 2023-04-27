import React, { useEffect, useState } from "react";
import image from "./assets/Images/investorslogin.png";
import { Link } from "react-router-dom";
import { dataref, db, storage } from "../Firebase/Firebase";
import { onValue, ref } from "firebase/database";
import noimage from "./assets/Images/noimage.jpg";
function InvestorSignup() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const database = ref(db, "investors/users/");
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
    const email = document.getElementById("investor-signup-email").value;
    let emailList = [];
    for (let i = 0; i < data.length; i++) {
      emailList.push(data[i].email);
    }
    if (emailList.includes(email) === true) {
      document
        .getElementById("investor-login-successalert")
        .classList.remove("d-none");
      document.registrationform.reset();
    } else {
      document
        .getElementById("investor-login-successalert")
        .classList.add("d-none");
    }
  }
  function checkpassword() {
    const password = document.getElementById("investor-signup-password");
    const confirmpassword = document.getElementById(
      "investor-signup-confirmpassword"
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
      "investor-signup-specialcharacter"
    );
    const uppercase = document.getElementById("investor-signup-upperCase");
    const lowercase = document.getElementById("investor-signup-lowerCase");
    const number = document.getElementById("investor-signup-number");
    const character = document.getElementById("investor-signup-character");
    const password = document.getElementById("investor-signup-password").value;
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
  let industry = [];
  function formSubmit(event) {
    event.preventDefault();
    const firstname = document.getElementById(
      "investor-signup-firstname"
    ).value;
    const lastname = document.getElementById("investor-signup-lastname").value;
    const email = document.getElementById("investor-signup-email").value;
    const password = document.getElementById("investor-signup-password").value;
    const position = document.getElementById("investor-signup-position").value;
    const company = document.getElementById("investor-signup-company").value;
    const introduction = document.getElementById(
      "investor-signup-introduction"
    ).value;
    const maxinvestment = document.getElementById(
      "investor-signup-amount"
    ).value;
    const profilepicture = document.getElementById("investor-signup-fileupload")
      .files[0];
    const emaildata = email.replace(".", "");
    const checkbox = document.querySelectorAll(".btn-check");

    for (let i = 0; i < checkbox.length; i++) {
      if (checkbox[i].checked === true) {
        industry.push(checkbox[i].value);
      }
    }
    const data = {
      firstname: firstname,
      lastname: lastname,
      position: position,
      company: company,
      password: password,
      email: email,
      introduction: introduction,
      maxinvestment: maxinvestment,
      status: false,
      tags: industry.join(", "),
    };
    dataref.ref(`investors/users/${emaildata}`).set({
      firstname: firstname,
      lastname: lastname,
      position: position,
      company: company,
      password: password,
      email: email,
      introduction: introduction,
      maxinvestment: maxinvestment,
      status: false,
      tags: industry.join(", "),
    });
    storage.ref(`/investors/${emaildata}`).put(profilepicture);
    sessionStorage.setItem(email, JSON.stringify(data));
    document.registrationform.reset();
    setFile(
      "https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"
    );
    const success = document.getElementById("investor-signup-alert");
    success.classList.remove("d-none");
    both();
  }
  function accept(event) {
    const register = document.getElementById("investor-signup-register");
    if (event.target.checked) {
      register.classList.remove("d-none");
    } else {
      register.classList.add("d-none");
    }
  }
  function selectall(event) {
    const checkbox = document.querySelectorAll(".btn-check");
    if (event.target.checked) {
      for (let i = 0; i < checkbox.length; i++) {
        checkbox[i].checked = true;
      }
    } else {
      for (let i = 0; i < checkbox.length; i++) {
        checkbox[i].checked = false;
      }
    }
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
                    <div className="col-md-6 col-lg-7 d-flex align-items-center">
                      <div className="card-body p-4 p-lg-5 text-light bg-dark">
                        <div
                          className="alert alert-success text-center d-none"
                          role="alert"
                          id="investor-signup-alert"
                        >
                          <span>
                            Registration Successfull{" "}
                            <Link to="/investorlogin" className="alert-link">
                              Cick Here
                            </Link>{" "}
                            to login
                          </span>
                        </div>
                        <div
                          className="alert alert-success text-center d-none"
                          role="alert"
                          id="investor-login-successalert"
                        >
                          User Already Registered Try to Login
                        </div>
                        <form
                          className="form px-4"
                          name="registrationform"
                          onSubmit={formSubmit}
                        >
                          <h3>Investors Registration</h3>
                          <h5 className="fw-normal mb-3 pb-3">
                            Enter Your Details
                          </h5>
                          <div className="form-outline mb-4">
                            <input
                              type="file"
                              className="d-none"
                              id="investor-signup-fileupload"
                              accept="image/png, image/jpeg"
                              onChange={handleChange}
                            />
                            <div className="d-flex flex-column align-items-center">
                              <img className="profileimage" src={file} alt="" />
                              <span
                                className="btn btn-dark rounded my-1"
                                onClick={function upload() {
                                  document
                                    .getElementById(
                                      "investor-signup-fileupload"
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
                            <label className="form-label" htmlFor="firstname">
                              First Name
                            </label>
                            <input
                              type="text"
                              id="investor-signup-firstname"
                              className="form-control form-control-lg"
                              required
                            />
                          </div>
                          <div className="form-outline mb-4">
                            <label className="form-label" htmlFor="lastname">
                              Last Name
                            </label>
                            <input
                              type="text"
                              id="investor-signup-lastname"
                              className="form-control form-control-lg"
                              required
                            />
                          </div>
                          <div className="form-outline mb-4">
                            <label className="form-label" htmlFor="position">
                              Title/Position
                            </label>
                            <input
                              type="text"
                              id="investor-signup-position"
                              className="form-control form-control-lg"
                              required
                            />
                          </div>
                          <div className="form-outline mb-4">
                            <label className="form-label" htmlFor="company">
                              Company
                            </label>
                            <input
                              type="text"
                              id="investor-signup-company"
                              className="form-control form-control-lg"
                              required
                            />
                          </div>
                          <div className="form-outline mb-4">
                            <label
                              className="form-label"
                              htmlFor="introduction"
                            >
                              Brief Info About Yourself
                            </label>
                            <textarea
                              type="text"
                              id="investor-signup-introduction"
                              className="form-control form-control-lg"
                              required
                            />
                          </div>
                          <div className="form-outline mb-4">
                            <label className="form-label" htmlFor="email">
                              Email Adress
                            </label>
                            <input
                              type="email"
                              id="investor-signup-email"
                              className="form-control form-control-lg"
                              onBlur={checkUser}
                              required
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
                              id="investor-signup-password"
                              className="form-control form-control-lg"
                              pattern="(?=.*?[#?!@$%^&*-])(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
                              onKeyUp={both}
                              required
                            />
                            <div className="password-authentication text-light">
                              "Your Password should contain atleast One
                              <span id="investor-signup-specialcharacter">
                                {" "}
                                Special Character
                              </span>{" "}
                              One
                              <span id="investor-signup-upperCase">
                                {" "}
                                UpperCase Letter
                              </span>
                              , One
                              <span id="investor-signup-lowerCase">
                                {" "}
                                LowerCase Letter
                              </span>
                              , One
                              <span id="investor-signup-number"> Number </span>
                              and Min Length should be
                              <span id="investor-signup-character">
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
                              id="investor-signup-confirmpassword"
                              className="form-control form-control-lg"
                              onKeyUp={checkpassword}
                              required
                            />
                          </div>
                          <div className="form-outline mb-4">
                            <label className="form-label" htmlFor="amount">
                              What's the Maximum you can Invest ?
                            </label>
                            <input
                              type="number"
                              placeholder="&#8377;"
                              className="form-control form-control-lg"
                              id="investor-signup-amount"
                              required
                              min={0}
                            />
                          </div>
                          <div className="form-outline mb-4">
                            <label className="form-label" htmlFor="industry">
                              Select atleast one Industry you Invest in
                            </label>
                            <div
                              className="d-flex-column justify-content-between align-items-center"
                              role="group"
                              aria-label="Basic checkbox toggle button group"
                            >
                              <input
                                type="checkbox"
                                className="btn-check investor"
                                id="all"
                                value="All-Industry"
                                onClick={selectall}
                              />
                              <label
                                className="btn btn-outline-light"
                                htmlFor="all"
                              >
                                All Industry
                              </label>

                              <input
                                type="checkbox"
                                className="btn-check investor"
                                id="consumergoods"
                                value="Consumer Goods"
                              />
                              <label
                                className="btn btn-outline-light"
                                htmlFor="consumergoods"
                              >
                                Consumer Goods
                              </label>

                              <input
                                type="checkbox"
                                className="btn-check investor"
                                id="education"
                                value="Education"
                              />
                              <label
                                className="btn btn-outline-light"
                                htmlFor="education"
                              >
                                Education
                              </label>
                              <input
                                type="checkbox"
                                className="btn-check investor"
                                id="energy"
                                value="Energy"
                              />
                              <label
                                className="btn btn-outline-light"
                                htmlFor="energy"
                              >
                                Energy
                              </label>

                              <input
                                type="checkbox"
                                className="btn-check investor"
                                id="entertainment"
                                value="Entertainment"
                              />
                              <label
                                className="btn btn-outline-light"
                                htmlFor="entertainment"
                              >
                                Entertainment
                              </label>

                              <input
                                type="checkbox"
                                className="btn-check investor"
                                id="fashion"
                                value="Fashion"
                              />
                              <label
                                className="btn btn-outline-light"
                                htmlFor="fashion"
                              >
                                Fashion
                              </label>
                              <input
                                type="checkbox"
                                className="btn-check investor"
                                id="fitness-sports"
                                value="Fitness/Sports"
                              />
                              <label
                                className="btn btn-outline-light"
                                htmlFor="fitness-sports"
                              >
                                Fitness/Sports
                              </label>

                              <input
                                type="checkbox"
                                className="btn-check investor"
                                id="food-drinks"
                                value="Food/Drinks"
                              />
                              <label
                                className="btn btn-outline-light"
                                htmlFor="food-drinks"
                              >
                                Food/Drinks
                              </label>

                              <input
                                type="checkbox"
                                className="btn-check investor"
                                id="healthcare"
                                value="Healthcare"
                              />
                              <label
                                className="btn btn-outline-light"
                                htmlFor="healthcare"
                              >
                                Healthcare
                              </label>
                              <input
                                type="checkbox"
                                className="btn-check investor"
                                id="automobile"
                                value="Automobile"
                              />
                              <label
                                className="btn btn-outline-light"
                                htmlFor="automobile"
                              >
                                Automobile
                              </label>

                              <input
                                type="checkbox"
                                className="btn-check investor"
                                id="retail"
                                value="Retail"
                              />
                              <label
                                className="btn btn-outline-light"
                                htmlFor="retail"
                              >
                                Retail
                              </label>

                              <input
                                type="checkbox"
                                className="btn-check investor"
                                id="technology"
                                value="Technology"
                              />
                              <label
                                className="btn btn-outline-light"
                                htmlFor="technology"
                              >
                                Technology
                              </label>
                            </div>
                          </div>
                          <div className="form-outline mb-4">
                            <label className="form-label" htmlFor="acceptterms">
                              Review and confirm the investor accreditation
                              terms:
                            </label>
                            <p className="form-control form-control-lg investorterms">
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Non consequatur quaerat harum nisi ab porro
                              deleniti nobis eligendi adipisci autem animi esse
                              dolorem labore beatae hic, doloribus dolore vero
                              dicta incidunt rerum qui saepe magni soluta.
                              Quibusdam sapiente illum qui iste exercitationem
                              veniam quo atque at, eligendi maiores veritatis
                              inventore excepturi doloremque vero consectetur
                              voluptas! Voluptatem sequi voluptatum optio
                              repudiandae ea velit incidunt, atque quas
                              accusamus nam, et est quae, provident culpa
                              ratione nostrum doloribus asperiores aut ullam
                              minima? Sit totam dolorem vel? Eaque quibusdam
                              fugit excepturi tempore laudantium, nobis cumque
                              libero tempora, sed, dolore delectus est? Officia
                              eaque sunt ducimus nobis consequuntur assumenda
                              aut in deleniti obcaecati quod iure, error itaque
                              consequatur delectus veniam, culpa sit adipisci
                              fugit tempora non aperiam? Temporibus quos atque,
                              id beatae consectetur neque numquam vel esse
                              voluptate fugit fugiat deserunt maiores pariatur,
                              officiis exercitationem laborum quod architecto
                              inventore expedita rem ducimus? Aspernatur
                              voluptates odio dolore itaque quasi! Vitae
                              deleniti fugiat provident debitis modi minima
                              possimus. Nostrum, rem. Dolores fugit molestias,
                              ducimus cum assumenda officiis enim inventore
                              consequatur exercitationem. Minima eos distinctio
                              accusantium magnam ipsa? Esse corporis tenetur
                              nesciunt fugit culpa enim sit cupiditate totam
                              autem in iste assumenda, voluptates aliquid
                              reprehenderit voluptas. Voluptates debitis
                              repudiandae animi magnam maiores. Eos illum
                              blanditiis nemo nihil quas sapiente ex tempora eum
                              quasi, maiores corporis perspiciatis iure unde
                              fugit ipsum nobis eius harum similique mollitia
                              dignissimos necessitatibus debitis hic eligendi
                              numquam? Perspiciatis quae aspernatur totam natus
                              repudiandae fugiat praesentium ut laudantium
                              similique. Accusantium, molestiae optio! Beatae
                              officiis rem itaque repellendus aut facilis atque,
                              tenetur nemo quaerat omnis ea distinctio libero
                              animi, repellat a. Tempore iusto magni
                              praesentium, deleniti in earum odio voluptates ab
                              aperiam officia? Reprehenderit culpa quas dolor?
                              Harum ut nulla ducimus dicta mollitia hic, quod
                              veritatis ab eius architecto molestiae temporibus,
                              tenetur nobis magni repudiandae sequi fugiat
                              praesentium id aliquam odio, non impedit aut
                              dolores? Voluptate qui debitis ex. Veniam facilis
                              atque, eligendi ea quidem earum sint blanditiis
                              iure mollitia quam aliquam sit nesciunt officiis
                              commodi quas alias illum praesentium culpa
                              voluptas a explicabo optio. Similique eum porro
                              nulla autem dolorem voluptate, voluptates sit
                              suscipit molestiae est! Blanditiis perspiciatis
                              assumenda dolor et sed quo nam facere placeat
                              totam repellat aperiam vero perferendis, quisquam
                              fugiat quam, veritatis, reprehenderit saepe amet
                              harum libero! Ad, delectus facilis. In natus amet
                              inventore voluptate dolorem laborum, repellat
                              saepe totam, dicta atque voluptatibus et vel. Cum
                              corporis commodi animi dolorum! Ad nemo amet nulla
                              vel delectus quasi culpa error repudiandae
                              asperiores, officia neque aperiam, rem, explicabo
                              aliquid necessitatibus provident vitae cumque!
                              Illo sit aut eaque minus harum, excepturi
                              explicabo hic laborum reiciendis vel laudantium
                              neque error veniam voluptatem tenetur recusandae
                              doloribus consequuntur, nobis quidem ea quae. Sit
                              officia culpa sapiente eum voluptate doloribus
                              voluptatibus temporibus totam, voluptatem vitae
                              incidunt error velit dolorum ad excepturi soluta
                              ipsam, ipsum architecto. Veniam maxime tempore,
                              expedita, optio pariatur voluptatem, doloribus
                              eveniet facilis rerum necessitatibus vitae.
                              Facilis, optio nostrum, facere est expedita
                              repellat praesentium iste hic minima consequatur
                              aliquid in laboriosam voluptates, culpa vel nobis
                              dolorem quae.
                            </p>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                              id="investor-signup-acceptterms"
                              onClick={accept}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="acceptterms"
                            >
                              I am an Accredited Investor and meet one or more
                              criteria above.
                            </label>
                          </div>
                          <div className="form-control form-control-lg my-4 bg-dark">
                            <div
                              className="accordion accordion-flush"
                              id="accordionFlushExample"
                            >
                              <div className="accordion-item bg-dark">
                                <h2 className="accordion-header">
                                  <button
                                    className="accordion-button collapsed bg-dark text-light"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseOne"
                                    aria-expanded="false"
                                    aria-controls="flush-collapseOne"
                                  >
                                    + ArtUp does not guarantee investment
                                    quality.
                                  </button>
                                </h2>
                                <div
                                  id="flush-collapseOne"
                                  className="accordion-collapse collapse"
                                  data-bs-parent="#accordionFlushExample"
                                >
                                  <div className="accordion-body bg-dark text-light">
                                    Information submitted on this site is
                                    provided directly by the companies using
                                    this site, not ArtUp. As such, the accuracy
                                    of information is 100% subject to the
                                    contribution by the companies.
                                  </div>
                                </div>
                              </div>
                              <div className="accordion-item">
                                <h2 className="accordion-header">
                                  <button
                                    className="accordion-button collapsed bg-dark text-light"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseTwo"
                                    aria-expanded="false"
                                    aria-controls="flush-collapseTwo"
                                  >
                                    + You are responsible for your own due
                                    diligence.
                                  </button>
                                </h2>
                                <div
                                  id="flush-collapseTwo"
                                  className="accordion-collapse collapse"
                                  data-bs-parent="#accordionFlushExample"
                                >
                                  <div className="accordion-body bg-dark text-light">
                                    Treat investments on ArtUp as you would any
                                    other potential source of investment. Assume
                                    everyone is a stranger and you will have to
                                    do all of your own homework to make sure a
                                    company is fit for your investment.
                                  </div>
                                </div>
                              </div>
                              <div className="accordion-item">
                                <h2 className="accordion-header">
                                  <button
                                    className="accordion-button collapsed bg-dark text-light"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseThree"
                                    aria-expanded="false"
                                    aria-controls="flush-collapseThree"
                                  >
                                    + ArtUp does not broker or collect any funds
                                    whatsoever.
                                  </button>
                                </h2>
                                <div
                                  id="flush-collapseThree"
                                  className="accordion-collapse collapse"
                                  data-bs-parent="#accordionFlushExample"
                                >
                                  <div className="accordion-body bg-dark text-light">
                                    ArtUp is a platform to connect investors and
                                    companies. We do not facilitate the actual
                                    transaction of capital or securities. We may
                                    assist the two parties in communicating, but
                                    the actual transaction will happen
                                    exclusively between you and the company you
                                    are investing in.
                                  </div>
                                </div>
                              </div>
                              <div className="accordion-item">
                                <h2 className="accordion-header">
                                  <button
                                    className="accordion-button collapsed bg-dark text-light"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapsefour"
                                    aria-expanded="false"
                                    aria-controls="flush-collapsefour"
                                  >
                                    + Invest completely at your own risk.
                                  </button>
                                </h2>
                                <div
                                  id="flush-collapsefour"
                                  className="accordion-collapse collapse"
                                  data-bs-parent="#accordionFlushExample"
                                >
                                  <div className="accordion-body bg-dark text-light">
                                    Investing is incredibly risky and offers no
                                    guarantees whatsoever. No matter what claims
                                    are made by any content available on this
                                    site, you are guaranteed nothing but risk.
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="pt-1 m-4 text-center">
                            <button
                              className="btn btn-success btn-lg d-none"
                              type="submit"
                              id="investor-signup-register"
                            >
                              Register
                            </button>
                          </div>
                          <div className="text-center">
                            <div className="mb-5 pb-lg-2">
                              Already have an Account?{" "}
                              <div>
                                <Link
                                  to="/investorlogin"
                                  className="nav-link mx-2"
                                >
                                  Login Here
                                </Link>
                              </div>
                            </div>
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

export default InvestorSignup;
