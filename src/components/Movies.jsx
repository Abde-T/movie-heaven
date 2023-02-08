import React, { useEffect, useState } from "react";

function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const finalData = await (
        await fetch("https://www.omdbapi.com/?s=fast&apikey=19c6ed6a")
      ).json();
      setMovies(finalData.Search);
    };
    getMovies();
  }, []);

  return (
    <div className="movie__container">
      <div className="movies">
        <div className="sec__title"> <span className="yellow">Movies:</span> </div>
        <div className="movie__list">
          {movies.map((movie) => (
            <div className="movie" key={movie.imdbID}>
              <img src={movie.Poster} alt="" className="movie__img" />
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Movies;
