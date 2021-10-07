import React from "react";
import "./LandingPage.css";
import backgroundTheme from "../../assets/videos/video1.mp4";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function Starting({ history }) {
  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");

    if (userInfo) {
      history.push("/mynotes");
    }
  }, [history]);

  return (
    <div className="headerH">
      <video
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          width: "100%",
          left: "50%",
          top: "50%",
          height: "100%",
          objectFit: "cover",
          transform: "translate(-50%, -50%)",
          zIndex: "0",
        }}
      >
        <source src={backgroundTheme} type="video/mp4" />
      </video>

      <nav className="navH">
        <img src="../../assets/img/logo.png" className="logo1" alt="" />
        <ul className="nav-linksH">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Team</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </ul>
      </nav>
      <div className="contentH">
        <h1>Welcome to Global Education</h1>
        <form>
          <Link to="/login">
            <button type="submit" className="signupH">
              Login Here
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}
