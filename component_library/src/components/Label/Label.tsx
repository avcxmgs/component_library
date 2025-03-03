import React from 'react';
import styled from 'styled-components';
import { LabelProps } from './Label.types';

const StyledLabel = styled.label<{}>`
  background-color: pink;
  color: white;
  font-size: 16px;
  padding: 8px 16px;
`;

const Label = (props: LabelProps) => {
    return <StyledLabel>{props.htmlFor}</StyledLabel>;
};

export default Label;