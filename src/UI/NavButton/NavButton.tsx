import React from 'react';
import { NavLink } from 'react-router-dom';
import * as Styled from './NavButton.styles';
import { INavButtonProps } from './NavButton.types';

export const NavButton = ({ children, path, ...props }: INavButtonProps) => {
  return (
    <Styled.NavButton component={NavLink} to={path} {...props}>
      {children}
    </Styled.NavButton>
  );
};
