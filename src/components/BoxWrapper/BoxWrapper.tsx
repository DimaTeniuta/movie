import React from 'react';
import * as Styled from './BoxWrapper.styles';
import { IBoxProps } from './BoxWrapper.types';

export const BoxWrapper = ({ children, ...props }: IBoxProps) => {
  return <Styled.Paper {...props}>{children}</Styled.Paper>;
};
