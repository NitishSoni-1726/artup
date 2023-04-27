import React, { useState } from "react";
import { storage } from "../Firebase/Firebase";
function StartupDatabase(props) {
  const [Url, setUrl] = useState();
  storage
    .ref("startup")
    .child(props.id)
    .getDownloadURL()
    .then((url) => {
      setUrl(url);
    });
  function status() {
    const fundingdone = document.getElementById(props.mail);
    const fundingpending = document.getElementById(props.id);
    if (props.fundingstatus === true) {
      fundingdone.classList.remove("d-none");
      fundingpending.classList.add("d-none");
    }
  }
  function back() {
    const fundingdone = document.getElementById(props.mail);
    const fundingpending = document.getElementById(props.id);
    fundingdone.classList.add("d-none");
    fundingpending.classList.remove("d-none");
  }
  function likecount(e) {
    if (e.target.checked) {
      console.log("hello");
    }
  }

  return (
    <>
      <button
        onMouseOver={status}
        onMouseLeave={back}
        className="card datacard my-5 bg-secondary mx-2 text-decoration-none"
        to=""
      >
        <img src={Url} className="card-img-top imagedata p-1" alt="..." />
        <input
          type="checkbox"
          className="btn-check likebutton"
          id={props.name}
          onClick={likecount}
        />
        <label
          className="btn btn-outline-dark likebutton ms-1"
          htmlFor={props.name}
        >
          <i className="fa fa-heart"></i> {props.likes}
        </label>
        <div className="card-body">
          <h5 className="card-title text-light my-2 pitchdata text-start">
            {props.name}
          </h5>
          <p className="card-text text-light cardpitch pitchdata text-start">
            {props.pitch}
          </p>
          <h6 className="card-title text-light pitchdata text-start">
            <i className="fa fa-tags"></i> {props.tags}
          </h6>
          <h6 className="card-title text-light pitchdata text-start">
            <i className="fa fa-calendar text-light"></i> {props.date}
          </h6>
          <h6
            className="card-title text-light bg-dark text-center p-4 mt-4 pitchdata goalsdata"
            id={props.id}
          >
            {props.label}
            <br></br> &#8377; {props.goals}
          </h6>
          <h6
            className="card-title text-light bg-success text-center p-4 mt-4 pitchdata d-none goalsdata"
            id={props.mail}
          >
            Funded
          </h6>
        </div>
      </button>
    </>
  );
}
export default StartupDatabase;
