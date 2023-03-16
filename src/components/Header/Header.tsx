import { AppBar } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import { NavButton } from '../../UI/NavButton';
import * as Styled from './Header.styles';

export const Header = () => {
  return (
    <AppBar>
      <Container maxWidth="xl">
        <Styled.ToolBar>
          <NavButton path="/">Home</NavButton>
          <NavButton path="/movie">Movie</NavButton>
        </Styled.ToolBar>
      </Container>
    </AppBar>
  );
};
