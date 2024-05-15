import React from 'react';
import Movie from '../Movie';

const MovieList = ({ movies, onDeleteMovie }) => {
    return (
        <ul id="movies">
            {movies.map(movie => (
                <Movie key={movie.id} movie={movie} onDelete={onDeleteMovie} />
            ))}
        </ul>
    );
};

export default MovieList;
