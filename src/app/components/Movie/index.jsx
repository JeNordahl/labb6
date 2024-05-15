import React from 'react';

const Movie = ({ movie, onDelete }) => {
    const handleDelete = () => onDelete(movie.id);

    let stars = [];
    for (let i = 0; i < movie.rating; i++) {
        stars.push(<img key={i} src="./star.png" alt="star" />);
    }

    return (
        <li data-grade={movie.rating} data-title={movie.title}>
            {movie.title} {stars}
            <img
                src="./delete.png"
                alt="delete"
                className="delete-movie-icon"
                onClick={handleDelete}
            />
        </li>
    );
};

export default Movie;

