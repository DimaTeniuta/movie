import { Typography } from '@mui/material';
import Pagination from '@mui/material/Pagination';
import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BoxWrapper } from '../../components/BoxWrapper';
import { Card } from '../../components/Card';
import { store } from '../../store/root';
import { IMovieResult } from '../../types/movie';
import { Spinner } from '../../UI/Spinner';
import { sortMovies } from './helpers/sort';
import * as Styled from './Movies.styles';

const API_IMG = 'https://image.tmdb.org/t/p/w500/';

export const Movies = observer(() => {
  const navigate = useNavigate();

  const data = sortMovies(
    store.movies.movies.results,
    store.sortMovies.rating[0],
    store.sortMovies.rating[1]
  );

  useEffect(() => {
    store.movies.fetchMovies();
  }, []);

  const handleChangePage = async (_: React.ChangeEvent<unknown>, value: number) => {
    store.movies.setPage(value);
    store.movies.fetchMovies();
  };

  const handleCardClick = (movie: IMovieResult) => {
    return () => {
      store.movies.setMovie(movie);
      navigate(`/movie/${movie.id}`);
    };
  };

  return (
    <BoxWrapper sx={{ position: 'relative' }}>
      <Styled.WrapCard>
        {data?.length ? (
          data.map((movie) => (
            <Card
              image={API_IMG + movie.poster_path}
              key={movie.id}
              onClick={handleCardClick(movie)}
              rating={movie.popularity}
            >
              {movie.title}
            </Card>
          ))
        ) : (
          <Typography sx={{ color: 'primary.contrastText' }}>There is no data</Typography>
        )}
        {store.movies.isLoading && <Spinner />}
      </Styled.WrapCard>

      {store.movies.movies.results && (
        <Styled.WrapPagination>
          <Pagination
            count={store.movies.movies?.total_pages}
            variant="outlined"
            disabled={store.movies.isLoading}
            sx={Styled.paginationStyles}
            color="secondary"
            page={store.movies.page}
            onChange={handleChangePage}
          />
        </Styled.WrapPagination>
      )}
    </BoxWrapper>
  );
});
