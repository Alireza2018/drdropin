import React from "react";
import styled from "styled-components";

const Wrapper = styled.button`
    position: relative;
    background: #4fd4c6;
    color: #22504e;
    border-radius: 30px;
    padding: 16px 32px;
    display: inline-block;
    cursor: pointer;
    border: none;
    outline: none;
    font-size: 16px;
`;

const Button = ({ onClick, children, ...props }) => {
    return (
        <Wrapper onClick={onClick}>{children}</Wrapper>
    )
};

export default Button;