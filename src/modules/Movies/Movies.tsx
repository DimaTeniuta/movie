import Box from '@mui/material/Box';
import React, { useEffect, useState } from 'react';
import { BoxWrapper } from '../../components/BoxWrapper';
import { Card } from '../../components/Card';
import { IMovie } from '../../types/movie';
import * as Styled from './Movies.styles';

const API_IMG = 'https://image.tmdb.org/t/p/w500/';

export const Movies = () => {
  const [data, setData] = useState<IMovie | undefined>();
  console.log(data);

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=db2a4c48afddc2ca40ced287915ab169')
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <BoxWrapper>
      {
        <Styled.WrapCard>
          {data &&
            data.results.map((movie) => (
              <Card image={API_IMG + movie.poster_path} key={movie.id}>
                {movie.title}
              </Card>
            ))}
        </Styled.WrapCard>
      }
    </BoxWrapper>
  );
};
