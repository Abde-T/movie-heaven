import Popcorn from "../assets/Popcorn.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Featured from "../components/Featured";
import Footer from "../components/Footer";
import Movies from "../components/Movies";
import SearshBar from "../components/SearshBar";



const Main = (props) => {
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
    <>
      <div className="main__container">
        <div className="sub__container">
          <ul className="links">
            <li className="link">
              Home
              </li>
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
             <SearshBar searchValue={searchValue} setSearchValue={setSearchValue}/>
            </div>
            <div className="info">
              <h1 className="main__description">
                <span className="yellow"> Movie Heaven </span> best place to
                watch all of your favorite movies
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="sec__title">
          <span className="yellow"> {searchValue}</span>
      </div>
      <Movies movies={movies} />
      <Featured/>
      <Footer/>
    </>
  );
}

export default Main;
