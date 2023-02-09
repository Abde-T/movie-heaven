import React, { useEffect, useState } from "react";
import Popcorn from "../assets/Popcorn.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SearshBar from "./SearshBar";
import Movies from "./Movies";
import Featured from "./Featured";
import Footer from "./Footer";

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
            <Link to="/">
          <img src={Popcorn} alt="" className="logo" />
            </Link>
          <h1 className="name">
          <Link to="/">
            Movie <br /> Heaven
            </Link>
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
            <a href="#featured">
            <FontAwesomeIcon icon="film" />
            </a>

          </li>
        </ul>
      </div>

      <div className="sec__title">
          <span className="yellow"> {searchValue}</span>
        </div>
         <Movies  movies={movies} />
         <div id="featured">
      <Featured/>
         </div>
         <Footer/>
    </div>
    
  );
}

export default Nav;
