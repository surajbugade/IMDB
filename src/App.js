import "./App.css";
import React from "react";
import Banner from "./components/Banner";
import Movies from "./components/Movies";
import NavBar from "./components/NavBar";
import Pagination from "./components/Pagination";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Favourites from "./components/Favourites";

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
          <Route path="/favourites" element={<Favourites/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
