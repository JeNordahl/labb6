
import Button from "../../Button";
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
