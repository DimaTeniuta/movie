import React from 'react';
import * as Styled from './Card.styles';
import { ICardProps } from './Card.types';

export const Card = ({ image, children }: ICardProps) => {
  return (
    <Styled.Wrapper>
      <img style={{ width: '217px', height: '310px', borderRadius: 16 }} src={image} />
      <Styled.Text>{children}</Styled.Text>
    </Styled.Wrapper>
  );
};
