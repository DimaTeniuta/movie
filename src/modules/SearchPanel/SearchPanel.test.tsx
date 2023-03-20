import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { store } from '../../store';
import { SearchPanel } from './SearchPanel';

describe('SearchPanel', () => {
  it('change value', () => {
    render(<SearchPanel />);
    const input = screen.getByPlaceholderText(/search/i);
    const testValue = 'test';
    userEvent.type(input, testValue);
    expect(screen.getByDisplayValue(testValue)).toBeInTheDocument();
    userEvent.clear(input);
    expect(input).toHaveValue('');
  });

  it('set value in store', () => {
    render(<SearchPanel />);
    const input = screen.getByPlaceholderText(/search/i);
    const testValue = 'test';
    userEvent.type(input, testValue);
    const button = screen.getByRole('button');
    userEvent.click(button);
    expect(store.movies.searchQuery).toBe(testValue);
  });
});
