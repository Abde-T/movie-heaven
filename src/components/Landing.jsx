import React, { useEffect, useState } from "react";

import axios from "axios";

function Landing() {
  const [movies, setMovies] = useState([]);

  async function getMovies() {
    const { data } = await axios.get(
      "http://www.omdbapi.com/?i=tt3896198&apikey=19c6ed6a"
    );
    setMovies(data);
  }

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="container">
      
    </div>
  );
}

export default Landing;
