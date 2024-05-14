"use client";
import { useState } from "react";
import AddMovie from "./components/AddMovie";
import MovieList from "./components/MovieList";
import Header from "./components/Header";
import { StyledMain } from "./styles";

const Home = () => {
  const [movies, setMovies] = useState([
    {
      Title: "Star Wars: Episode IV - A New Hope",
      Year: "1977",
      imdbID: "tt0076759",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOTA5NjhiOTAtZWM0ZC00MWNhLThiMzEtZDFkOTk2OTU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_SX300.jpg",
    },
    {
      Title: "Inglourious Basterds",
      Year: "2009",
      imdbID: "tt0361748",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOTJiNDEzOWYtMTVjOC00ZjlmLWE0NGMtZmE1OWVmZDQ2OWJhXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg",
    },
  ]);

  const addMovie = (movie) => {
    setMovies([...movies, movie]);
  };

  const removeMovie = (indexToRemove) => {
    const updatedMovies = [...movies];
    updatedMovies.splice(indexToRemove, 1);
    setMovies(updatedMovies);
  };

  return (
    <>
      <Header />
      <StyledMain>
        <AddMovie
          addMovie={addMovie}
          updateMovies={setMovies}
          movies={movies}
        />
        <hr />
        <MovieList type={"list"} movies={movies} removeMovie={removeMovie} />
      </StyledMain>
    </>
  );
};

export default Home;