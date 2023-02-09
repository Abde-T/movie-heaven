import React, { useEffect, useState } from "react";

function Movies(props) {
  return (
    <div className="movie__container">
      <div className="movies">
        <div className="sec__title">  <span className="yellow"> </span> </div>
        <div className="search__movie__list">
          {props.movies.map((movie) => (
            <div className="movie" key={movie.imdbID}>
              <img src={movie.Poster} alt="" className="movies__img" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Movies;
