import React from "react";
import { useEffect, useState } from "react";
import "./MovieCard";
import "./App.css";
//import "./assets/css/bootstrap-reboot.min.css";
import searchIcoN from "./search.svg";
import MovieCard from "./MovieCard";
import MyNavbar from "./Navbar";
//f953d2be

const API_URL = "http://www.omdbapi.com?apikey=f953d2be";

const App = () => {
  const [movies, setMovies] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data.Search);
    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("thor");
  }, []);

  return (
    <>
      <MyNavbar />
      <div className="app">
        <h1>StreamingWay</h1>

        <div className="search">
          <input
            placeholder="Search for Movies"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <img
            src={searchIcoN}
            alt="Search"
            onClick={() => searchMovies(searchTerm)}
          ></img>
        </div>

        {movies?.length > 0 ? (
          <div className="container">
            {movies.map((movie) => (
              <MovieCard movie={movie} />
            ))}
          </div>
        ) : (
          <div className="empty">
            <h1>No Movies</h1>
          </div>
        )}
      </div>
    </>
  );
};

export default App;
