import { Container } from '@mui/material';
import React from 'react';
import { BoxWrapper } from '../../components/BoxWrapper';
import { store } from '../../store';

export const MovieInfo = () => {
  return (
    <Container maxWidth="xl" sx={{ pt: 3 }}>
      <BoxWrapper
        sx={{
          width: '100',
          height: '100',
          backgroundImage: `url(https://image.tmdb.org/t/p/w500/${store.movies.movie
            ?.backdrop_path || store.movies.movie?.poster_path})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          filter: 'blur(5px)',
        }}
      >
        MovieInfo
      </BoxWrapper>
    </Container>
  );
};
