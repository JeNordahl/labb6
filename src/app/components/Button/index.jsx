import { StyledButton } from "./styles";

const Button = (props) => {
  return (
    <StyledButton onClick={() => props.handleClick()} color={props.color}>
      {props.text}
    </StyledButton>
  );
};

export default Button;