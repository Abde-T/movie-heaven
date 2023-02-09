import React, { useEffect, useState } from "react";
import Popcorn from "../assets/Popcorn.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SearshBar from "./SearshBar";
import Movies from "./Movies";
import Featured from "./Featured";

function Nav(props) {
    const [movies, setMovies] = useState([]);
    const [searchValue, setSearchValue] = useState("");
  
    const getMovies = async (searchValue) => {
      const finalData = await (
        await fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=19c6ed6a`)
      ).json();
  
      if (finalData.Search) {
        setMovies(finalData.Search);
      }
    };
    useEffect(() => {
      getMovies(searchValue);
    }, [searchValue]);
  return (
    <div>

      <div className="nav__container">
        <div className="logo__name">
          <img src={Popcorn} alt="" className="logo" />
          <h1 className="name">
            Movie <br /> Heaven
          </h1>
        </div>
        <div className="nav__search">
          <SearshBar searchValue={searchValue} setSearchValue={setSearchValue}/>
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

      <div className="sec__title">
          <span className="yellow"> {searchValue}</span>
        </div>
         <Movies  movies={movies} />
      <Featured/>
    </div>
    
  );
}

export default Nav;
