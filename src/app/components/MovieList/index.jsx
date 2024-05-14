
import Movie from "./Movie";
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
