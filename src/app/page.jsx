"use client";
import MovieList from "./components/MovieList";
import TextInput from "./components/TextInput";
import Header from "./components/Header";
import getMovieData from "@/api/getMovieData";
import { useState, useEffect } from "react";
import Movie from "./components/MovieList/Movie";

const API_URL = `https://www.omdbapi.com?apikey=${process.env.NEXT_PUBLIC_OMDB_KEY}`;

const movie1 =
{
  "Title": "Italian Spiderman",
  "Year": "2007",
  "imdbID": "tt2705436",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BZWQxMjcwNjItZjI0ZC00ZTc4LWIwMzItM2Q0YTZhNzI3NzdlXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_SX300.jpg"
}

const Labb6 = () => {

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  }

  useEffect(() => {
    if (searchTerm.length >= 3) {
      searchMovies(searchTerm);
    } else {
      setMovies([]);
    }
  }, [searchTerm]);

  return (
    <div>
      <div className="app">
        <h1>Labb6</h1>

        <div className="Seach">
          <input
            placeholder="Sök film.."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {
          movies?.length > 0
            ? (
              <div className="container">
                {movies.map((movie) => (<Movie key={movie.imdbID} movie={movie} />))}
              </div>
            ) : (
              <div className="empty">
                <h2>Inga filmer hittades</h2>
              </div>
            )
        }
      </div>
    </div>
  );
}

export default Labb6;


