import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Box } from '@mui/material';
import { Search } from './Search';

export default {
  title: 'Search',
  component: Search,
} as ComponentMeta<typeof Search>;

const Template: ComponentStory<typeof Search> = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event?.target.value);
  };

  return (
    <Box sx={{ maxWidth: 300 }}>
      <Search value={searchValue} onChange={handleChangeSearch} />
    </Box>
  );
};

export const Default = Template.bind({});
