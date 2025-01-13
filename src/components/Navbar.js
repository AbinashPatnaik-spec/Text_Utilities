import React from "react";
import logo from "./brand_01.png";

export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img
            src={logo}
            alt=""
            width="30"
            height="24"
            class="d-inline-block align-text-top"
          />
          <i>{props.title}</i>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
          </ul>
          <span className="navbar-text text-light">
            Copyright &copy;txtUtils 2025. By Abinash Patnaik
          </span>
        </div>
      </div>
    </nav>
  );
}
