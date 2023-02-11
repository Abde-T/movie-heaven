import React, { useEffect, useState } from "react";


function Movies(props) {

  
  return (
    <div className="movie__container">
      <div className="movies">
        
        <div className="search__movie__list">
          {props.movies.map((movie) => (
            <div className="movie" key={movie.imdbID}>
              <div className="movies__img">
              <img src={movie.Poster} alt=""/>
              <div className="overlay">
                    <img src={movie.Poster} alt="" className="overlay__img"/>
                      <h3 className="overlay__title">{movie.Title}</h3>
                      <p className="overlay__year">Release: <span className="yellow">{movie.Year}</span> </p>
                      <p className="overlay__type">Type: <span className="yellow"> {movie.Type} </span> </p>
                  </div>
              </div>
            </div>
            
          ))}
        </div>
      </div>
    </div>
    
  );
}

export default Movies;
