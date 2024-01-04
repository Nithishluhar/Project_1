import React from "react";
import GenresList from "../GeneralList/GenresList";
import MoviesList from "./MoviesList";

const GenreMovieList = () => {
  return (
    <div>
      {GenresList.genere.map(
        (item, i) =>
          i <= 4 && (
            <div key={i} className="p-8 px-8 md:px-16 ">
              <h2 className="text-[20px] text-white font-bold ">{item.name}</h2>
              <MoviesList genreId={ item.id} index={i} />
            </div>
          )
      )}
    </div>
  );
};

export default GenreMovieList;
