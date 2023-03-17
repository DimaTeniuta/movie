import Container from '@mui/material/Container';
import React from 'react';
import { Movies } from '../modules/Movies/Movies';
import { SearchPanel } from '../modules/SearchPanel';

const MoviePage = () => {
  return (
    <Container maxWidth="xl" sx={{ display: 'flex', columnGap: 2, padding: 2 }}>
      <SearchPanel />
      <Movies />
    </Container>
  );
};

export default MoviePage;
