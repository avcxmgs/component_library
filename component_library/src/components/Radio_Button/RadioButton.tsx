import React from 'react';
import styled from 'styled-components';
import { RadioButtonProps } from './RadioButton.types';

const StyledRadioButton = styled.input<RadioButtonProps>`
  background-color: ${({ disabled }) => (disabled ? 'gray' : 'pink')};
  color: white;
  font-size: 16px;
  border: none;
  padding: 8px 16px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`;

const RadioButton: React.FC<RadioButtonProps> = ({label, name, checked, disabled}) => {
    return <StyledRadioButton label={label} name={name} checked={checked} disabled={disabled}></StyledRadioButton>;
};

export default RadioButton;