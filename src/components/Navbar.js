import React from "react";
import PropTypes from "prop-types";
// import {Link} from "react-router-dom";

export default function Navbar(props) {

  if (props.mode === "blue") {
    document.body.style.backgroundColor = "powderBlue";
    document.body.style.color = "black";
  } else if (props.mode === "yellow") {
    document.body.style.backgroundColor = "#FFFF99";
    document.body.style.color = "black";
  } else if (props.mode === "green") {
    document.body.style.backgroundColor = "#90EE90";
    document.body.style.color = "black";
  } else {
    if (props.mode === "dark") {
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
    } else {
      document.getElementById("toggleBtn");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  }

  

  return (
    <div className="App">
      <nav className={`navbar navbar-expand-lg navbar-dark bg-dark`}>
        <div className="container-fluid" id="homeAbout">
          <a className="navbar-brand" href="#">
            {props.title}
          </a>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  About
                </a>
              </li>
            </ul>

            <div className="d-flex">
              <div style={{ cursor: "pointer" }}>
                <button
                  id="blue"
                  type="button"
                  onClick={() => {
                    props.toggleState("blue");
                  }}
                  className="btn btn-outline-primary mx-1 my-1"
                >
                  Blue
                </button>
              </div>
              <div style={{ cursor: "pointer" }}>
                <button
                  id="yellow"
                  type="button"
                  className="btn btn-outline-warning mx-1 my-1"
                  onClick={() => {
                    props.toggleState("yellow");
                  }}
                >
                  Yellow
                </button>
              </div>

              <div style={{ cursor: "pointer" }}>
                <button
                  id="green"
                  type="button"
                  className="btn btn-outline-success mx-1 my-1"
                  onClick={() => {
                    props.toggleState("green");
                  }}
                >
                  Green
                </button>
              </div>

              <div style={{ cursor: "pointer" }}>
                <button
                  style={{ margin: "0 30px 0 50px" }}
                  id="reset"
                  type="button"
                  className="btn btn-outline-danger my-1"
                  onClick={() => {
                    props.toggleState("reset");
                  }}
                >
                  Reset
                </button>
              </div>
            </div>

            <div className="form-check form-switch">
              <input
                style={{ cursor: "pointer" }}
                className="form-check-input"
                type="checkbox"
                id="toggleBtn"
                onClick={()=>{props.toggleState(null)}}
                value="NO"
              />
              <label
                className="form-check-label text-light"
                htmlFor="flexSwitchCheckDefault"
              >
                {props.mode === "dark"
                  ? "Disable Dark Mode"
                  : "Enable Dark Mode"}
              </label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

Navbar.propTypes = { title: PropTypes.string.isRequired }; //setting the properties of the props

Navbar.defaultProps = { title: "Set Your title here" }; //if no props will be passed, then it will use the degault values set here
