import React, { useState } from "react";
import { Link } from "react-router-dom";
import { storage } from "../Firebase/Firebase";
function InvestorDatabase(props) {
  const id = "#" + props.mail;
  const [Url, setUrl] = useState();
  storage
    .ref("investors")
    .child(props.id)
    .getDownloadURL()
    .then((url) => {
      setUrl(url);
    });
  return (
    <>
      <Link
        className="card investordatacard my-5 bg-secondary mx-4 text-decoration-none"
        to=""
      >
        <div className="text-center">
          <img
            src={Url}
            className="card-img-top investorimagedata p-1"
            alt="..."
          />
        </div>
        <div className="card-body">
          <h5 className="card-title text-light my-2 pitchdata">
            {props.first} {props.last}
          </h5>
          <h6 className="card-title text-light my-2 pitchdata">
            {props.company} ({props.position})
          </h6>
          <p className="card-text text-light cardpitch pitchdata">
            {props.introduction}
          </p>
          <p>
            <button
              className="btn btn-success"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={id}
              aria-expanded="false"
              aria-controls={props.mail}
            >
              <i className="fa fa-tags"></i> Interested Industry
            </button>
          </p>
          <div>
            <div className="collapse collapse-horizontal" id={props.mail}>
              <div className="card card-body bg-secondary text-light pitchdata">
                {props.tags}
              </div>
            </div>
          </div>

          <h6 className="card-title text-light bg-dark text-center p-4 mt-4 pitchdata">
            {props.label}
            <br></br> &#8377; {props.goals}
          </h6>
        </div>
      </Link>
    </>
  );
}
export default InvestorDatabase;
