import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../App";
import './Navbar.css'

const Navbar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  return (
    <nav className=" row col-md-12  navbar navbar-expand-lg navbar-light">
      <div className=" container-fluid">
        <div className="col-md-2 p-3">
          <a className="navbar-brand main-logo" href="#">
            LEARN <span className="logo">PRO</span>
          </a>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="col-md-10 d-flex justify-content-end  collapse navbar-collapse"
          id="navbarNav"
        >
          <ul className="navbar-nav ">
            <li className="nav-item">
              <Link to="/home" className="nav-link ">Courses</Link>
            </li>
            <li className="nav-item">
              <Link to="/addNewCourse" className="nav-link ">Dashboard</Link>
            </li>
            <li className="nav-item">
              <Link to="/reviews" className="nav-link ">Reviews</Link>
            </li>
            <li className="nav-item">
              <Link to="home" className="nav-link ">About Us</Link>
            </li>
            {
              loggedInUser.email ? <p id="name" className="nav-link">{loggedInUser.name}</p>: <li className="nav-item">
              <Link to="/login" className="nav-link ">Log In</Link>
            </li>
            }
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
