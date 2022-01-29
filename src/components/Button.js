import React from 'react';
import styled from 'styled-components';

const Btn = styled.button`
    margin-left: 15px;
    padding: 12px 20px;
    font-size: 15px;
    outline: none;
    border: none;
    border-radius: 5px;
    background-color: ${props => props.bgColor || 'none'};
    color: #fff;
    cursor: pointer;

    &:hover {
        opacity: .75;
    }
`

const Button = (props) => {

    return <Btn
        onClick={props.onClick}
        bgColor={props.bgColor}
    >
        {props.text}
    </Btn>;
};

export default Button;