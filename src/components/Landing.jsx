import React, { useEffect, useState } from "react";

import axios from "axios";

function Landing() {
  const [movies, setMovies] = useState([]);

  /*async function getMovies() {
    const { data } = await axios.get(
      `https://www.omdbapi.com/?s=fast&apikey=19c6ed6a`
    );
    console.log(data);
    setMovies(data);
  }*/

  useEffect(() => {
    const getMovies = async () => {
      const finalData = await (await fetch( "https://www.omdbapi.com/?s=fast&apikey=19c6ed6a")).json();
      setMovies(finalData.Search);
    };
    getMovies();
  }, []);

  return (
    //.filter((movie) =>( movie.t==="fast").slice(0.4)
    <>
      <div className="container">
        <div className="row">
          <div className="section__title">
            <h1> Best series: </h1>
          </div>
          <div className="movie__list">
            {movies.map((movie) => (
              <div className="movie" key={movie.imdbID}>
                <img src={movie.Poster} alt="" className="movie__img" />
                <h3>{movie.Title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;
