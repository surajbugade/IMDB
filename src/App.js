import "./App.css";
import React from "react";
import Banner from "./components/Banner";
import Movies from "./components/Movies";
import NavBar from "./components/NavBar";
import Pagination from "./components/Pagination";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Favourites from "./components/Favourites";
import Favourites1 from "./components/Favourites1";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<>
            <Banner/>
            <Movies/>
            {/* <Pagination/> */}
          </>}/>
          <Route path="/favourites" element={<Favourites1/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
