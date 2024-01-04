import React from "react";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

function Largemovies({ movie, index }) {
  return (
    <section className="hover:scale-110 transition-all 
    duration-150 ease-in" >
      <img
        key={index}
        src={IMAGE_BASE_URL + movie.backdrop_path}
        className="w-[110px] md:w-[260px] rounded-lg hover:border-[3px]
       border-e-gray-400 cursor-pointer   "
          />
          <h2 className="w-[110px] md:w-[260px] text-white 
          mt-2  "
          >{movie.title}</h2>
    </section>
  );
}

export default Largemovies;
