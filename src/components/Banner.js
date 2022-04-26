import React, {useState, useEffect} from "react";
import axios from "axios";

function Banner() {
  const [movie, setMovie] = useState({});
  useEffect(function () {
    axios.get(
      "https://api.themoviedb.org/3/trending/movie/week?api_key=b54e61663d6c41331027fa9fa4bb040f&page=1"
    )
    .then((res) => {
        setMovie(res.data.results[4])
    }) 
  }, [])
  return (
    <>
      <div
        className={`bg-[url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})] h-[40vh] md:h-[60vh]
        bg-center bg-cover flex items-end 
    `}
      >
        <div className="text-3xl text-white
        p-4
        bg-gray-900 bg-opacity-50
        w-full
        ">
            {movie.title}</div>
      </div>
    </>
  );
}

export default Banner;
