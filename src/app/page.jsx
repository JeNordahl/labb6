"use client"
import React, { useState } from 'react';
import AddMovieForm from './components/AddMovieForm';
import MovieList from './components/MovieList';
import OrderByAlphaButton from './components/OrderByAlphaButton';
import OrderByGradeButton from './components/OrderByGradeButton';


const Labb6 = () => {
  const [movies, setMovies] = useState([]);
  const [counter, setCounter] = useState(0);

  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
    setCounter(counter + 1);
  };

  const deleteMovie = (id) => {
    setMovies(movies.filter(movie => movie.id !== id));
  };

  const sortByAlpha = () => {
    const sortedMovies = [...movies].sort((a, b) => a.title.localeCompare(b.title));
    setMovies(sortedMovies);
  };

  const sortByGrade = () => {
    const sortedMovies = [...movies].sort((a, b) => b.rating - a.rating);
    setMovies(sortedMovies);
  };

  return (
    <div className="container">
      <h1>Min filmlista</h1>
      <AddMovieForm onAddMovie={addMovie} counter={counter} />
      <div>
        <OrderByAlphaButton onSort={sortByAlpha} />
        <OrderByGradeButton onSort={sortByGrade} />
      </div>
      <h2>Filmer</h2>
      <MovieList movies={movies} onDeleteMovie={deleteMovie} />
    </div>
  );
};

export default Labb6;
