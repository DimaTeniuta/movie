import Pagination from '@mui/material/Pagination';
import { observer } from 'mobx-react-lite';
import React, { useEffect, useState } from 'react';
import { BoxWrapper } from '../../components/BoxWrapper';
import { Card } from '../../components/Card';
import { store } from '../../store/root';
import { IMovie } from '../../types/movie';
import { Spinner } from '../../UI/Spinner';
import * as Styled from './Movies.styles';

const API_IMG = 'https://image.tmdb.org/t/p/w500/';

export const Movies = observer(() => {
  // const [data, setData] = useState<IMovie | undefined>();
  // const [page, setPage] = useState(1);
  const data = store.movies.movies;
  const page = store.movies.page;
  console.log(data);

  useEffect(() => {
    store.movies.fetchMovies();
  }, []);

  // useEffect(() => {
  //   fetch(
  //     'https://api.themoviedb.org/3/movie/popular?api_key=db2a4c48afddc2ca40ced287915ab169&query=popular&page=1'
  //   )
  //     .then((res) => res.json())
  //     .then((data) => setData(data))
  //     .catch((err) => console.error(err));
  // }, []);

  // const handleChangePage = async (_: React.ChangeEvent<unknown>, value: number) => {
  //   setPage(value);
  //   fetch(
  //     `https://api.themoviedb.org/3/movie/popular?api_key=db2a4c48afddc2ca40ced287915ab169&query=popular&page=${value}`
  //   )
  //     .then((res) => res.json())
  //     .then((data) => setData(data))
  //     .catch((err) => console.error(err));
  // };

  const handleChangePage = async (_: React.ChangeEvent<unknown>, value: number) => {
    store.movies.setPage(value);
    store.movies.fetchMovies();
  };

  return (
    <BoxWrapper sx={{ position: 'relative' }}>
      <Styled.WrapCard>
        {data?.results.length ? (
          data.results.map((movie) => (
            <Card image={API_IMG + movie.poster_path} key={movie.id}>
              {movie.title}
            </Card>
          ))
        ) : (
          <Spinner />
        )}
      </Styled.WrapCard>

      {data?.results.length && (
        <Styled.WrapPagination>
          <Pagination
            count={data?.total_pages}
            variant="outlined"
            disabled={store.movies.isLoading}
            sx={{
              '& .MuiPaginationItem-root': {
                color: 'primary.contrastText',
                borderColor: 'primary.contrastText',
              },
            }}
            color="secondary"
            page={page}
            onChange={handleChangePage}
          />
        </Styled.WrapPagination>
      )}
    </BoxWrapper>
  );
});
