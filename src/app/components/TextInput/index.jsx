import StyledInput from "./styles";

const TextInput = (props) => {
    return (
        <StyledInput onChange={props.onChange} type='text' placeholder="Sök film..." />
    );
}


export default TextInput;