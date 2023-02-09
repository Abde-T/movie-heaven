import React, { useEffect, useState } from "react";

function Featured() {
  const [movie, setMovie] = useState([]);
  const [movie1, setMovie1] = useState([]);

  const getMovie = async () => {
    const finalData = await (
      await fetch("https://www.omdbapi.com/?s=fast&apikey=19c6ed6a")
    ).json();
    if (finalData.Search) {
      setMovie(finalData.Search);
    }
  };
  useEffect(() => {
    getMovie();
  }, []);

  const getMovie1 = async () => {
    const finalData1 = await (
      await fetch("https://www.omdbapi.com/?s=spider+man&apikey=19c6ed6a")
    ).json();
    if (finalData1.Search) {
      setMovie1(finalData1.Search);
    }
  };
  useEffect(() => {
    getMovie1();
  }, []);

  return (
    <>
      <div className="movie__container">
        <div className="movies">
          <div className="sec__title">
            <h1 className="fea_">Featured Franchises:</h1>
            <div className="fea__title">
              <span className="yellow">Fast And Furious:</span>
            </div>
          </div>
          <div className="movie__list">
            {movie.slice(0, 8).map((m) => (
              <div className="movie" key={m.imdbID}>
                <img src={m.Poster} alt="" className="movie__img" />
              </div>
            ))}
          </div>
          
          <div className="sec__title">
            <div className="fea__title">
              <span className="yellow">Spider Man:</span>
            </div>
          </div>
          <div className="movie__list">
            {movie1.slice(0, 8).map((m1) => (
              <div className="movie" key={m1.imdbID}>
                <img src={m1.Poster} alt="" className="movie__img" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Featured;
