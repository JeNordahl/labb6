const TextInput = (props) => {
    return (
        <input onChanged={props.onChanged}
            type='text' placeholder="Sök film..." />
    );
}

export default TextInput;