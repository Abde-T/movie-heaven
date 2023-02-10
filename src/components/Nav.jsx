import React, { useEffect, useState } from "react";
import Popcorn from "../assets/Popcorn.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SearshBar from "./SearshBar";
import Movies from "./Movies";
import Slider from "./Slider";
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

  const slides = [
    {
      src: "./images/img2.jpg",
      title: "BatMan",
      para: "The Batman film franchise follows the various incarnations of the character created by DC Comics.",
      but: "Click to see More",
    },
    {
      src: "./images/img1.jpg",
      title: "Spider Man",
      para: "The Spider-Man film franchise follows various incarnations of the character created by Marvel Comics. ",
      but: "Click to see More",
    },
    {
      src: "./images/img3.jpg",
      title: "Fast And Furious",
      para: "The Fast and the Furious is a media franchise centered on action films primarily concerned with street racing, heists, spies, and family.",
      but: "Click to see More",
    },
  ];

  return (
    <div className="container__wrapper">
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
          <SearshBar
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
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
      <div className="containerStyles">
        <Slider slides={slides} />
      </div>
      <div className="sec__title">
        <span className="yellow"> {searchValue}</span>
      </div>

      <Movies movies={movies} />

      <div id="featured">
        <div className="sec__title">
          <h1 className="fea_">Featured Franchises:</h1>
        </div>
        <Featured titelSearch="batman" title="BatMan:" />
        <Featured titelSearch="Spider" title="Spider Man:" />
        <Featured titelSearch="fast" title="Fast And Furious:" />
      </div>
    </div>
  );
}
export default Nav;
