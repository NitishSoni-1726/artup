import React, { useEffect, useState } from "react";
import image from "./assets/Images/crownfundinglogin.png";
import { Link } from "react-router-dom";
import { db } from "../Firebase/Firebase";
import { onValue, ref } from "firebase/database";
function CrowdfundingLogin() {
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
  function formsubmit(event) {
    event.preventDefault();
    const email = document.getElementById(
      "crowdfunding-login-emailadress"
    ).value;
    const id = email.replace(".", "");
    console.log(id);
    const password = document.getElementById(
      "crowdfunding-login-password"
    ).value;
    const failed = document.getElementById("crowdfunding-login-failedalert");
    let userList = [];
    for (let i = 0; i < data.length; i++) {
      userList.push(data[i].email);
    }
    if (userList.includes(email) === false) {
      document
        .getElementById("crowdfunding-login-useralert")
        .classList.remove("d-none");
      failed.classList.add("d-none");
      document.loginform.reset();
    }
    for (let i = 0; i < data.length; i++) {
      if (data[i].email === email && data[i].password === password) {
        document.loginform.reset();
        failed.classList.add("d-none");
        document
          .getElementById("crowdfunding-login-useralert")
          .classList.add("d-none");
        localStorage.setItem("state", true);
        localStorage.setItem("id", id);
        localStorage.setItem("section", "crowdfunding");
        window.location.replace(`/crowdfunding/${id}`);
      } else if (data[i].email === email && data[i].password !== password) {
        failed.classList.remove("d-none");
        document
          .getElementById("crowdfunding-login-useralert")
          .classList.add("d-none");
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
                        alt="login form"
                        className="w-100 h-100"
                      />
                    </div>
                    <div className="col-md-6 col-lg-7 d-flex align-items-center">
                      <div className="card-body p-4 p-lg-5 text-black bg-dark">
                        <div
                          className="alert alert-danger text-center d-none"
                          role="alert"
                          id="crowdfunding-login-failedalert"
                        >
                          Incorrect Email-Address or Password
                        </div>
                        <div
                          className="alert alert-secondary text-center d-none"
                          role="alert"
                          id="crowdfunding-login-useralert"
                        >
                          <div className="d-flex justify-content-center">
                            <span className="me-1">No User Found </span>
                            <Link
                              className="nav-link text-success"
                              to="/crowdfundingsignup"
                            >
                              Click Here
                            </Link>
                            <span className="ms-1"> to Register.</span>
                          </div>
                        </div>
                        <form name="loginform" className="form p-4">
                          <h3 className="text-light">Crowdfunding Login</h3>
                          <h5 className="fw-normal mb-3 pb-3 text-light">
                            Enter Your Details
                          </h5>

                          <div className="form-outline mb-4">
                            <label
                              className="form-label text-light"
                              htmlFor="emailadress"
                            >
                              Email address
                            </label>
                            <input
                              type="email"
                              id="crowdfunding-login-emailadress"
                              className="form-control form-control-lg"
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
                              id="crowdfunding-login-password"
                              className="form-control form-control-lg"
                              required
                            />
                            <div className="form-check form-switch my-3 mx-1">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                onClick={function showPassword() {
                                  let password = document.getElementById(
                                    "crowdfunding-login-password"
                                  );
                                  if (password.type === "password") {
                                    password.type = "text";
                                  } else {
                                    password.type = "password";
                                  }
                                }}
                                id="flexSwitchCheckDefault"
                              />
                              <label
                                className="form-check-label text-light"
                                htmlFor="flexSwitchCheckDefault"
                              >
                                Show Password
                              </label>
                            </div>
                          </div>

                          <div className="pt-1 mb-4 text-center">
                            <button
                              className="btn btn-success btn-lg"
                              type="submit"
                              onClick={formsubmit}
                            >
                              Login
                            </button>
                          </div>
                          <div className="text-center">
                            <a className="nav-link text-light" href="#!">
                              Forgot password?
                            </a>
                            <div className="pt-1 mb-4 text-center text-light">
                              New User ?
                              <Link
                                className="nav-link text-light"
                                to="/crowdfundingsignup"
                              >
                                Register Here
                              </Link>
                            </div>
                            <p className="d-flex justify-content-center text-light">
                              Login Using{" "}
                            </p>
                          </div>
                          <div className="text-center">
                            <a
                              className="btn btn-floating mx-3"
                              href="#!"
                              role="button"
                              onClick={formsubmit}
                            >
                              <i className="fa fa-google loginicon"></i>
                            </a>
                            <a
                              className="btn btn-floating mx-3"
                              href="#!"
                              role="button"
                            >
                              <i className="fa fa-twitter loginicon"></i>
                            </a>

                            <a
                              className="btn btn-floating mx-3"
                              href="#!"
                              role="button"
                            >
                              <i className="fa fa-linkedin loginicon"></i>
                            </a>
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

export default CrowdfundingLogin;
