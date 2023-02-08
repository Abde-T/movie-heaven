import Popcorn from "../assets/Popcorn.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Main() {
 
  return (
    <div className="main__container">
      <div className="sub__container">
        <ul className="links">
          <li className="link">Home</li>
          <li className="link">Movies</li>
          <li className="link">Most Popular</li>
        </ul>
        <div className="wallpaper">
          <div className="logo_name">
            <img src={Popcorn} alt="" className="logo" />
            <h1 className="name">
              Movie <br /> Heaven
            </h1>
          </div>
          <div className="search" id="movieForm">
            <input
              id="movie"
              type="text"
              placeholder="Search.."
              autoComplete="on"
            ></input>
            <FontAwesomeIcon icon="play" className="search__icon" />
          </div>
          <div className="info">
            <h1 className="main__description">
              <span className="yellow"> Movie Heaven </span> best place to watch
              all of your favorite movies
            </h1>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Main;
