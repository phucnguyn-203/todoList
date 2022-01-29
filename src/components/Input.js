import React from 'react';
import styled from 'styled-components';


const InputForm = styled.input`
    width: 100%;
    padding: 10px 20px;
    font-size: 16px;
    outline: none;
    border-radius: 5px;
    border: 1px solid #ccc; 
    
    &:focus {
        border-color: #80bdff;
    }
`


const Input = (props) => {
    return <InputForm
        value={props.value}
        type={props.type}
        placeholder={props.placeholder}
        onChange={props.onChange}
        ref={props.inputRef}
    />;
};

export default Input;