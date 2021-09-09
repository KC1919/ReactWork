import React from "react";
import PropTypes from "prop-types";
// import {Link} from "react-router-dom";

export default function Navbar(props) {
  if (props.mode === "dark") {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
  } else {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
  }

  const setBackgroundColor = (event) => {
    let color = event.target.innerText.toLowerCase();

    console.log(color);

    if (color === "reset") {
      document.body.style.backgroundColor = "white";
    }

    document.body.style.backgroundColor = color;
    document.body.style.color = "black";
  };

  return (
    <div className="App">
      <nav className={`navbar navbar-expand-lg navbar-dark bg-dark`}>
        <div className="container-fluid" id="homeAbout">
          <a className="navbar-brand" href="/">
            {props.title}
          </a>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/about">
                  About
                </a>
              </li>
            </ul>

            <div>
              <button
                id="blue"
                type="button"
                onClick={setBackgroundColor}
                className="btn btn-outline-primary mx-1"
              >
                Blue
              </button>
              <button
                id="yellow"
                type="button"
                className="btn btn-outline-warning mx-1"
                onClick={setBackgroundColor}
              >
                Yellow
              </button>
              <button
                id="green"
                type="button"
                className="btn btn-outline-success mx-1"
                onClick={setBackgroundColor}
              >
                Green
              </button>

              <button
                style={{margin:"0 30px 0 50px"}}
                id="reset"
                type="button"
                className="btn btn-outline-danger"
                onClick={setBackgroundColor}
              >
                Reset
              </button>
            </div>

            <div className="form-check form-switch">
              <input
                style={{ cursor: "pointer" }}
                className="form-check-input"
                type="checkbox"
                id="flexSwitchCheckDefault"
                onClick={props.toggleState}
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
