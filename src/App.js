
import { useEffect, useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Movies from './components/Movies';
import Main from './pages/Main';

function App() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const getMovies = async (searchValue) => {
    const finalData = await (
      await fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=19c6ed6a`)
      ).json();

      if (finalData.Search){
        setMovies(finalData.Search)
      } 
    };
  useEffect(() => {
    getMovies(searchValue);
  }, [searchValue]);
  return (
   <div className='App'>
      <Main searchValue={searchValue} setSearchValue={setSearchValue} />
      <div className="sec__title">
      <span className="yellow"> {searchValue}: </span>
      </div>
      <Movies movies={movies}/>
      <Footer/>
   </div>
  )
}

export default App;
