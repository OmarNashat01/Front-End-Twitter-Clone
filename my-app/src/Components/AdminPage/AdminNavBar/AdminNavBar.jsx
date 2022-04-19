import React, { useState } from "react";
import pic from "./logo.png";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./AdminNavBar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
const AdminNavBar = (props) => {
  const [flip, setFlip] = useState(true);
  const manualToggle = (check) => {
    if (check) {
      return (
        <div
          className="collapse navbar-collapse show"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
            <li className="nav-item active">
              <Link to="/">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/search">
                <a className="nav-link active " href="#">
                  Search_Users
                </a>
              </Link>
            </li>
          </ul>
        </div>
      );
    }
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky">
        <div className="container-fluid">
          <button
            onClick={() => {
              setFlip(!flip);
            }}
            class="navbar-toggler collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <a className="navbar-brand" href="#">
            <img src={pic} className="logo" />
          </a>

          {manualToggle(flip)}
        </div>
      </nav>
    </div>
  );
};
export default AdminNavBar;
