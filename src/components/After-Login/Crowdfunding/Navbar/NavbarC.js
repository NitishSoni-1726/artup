import React, { useState } from "react";
import { storage } from "../../../Before-Login/Firebase/Firebase";
function NavbarC() {
  const id = localStorage.getItem("id");
  const [Url, setUrl] = useState();
  storage
    .ref("crowdfunding")
    .child(id)
    .getDownloadURL()
    .then((url) => {
      setUrl(url);
    });
  console.log(Url);
  function logout() {
    localStorage.removeItem("state");
    localStorage.removeItem("id");
    localStorage.removeItem("section");
    window.location.replace("/");
  }
  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <div className="text-light d-flex align-items-center justify-content-evenly w-100">
          <div className="p-0 m-0">
            <button className="btn text-light">
              <h2 className="mt-2">Artup</h2>
            </button>
          </div>
          <div className="d-flex align-items-center justify-content-evenly flex-grow-1">
            <a className="nav-link home-icon">
              <i className="fa fa-home" aria-hidden="true"></i>
            </a>
            <a className="nav-link home-icon">
              <i className="fa fa-search" aria-hidden="true"></i>
            </a>
            <a className="nav-link home-icon">
              <i className="fa fa-bell"></i>
            </a>
          </div>
          <div className="">
            <div className="btn-group dropstart">
              <button
                type="button"
                className="btn dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img className="profile-picture" src={Url} alt="..."></img>
              </button>
              <ul className="dropdown-menu mt-5">
                <li className="text-center m-1">
                  <a className="dropdown-item" href="#">
                    Your Profile
                  </a>
                </li>
                <li className="text-center m-1">
                  <a className="dropdown-item" href="#">
                    Help and Support
                  </a>
                </li>
                <li className="m-1 text-center p-1">
                  <button onClick={logout} className="btn btn-danger w-100">
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
export default NavbarC;
