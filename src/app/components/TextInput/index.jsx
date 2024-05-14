import StyledInput from "./styles";

const TextInput = (props) => {
    return (
        <StyledInput onChanged={props.onChanged}
            type='text' placeholder="Sök film..." />
    );
}

export default TextInput;