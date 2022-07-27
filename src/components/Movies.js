import React, { useState, useEffect } from "react";
import axios from "axios";
import { Oval } from "react-loader-spinner";
import Pagination from "./Pagination";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [hover, setHover] = useState("");
  const [favourites, setFavourites] = useState([]);

  function goAhead() {
    setPage(page + 1);
  }
  function goBack() {
    if (page > 1) setPage(page - 1);
  }
  useEffect(
    function () {
      axios
        .get(
          `https://api.themoviedb.org/3/trending/movie/week?api_key=b54e61663d6c41331027fa9fa4bb040f&page=${page}`
        )
        .then((res) => {
          console.table(res.data.results);
          setMovies(res.data.results);
        });
    },
    [page]
  );

  let add = (movie) => {
    let newArray = [...favourites, movie];
    setFavourites([...newArray]);
    //   console.log(newArray)
    localStorage.setItem("imdb", JSON.stringify(newArray))
  };
  let del = (movie) => {
    let newArray = favourites.filter((m) => m.id != movie.id)
    setFavourites([...newArray])
    localStorage.setItem("imdb", JSON.stringify(newArray))
}

  return (
    <>
      <div className="mb-8">
        <div className="mt-8 mb-8 font-bold text-2xl ">Trending Movies</div>
        {movies.length === 0 ? (
          <div className="flex justify-center">
            <Oval
              height="100"
              width="100"
              color="grey"
              secondaryColor="grey"
              ariaLabel="loading"
            />
          </div>
        ) : (
          <div className="flex flex-wrap justify-center">
            {movies.map((movie) => (
              <div
                className={`bg-[url(https://image.tmdb.org/t/p/w500/${movie.poster_path})]
                  md:h-[30vh] md:w-[250px]
                  h-[25vh] w-[150px]
                  bg-center bg-cover
                  rounded-xl
                  flex items-end
                  m-4
                  hover:scale-110 hover:border-slate-400 hover:border-4
                  ease-out duration-300
                  relative
                  `}
                onMouseEnter={() => setHover(movie.id)}
                onMouseLeave={() => setHover("")}
              >
                {
                  hover == movie.id && <> {
                    !favourites.find((m)=>m.id == movie.id) ?
                  <div
                    className="absolute top-2 right-2 p-2 bg-gray-800 rounded-xl cursor-pointer hover:scale-110 hover:bg-sky-700"
                    onClick={() => add(movie)}
                  >
                    💖
                  </div> :
                  <div
                    className="absolute top-2 right-2 p-2 bg-gray-800 rounded-xl cursor-pointer hover:scale-110 hover:bg-sky-700"
                    onClick={() => del(movie)}
                  >
                    ❌
                  </div>             
                  }
                  </>
                }
                <div className="w-full bg-gray-900 text-white py-2 font-bold text-center rounded-b-xl">
                  {movie.title}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <Pagination pageProp={page} goAhead={goAhead} goBack={goBack} />
    </>
  );
}

export default Movies;
