import React from "react";
import GlobalApi from "../Services/GlobalApi";
import { useEffect } from "react";
import { useState } from "react";
import MovieCart from "./MovieCart";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import { useRef } from "react";
import Largemovies from "./Largemovies";

const MoviesList = ({ genreId, index }) => {
  const [MoviesList, setMovieList] = useState([]);
  const elementRef = useRef(null);

  useEffect(() => {
    getMovieByGenreId();
  }, []);
  const getMovieByGenreId = () => {
    GlobalApi.getMovieByGenreId(genreId).then((res) => {
      // console.log(res.data.results);
      setMovieList(res.data.results);
    });
  };
  const slideRight = (element) => {
    element.scrollLeft += 500;
  };
  const slideLeft = (element) => {
    element.scrollLeft -= 500;
  };

  return (
    <div className="relative">
      <IoChevronBackOutline
        onClick={() => slideLeft(elementRef.current)}
        className={`text-[50px] text-white
           p-2 z-10 cursor-pointer 
            hidden md:block absolute ${index%3 == 0 ?'mt-[100px]':" mt-[150px]"}
         `}
      />
      <div
        ref={elementRef}
        className="flex overflow-x-auto gap-8 scrollbar-none 
      pt-5 px-3 pb-5 scroll-smooth
      "
      >
        {MoviesList.map((item, i) => (
          <>
            {index % 3 == 0 ? <Largemovies movie={item} index={i} /> : <MovieCart movie={item} />}
          </>
        ))}
      </div>
      <IoChevronForwardOutline
        onClick={() => slideRight(elementRef.current)}
        className={`text-[50px] text-white hidden md:block
           p-2 cursor-pointer z-10 top-0
            absolute right-0 
            ${index%3 == 0 ?'mt-[100px]':" mt-[150px]"}`}
      />
    </div>
  );
};

export default MoviesList;
