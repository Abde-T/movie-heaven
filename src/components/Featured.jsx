
import React, { useEffect, useState } from "react";


function Featured({ title, titelSearch }) {
  const [movie, setMovie] = useState([]);

  const getMovie = async () => {
    const finalData = await (
      await fetch(`https://www.omdbapi.com/?s=${titelSearch}&apikey=19c6ed6a`)
    ).json();
    if (finalData.Search) {
      setMovie(finalData.Search);
    }
  };
  useEffect(() => {
    getMovie();
  }, []);



  return (
    <>
      <div className="movie__container">
        <div className="movies">
          <div className="sec__title">
            <div className="fea__title">
              <span className="yellow">{title}</span>
            </div>
          </div>
          <div className="movie__list">
            {movie.slice(0, 8).map((m) => (
              <div className="movie " key={m.imdbID}>
                <div className="movie__img">
                  <img src={m.Poster} alt=""/>
                  <div className="overlay">
                    <img src={m.Poster} alt="" className="overlay__img"/>
                      <h3 className="overlay__title">{m.Title}</h3>
                      <p className="overlay__year">Release: {m.Year} </p>
                      <p className="overlay__type">Type: {m.Type}  </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Featured;
