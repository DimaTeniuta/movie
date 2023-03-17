import { CardMedia } from '@mui/material';
import React from 'react';
import * as Styled from './Card.styles';
import { ICardProps } from './Card.types';

export const Card = ({ image, children }: ICardProps) => {
  return (
    <Styled.Wrapper>
      <CardMedia component="img" height={310} width={217} image={image} alt="img" />
      <Styled.Text>{children}</Styled.Text>
    </Styled.Wrapper>
  );
};
