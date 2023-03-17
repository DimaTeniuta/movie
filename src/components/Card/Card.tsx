import { CardMedia } from '@mui/material';
import React from 'react';
import * as Styled from './Card.styles';
import { ICardProps } from './Card.types';

export const Card = ({ image, children }: ICardProps) => {
  return (
    <Styled.Wrapper>
      <CardMedia
        sx={{ borderRadius: 2, color: 'primary.contrastText' }}
        component="img"
        height={310}
        width={217}
        image={image}
        alt={children as string}
      />
      <Styled.Text>{children}</Styled.Text>
    </Styled.Wrapper>
  );
};
