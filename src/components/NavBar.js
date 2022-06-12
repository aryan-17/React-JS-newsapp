import React, { Component } from "react";
import PropTypes from "prop-types";
export class NavBar extends Component {
  static propTypes = {};

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" to="/">
              NewsMonkey
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" to="/">
                    Home
                  </a>
                </li>
                <li className="nav-item"></li>
                  <a className="nav-link" to="/about">
                    About
                  </a>
                  <li className="nav-item"><a className="nav-link" to="/business">business</a></li>
                  <li className="nav-item"><a className="nav-link" to="/entertainment">entertainment</a></li>
                  <li className="nav-item"><a className="nav-link" to="/general">general</a></li>
                  <li className="nav-item"><a className="nav-link" to="/health">health</a></li>
                  <li className="nav-item"><a className="nav-link" to="/science">science</a></li>
                  <li className="nav-item"><a className="nav-link" to="/sports">sports</a></li>
                  <li className="nav-item"><a className="nav-link" to="/about">technology</a></li>
                
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
