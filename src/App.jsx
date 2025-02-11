import React, { useState, Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Header from "./components/Header/Header";
// import WatchList from "./components/watchList_Page/WatchList";
// import Movie_card_Script from "./components/Home_Page/Movie_card";
  const Header = lazy(() => import("./components/Header/Header"));
const WatchList = lazy(() => import("./components/watchList_Page/WatchList"));
const Movie_card_Script = lazy(() =>
  import("./components/Home_Page/Movie_card")
);

const App = () => {
  const initialWatchList = JSON.parse(localStorage.getItem("watchlist")) || [];
  const [watchList, setWatchList] = useState(initialWatchList);
  const [movies, setMovies] = useState([]);

  const addToWatchlist = (movie) => {
    const updatedWatchList = [...watchList, movie];
    setWatchList(updatedWatchList);
    localStorage.setItem("watchlist", JSON.stringify(updatedWatchList));
  };

  const removeFromWatchlist = (movieId) => {
    const updatedWatchList = watchList.filter((movie) => movie.id !== movieId);
    setWatchList(updatedWatchList);
    localStorage.setItem("watchlist", JSON.stringify(updatedWatchList));
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Movie_card_Script
              movies={movies}
              setMovies={setMovies}
              watchList={watchList}
              addToWatchlist={addToWatchlist}
              removeFromWatchlist={removeFromWatchlist}
            />
          }
        />
        <Route
          path="/watchlist"
          element={
            <Suspense fallback={<>...</>}>
              <WatchList
                watchList={watchList}
                removeFromWatchlist={removeFromWatchlist}
              />
            </Suspense>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
