import { useEffect, useState } from "react";
import "./App.css";
import Featured from "./components/Featured";
import Footer from "./components/Footer";
import Movies from "./components/Movies";
import Main from "./pages/Main";
import Home from "./pages/Home";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
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
    <Router>
      <Routes>
      <Route path="/" element={<Main searchValue={searchValue} setSearchValue={setSearchValue}/>}/>
        <Route path="/home" element={<Home />}/>
      </Routes>
      <div className="App">
        <div className="sec__title">
          <span className="yellow"> {searchValue}</span>
        </div>
        <Movies movies={movies} />
        
      </div>

    </Router>
  );
}

export default App;
