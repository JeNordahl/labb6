/*import StyledInput from "./styles";

const TextInput = (props) => {
    return (
        <StyledInput onChanged={props.onChanged}
            type='text' placeholder="Sök film..." />
    );
}

export default TextInput;*/



/*"use client";
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
*/

/*import { useState } from "react";
import MovieList from "../MovieList";
import TextInput from "../TextInput";
import getMovieData from "@/api/getMovieData";
import { StyledSection } from "./styles";

const AddMovie = (props) => {
  const [movieResults, setMovieResults] = useState([]);

  const handleChange = (event) => {
    if (event.target.value.length < 3) setMovieResults([]);
    else {
      getMovieData(event.target.value).then((data) => setMovieResults(data));
    }
  };

  return (
    <StyledSection>
      <h2>Sök efter film!</h2>
      <TextInput onChange={handleChange} />
      <MovieList movies={movieResults} addMovie={props.addMovie} />
    </StyledSection>
  );
};

export default AddMovie;*/


/*import Movie from "./Movie";
import { StyledMovieList, StyledMovieSection } from "./styles";

const MovieList = (props) => {
  return (
    <StyledMovieSection>
      {props.type === "list" && <h2>Mina filmer</h2>}
      {props.movies?.length ? (
        <StyledMovieList>
          <li>
            {props.movies.map((movie, index) => {
              return (
                <Movie
                  key={movie.Title + index}
                  index={index}
                  title={movie.Title}
                  removeMovie={props.removeMovie}
                  addMovie={props.addMovie}
                  type={props.type}
                  posterHref={movie.Poster}
                />
              );
            })}
          </li>
        </StyledMovieList>
      ) : (
        <h2>Inga filmer hittade!</h2>
      )}
    </StyledMovieSection>
  );
};

export default MovieList;
*/

/*import { StyledHeader } from "./styles";

const Header = () => {
    return (
        <StyledHeader>
            <h1>Labb6</h1>
            <p></p>
        </StyledHeader>
    );
}

export default Header;*/

/*import { StyledButton } from "./styles";

const Button = (props) => {
  return (
    <StyledButton onClick={() => props.handleClick()} color={props.color}>
      {props.text}
    </StyledButton>
  );
};

export default Button;*/

/*const getMovieData = (movieTitle) => {
    const url = `https://www.omdbapi.com/?s=${movieTitle}&type=movie&apikey=${process.env.NEXT_PUBLIC_OMDB_KEY}`;

    const movieData = fetch(url)
        .then((response) => response.json())
        .then((data) => {
            return data.Search;
        })
        .catch((error) => {
            console.error(error);
        });

    return movieData;
};

export default getMovieData;*/

/*import Button from "../../Button";
import { StyledMovie, StyledImage } from "./styles";

const Movie = (props) => {
  return (
    <StyledMovie>
      <StyledImage src={props.posterHref} alt={props.title} />
      <p>{props.title}</p>
      <Button
        text={props.type === "list" ? "Ta bort" : "Lägg till"}
        color={props.type === "list" ? "red" : "green"}
        handleClick={() => {
          props.type === "list"
            ? props.removeMovie(props.index)
            : props.addMovie({ Title: props.title, Poster: props.posterHref });
        }}
      />
    </StyledMovie>
  );
};

export default Movie;
*/
/*import React from "react";

const Movie = ({ movie }) => {
  return (
    <div className="movie">
      <div>
        <p>{movie.Year}</p>
      </div>
      <div>
        <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://picsum.photos/200/300'} alt={movie.Title} />
      </div>
      <div>
        <span>{movie.Title}</span>
      </div></div>
  );
}

export default Movie;*/