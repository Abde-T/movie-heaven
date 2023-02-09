import React from "react";
import Popcorn from "../assets/Popcorn.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Nav(props) {
  return (
    <nav>
      <div className="nav__container">
        <div className="logo__name">
          <img src={Popcorn} alt="" className="logo" />
          <h1 className="name">
            Movie <br /> Heaven
          </h1>
        </div>
        <div className="nav__search">
          <input
            id="movie"
            placeholder="Search.."
            value={props.value}
            onChange={(event) => props.setSearchValue(event.target.value)}
          ></input>
          <FontAwesomeIcon icon="play" className="search__icon" />
        </div>
        <ul className="nav__link">
          <li className="nav__icon--1">
            <FontAwesomeIcon icon="video" />
          </li>
          <li className="nav__icon">
            <FontAwesomeIcon icon="film" />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
