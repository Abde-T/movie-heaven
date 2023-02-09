import React from "react";

function Featured(){

    return(
    <div className="movie__container">
      <div className="movies">
        <div className="sec__title">  <span className="yellow"> </span> </div>
        <div className="movie__list">
          {props.movies.map((movie) => (
            <div className="movie" key={movie.imdbID}>
              <img src={movie.Poster} alt="" className="movie__img" />
              
            </div>
          ))}
        </div>
      </div>
    </div>
    )
}

export default Featured