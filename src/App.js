import "./App.css";
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
