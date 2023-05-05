import React from 'react';
import * as Styled from './SubmitButton.styles';
import { IConfirmButtonProps } from './SubmitButton.types';

export const SubmitButton = ({ children, ...props }: IConfirmButtonProps) => {
  return (
    <Styled.ConfirmButton type="submit" variant="contained" {...props}>
      {children}
    </Styled.ConfirmButton>
  );
};
