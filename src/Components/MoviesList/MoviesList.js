import React from "react";
import MoviesCard from "./MoviesCard";

const MoviesList = ({ movieslistprops, searchtitle, searchrate }) => {
  return (
    <div>
      {movieslistprops
        .filter(
          (movie) =>
            movie.name.toLowerCase().includes(searchtitle.toLowerCase()) &&
            movie.rating >= searchrate
        )
        .map((moviesCard) => (
          <MoviesCard movieslistprops={moviesCard} />
        ))}
    </div>
  );
};

export default MoviesList;
