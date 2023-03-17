import React, { useState } from 'react';
import { BoxWrapper } from '../../components/BoxWrapper';
import { Search } from '../../UI/Search';

export const SearchPanel = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event?.target.value);
  };

  return (
    <BoxWrapper sx={{ maxWidth: 400 }}>
      <Search value={searchValue} onChange={handleChangeSearch} />
    </BoxWrapper>
  );
};
