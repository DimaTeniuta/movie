import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { store } from '../../store';
import { SearchPanel } from './SearchPanel';

describe('SearchPanel', () => {
  it('change value', async () => {
    render(<SearchPanel />);
    const input = screen.getByPlaceholderText(/search/i);
    const testValue = 'test';
    act(() => {
      userEvent.type(input, testValue);
    });
    expect(screen.getByDisplayValue(testValue)).toBeInTheDocument();
    act(() => {
      userEvent.clear(input);
    });
    expect(input).toHaveValue('');
  });

  it('set value in store', async () => {
    render(<SearchPanel />);
    const input = screen.getByPlaceholderText(/search/i);
    const testValue = 'test';
    act(() => {
      userEvent.type(input, testValue);
    });
    const button = screen.getByRole('button');
    act(() => {
      userEvent.click(button);
    });
    expect(store.movies.searchQuery).toBe(testValue);
  });
});
