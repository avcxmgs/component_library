// import React from 'react';
import styled from 'styled-components';
import { ButtonProps } from './Button.types';

const StyledButton = styled.button<{}>`
  background-color: pink;
  color: white;
  font-size: 16px;
  padding: 8px 16px;
`;

const Button = (props: ButtonProps) => {
    return <StyledButton>{props.label}</StyledButton>;
};

export default Button;
export {};