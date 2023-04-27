import React, { useEffect, useState } from "react";
import image from "./assets/Images/investorslogin.png";
import { Link } from "react-router-dom";
import { db } from "../Firebase/Firebase";
import { onValue, ref } from "firebase/database";
function InvestorsLogin() {
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
  function formsubmit(event) {
    event.preventDefault();
    const email = document.getElementById("investor-login-emailadress").value;
    const password = document.getElementById("investor-login-password").value;
    const failed = document.getElementById("investor-login-failedalert");
    const id = email.replace(".", "");
    let userList = [];
    for (let i = 0; i < data.length; i++) {
      userList.push(data[i].email);
    }
    if (userList.includes(email) === false) {
      document
        .getElementById("investor-login-useralert")
        .classList.remove("d-none");
      failed.classList.add("d-none");
      document.loginform.reset();
    }
    for (let i = 0; i < data.length; i++) {
      if (data[i].email === email && data[i].password === password) {
        failed.classList.add("d-none");
        document
          .getElementById("investor-login-useralert")
          .classList.add("d-none");
        localStorage.setItem("state", true);
        localStorage.setItem("id", id);
        localStorage.setItem("section", "investors");
      } else if (data[i].email === email && data[i].password !== password) {
        failed.classList.remove("d-none");
        document
          .getElementById("investor-login-useralert")
          .classList.add("d-none");
      }
    }
    document.loginform.reset();
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
                      <div className="card-body p-4 p-lg-5 text-light bg-dark">
                        <div
                          className="alert alert-secondary text-center d-none"
                          role="alert"
                          id="investor-login-useralert"
                        >
                          <span>
                            No User Found{" "}
                            <Link to="/investorsignup" className="alert-link">
                              Cick Here
                            </Link>{" "}
                            to Register
                          </span>
                        </div>
                        <div
                          className="alert alert-danger text-center d-none"
                          role="alert"
                          id="investor-login-failedalert"
                        >
                          Incorrect Email-Address or Password
                        </div>
                        <form name="loginform" onSubmit={formsubmit}>
                          <h3>Investors Login</h3>
                          <h5 className="fw-normal mb-3 pb-3">
                            Enter Your Details
                          </h5>

                          <div className="form-outline mb-4">
                            <label className="form-label" htmlFor="emailadress">
                              Email address
                            </label>
                            <input
                              type="email"
                              id="investor-login-emailadress"
                              className="form-control form-control-lg"
                              required
                            />
                          </div>

                          <div className="form-outline mb-4">
                            <label className="form-label" htmlFor="password">
                              Password
                            </label>
                            <input
                              type="password"
                              id="investor-login-password"
                              className="form-control form-control-lg"
                              required
                            />
                            <div className="form-check form-switch my-3 mx-1">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                onClick={function showPassword() {
                                  let password = document.getElementById(
                                    "investor-login-password"
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
                                className="form-check-label"
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
                            >
                              Login
                            </button>
                          </div>
                          <div className="text-center">
                            <a className="nav-link" href="#!">
                              Forgot password?
                            </a>
                            <p className="mb-5 pb-lg-2 d-flex justify-content-center">
                              Don't have an account?{" "}
                              <Link
                                to="/investorsignup"
                                className="nav-link mx-2"
                              >
                                Register here
                              </Link>
                            </p>
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
export default InvestorsLogin;
