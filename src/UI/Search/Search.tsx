import React from 'react';
import { Search as SearchIcon } from '@mui/icons-material';
import { iSearchProps } from './Search.types';
import * as Styled from './Search.styles';

export const Search = ({ value, onChange }: iSearchProps) => {
  return (
    <Styled.SearchInput
      placeholder={'Search...'}
      InputProps={{ startAdornment: <SearchIcon /> }}
      size="small"
      inputProps={{ sx: { px: 1 } }}
      onChange={onChange}
      value={value}
    />
  );
};
