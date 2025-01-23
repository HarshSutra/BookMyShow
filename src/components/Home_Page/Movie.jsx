import React from "react";
import "./Home.css";
import Banner from "./Banner";


const Movie_cards_view = ({
    movies,
    pageNo,
    HandlePrev,
    HandleNext,
    addToWatchlist,
    removeFromWatchlist,
}) => {
  return (
    <>
    <div className="body">
    <Banner/>
    <div>
      <div className="text">Movies</div>

      <div className="row">
        {movies.map((movie) => (
          <div className="column" key={movie.id}>
            <div className="card">
              <img
                src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
                className="img"
              />
              <h3 className="card-title">{movie.original_title}</h3>

              <p> Ratings : {movie.vote_average}/10 </p>

              <button
                onClick={() => {
                  if (!movie.isHeart) {
                    addToWatchlist(movie);
                  } else {
                    removeFromWatchlist(movie.id);
                  }
                }}
              >
                {movie.isHeart ? "❌" : "❤️"}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* pagination */}

      <div className="pagination">
        <span onClick={HandlePrev}>&laquo;</span>
        <p>{pageNo}</p>
        <span onClick={HandleNext}>&raquo;</span>
      </div>
    </div>
    </div>
    </>
  );
};

export default Movie_cards_view;
