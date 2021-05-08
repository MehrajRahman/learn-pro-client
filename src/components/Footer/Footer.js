import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarker } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <div className="row footer d-flex align-items-center justify-content-around p-5">
      <div className="col-md-4 d-flex align-items-center justify-content-around">
        <p>
          <FontAwesomeIcon className="icon" icon={faMapMarker} />
        </p>
        <p style={{ paddingLeft: "20px", color:"white" }}>
          H#000 (0th Floor), Road #00, New DOHS, Mohakhali, Dhaka, Bangladesh
        </p>
      </div>
      <div className="col-md-2">
        <h2>Company</h2>
        <ul>
          <li>
            <a href="#"> About</a>
          </li>
          <li>
            <a href="#">Project</a>
          </li>
          <li>
            <a href="#">Our Team</a>
          </li>
          <li>
            <a href="#">Terms & policys</a>
          </li>
          <li>
            <a href="#">Submit Listing</a>
          </li>
        </ul>
      </div>
      <div className="col-md-2">
        <h2>Quick Links</h2>
        <ul>
          <li>
            <a href="#"> Quick Links</a>
          </li>
          <li>
            <a href="#">Courses</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Reviews</a>
          </li>
        </ul>
      </div>

      <div className="col-md-4">
        <h2>About us</h2>
        <p style={{ paddingLeft: "20px", color:"white" }}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia
          possimus porro excepturi. Magni quam necessitatibus quibusdam tempora,
          deleniti a ullam?
        </p>
        <div className="d-flex justify-content-around">
        <FontAwesomeIcon className="icon" icon={faTwitter} />
        <FontAwesomeIcon className="icon" icon={faInstagram} />
        <FontAwesomeIcon className="icon" icon={faYoutube} />
        <FontAwesomeIcon className="icon" icon={faFacebook} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
