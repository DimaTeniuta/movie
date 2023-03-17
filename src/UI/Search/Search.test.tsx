import React, { useState } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Search } from './Search';

const MockFuncComp = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event?.target.value);
  };

  return <Search value={searchValue} onChange={handleChangeSearch} />;
};

describe('Search', () => {
  it('renders search', () => {
    render(<MockFuncComp />);
    expect(screen.getByPlaceholderText(/search/i)).toBeInTheDocument();
  });

  it('change value', () => {
    render(<MockFuncComp />);
    const input = screen.getByPlaceholderText(/search/i);
    const testValue = 'test';
    userEvent.type(input, testValue);
    expect(screen.getByDisplayValue(testValue)).toBeInTheDocument();
    userEvent.clear(input);
    expect(input).toHaveValue('');
  });
});
