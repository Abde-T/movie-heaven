import React from "react";
import { Link } from "react-router-dom";
import Popcorn from "../assets/Popcorn.png";

function Footer() {
  return (
    <footer className="movie__container">
      <div className="wrapper">
        <div className="footer">
          <img src={Popcorn} alt="" className="logo" />
          <ul className="links">
            <li className="link">
              <Link to="/Home">Home</Link>
            </li>
            <li className="link">
              <Link to="/Home">Movies</Link>
            </li>
            <li className="link">
              <a href="#featured">Featured Franchises:</a>
            </li>
          </ul>
        </div>
        <div className="footer__copyright">Copyright © Movie Heaven</div>
      </div>
    </footer>
  );
}

export default Footer;
