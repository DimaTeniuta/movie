import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Typography } from '@mui/material';
import { BoxWrapper } from '../../components/BoxWrapper';
import { SubmitButton } from '../../UI/SubmitButton';
import { Search } from '../../UI/Search';
import { store } from '../../store/root';
import { RangeSlider } from '../../UI/RangeSlider';
import { Select } from '../../UI/Select';
import * as Styled from './SearchPanel.styles';

export const SearchPanel = observer(() => {
  const [searchValue, setSearchValue] = useState('');

  const handleChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event?.target.value);
  };

  const handleRatingChange = (newValue: number | number[]) => {
    store.sortMovies.setRating(newValue as number[]);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    store.movies.setSearchQuery(searchValue);
    store.movies.fetchMovies();
  };

  return (
    <BoxWrapper sx={{ maxWidth: 400 }}>
      <form onSubmit={handleSubmit}>
        <Styled.WrapContent>
          <Search value={searchValue} onChange={handleChangeSearch} />
          <SubmitButton>Search</SubmitButton>

          <Styled.WrapSlider>
            <Typography sx={{ color: 'primary.contrastText' }}>Rating:</Typography>
            <RangeSlider
              value={store.sortMovies.rating}
              onChange={handleRatingChange}
              min={0}
              max={10}
            />
          </Styled.WrapSlider>

          <Select />
        </Styled.WrapContent>
      </form>
    </BoxWrapper>
  );
});
