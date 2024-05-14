import { useState } from "react";
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

export default AddMovie;