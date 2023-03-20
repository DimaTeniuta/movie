import { CardMedia } from '@mui/material';
import React from 'react';
import * as Styled from './Card.styles';
import { ICardProps } from './Card.types';

export const Card = ({ image, children, onClick, rating }: ICardProps) => {
  return (
    <Styled.Wrapper>
      <CardMedia
        onClick={onClick}
        sx={Styled.cardMediaStyles}
        component="img"
        height={310}
        width={217}
        image={image}
        alt={children as string}
      />
      <Styled.Rating onClick={onClick}>{rating.toFixed(2)}</Styled.Rating>
      <Styled.Text>{children}</Styled.Text>
    </Styled.Wrapper>
  );
};
