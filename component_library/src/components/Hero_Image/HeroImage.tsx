import React from 'react';
import styled from 'styled-components';
import { HeroImageProps } from './HeroImage.types';

const StyledHeroImage = styled.img<{disabled?: boolean, src?: string}>`
  height: 50%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${({ src }) => (src)});
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`;

const StyledHeroText = styled.div<{disabled?: boolean}>`
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  color: ${({ disabled }) => (disabled ? 'gray' : 'white')};
`;

const HeroImage: React.FC<HeroImageProps> = ({src, alt, text, disabled}) => {
    return ( <StyledHeroImage src={src} alt={alt} disabled={disabled}>
        <StyledHeroText disabled={disabled}>{text}</StyledHeroText>
        </StyledHeroImage>
    );
};

export default HeroImage;