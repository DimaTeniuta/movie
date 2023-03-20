import Pagination from '@mui/material/Pagination';
import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { BoxWrapper } from '../../components/BoxWrapper';
import { Card } from '../../components/Card';
import { store } from '../../store/root';
import { IMovieResult } from '../../types/movie';
import { Spinner } from '../../UI/Spinner';
import * as Styled from './Movies.styles';

const API_IMG = 'https://image.tmdb.org/t/p/w500/';

export const Movies = observer(() => {
  const data = store.movies.movies;
  const page = store.movies.page;
  console.log(data.results);

  useEffect(() => {
    store.movies.fetchMovies();
  }, []);

  const handleChangePage = async (_: React.ChangeEvent<unknown>, value: number) => {
    store.movies.setPage(value);
    store.movies.fetchMovies();
  };

  const handleCardClick = (movie: IMovieResult) => {
    return () => store.movies.setMovie(movie);
  };

  return (
    <BoxWrapper sx={{ position: 'relative' }}>
      <Styled.WrapCard>
        {data?.results.length ? (
          data.results.map((movie) => (
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
          <Spinner />
        )}
        {store.movies.isLoading && <Spinner />}
      </Styled.WrapCard>

      {data?.results.length && (
        <Styled.WrapPagination>
          <Pagination
            count={data?.total_pages}
            variant="outlined"
            disabled={store.movies.isLoading}
            sx={Styled.paginationStyles}
            color="secondary"
            page={page}
            onChange={handleChangePage}
          />
        </Styled.WrapPagination>
      )}
    </BoxWrapper>
  );
});
