import React, { useState, useEffect } from "react";
import Movie_cards_view from "./Movie";

const Movie_card_Script = ({
  movies,
  setMovies,
  watchList,
  addToWatchlist,
  removeFromWatchlist,
}) => {

  const token = import.meta.env.VITE_TMDB_TOKEN;
  const [pageNo, setPageNo] = useState(1);
  const [lastPageNo, setLastPageNo] = useState(0);


  useEffect(() => {
    async function fetchMovies() {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      console.log(token);
      await fetch(
        `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${pageNo}`,
        options
      )
        .then((res) => res.json())
        .then((res) => {
          const updatedMovies = res.results.map((movie) => {
            const isInWatchList = watchList.some(
              (watchlistMovie) => watchlistMovie.id == movie.id
            );
            return { ...movie, isHeart: isInWatchList }
          })
          setMovies(updatedMovies);
          setLastPageNo(res.total_pages);
        })
        .catch((err) => console.error(err));
    }
    fetchMovies();
  }, [pageNo,watchList]);

  function HandlePrev() {
    if (pageNo === 1) {
      setPageNo(lastPageNo);
      return;
    }
    setPageNo(pageNo - 1);
  }
  function HandleNext() {
    if (pageNo === lastPageNo) {
      setPageNo(1);
      return;
    }
    setPageNo(pageNo + 1);
  }

  return (
    <Movie_cards_view
      movies={movies}
      pageNo={pageNo}
      HandlePrev={HandlePrev}
      HandleNext={HandleNext}
      addToWatchlist={addToWatchlist}
      removeFromWatchlist={removeFromWatchlist}
    />
  );
};

export default Movie_card_Script;
