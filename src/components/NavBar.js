import React from "react";
import Logo from "../images/logo.png";
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <>
      <div className="border px-12 flex space-x-8 items-center py-4">
        <Link to="/" className="flex items-center">
          <img className="w-[50px] md:w-[50px]" src={Logo} alt="Logo"></img>
          <span className="ml-4 text-blue-400 font-bold text-xl md:text-3xl">
            Movies
          </span>
        </Link>
        <Link to="/favourites">
          <div className="text-blue-400 font-bold  text-xl md:text-3xl">
            Favourites
          </div>
        </Link>
      </div>
    </>
  );
}

export default NavBar;
