/* eslint-disable import/no-unresolved */
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { act } from 'react-dom/test-utils';
import App from '../../App';
import 'jest-dom/extend-expect';

describe('Header', () => {
  it('render', async () => {
    render(<App />);
    const btnHome = await screen.findByText(/home/i);
    const btnMovie = await screen.findByText(/movie/i);
    await waitFor(() => {
      expect(btnHome).toBeInTheDocument();
      expect(btnMovie).toBeInTheDocument();
    });
  });
});
