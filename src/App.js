import { useEffect, useState } from "react";
import "./App.css";
import Featured from "./components/Featured";
import Footer from "./components/Footer";
import Movies from "./components/Movies";
import Main from "./pages/Main";
import Home from "./pages/Home";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
 
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/home" element={<Home />}/>
      </Routes>
    </Router>
  );
}

export default App;
