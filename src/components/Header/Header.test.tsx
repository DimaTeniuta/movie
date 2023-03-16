import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../../App';

describe('Header', () => {
  it('route', async () => {
    render(<App />);
    const btnHome = screen.getByText(/home/i);
    const btnMovie = screen.getByText(/movie/i);
    expect(btnHome).toBeInTheDocument();
    expect(btnMovie).toBeInTheDocument();
    expect(btnHome).toHaveStyle('color: #F74346');
    userEvent.click(btnMovie);
    await waitFor(() => {
      expect(btnHome).not.toHaveStyle('color: #F74346');
      expect(btnMovie).toHaveStyle('color: #F74346');
    });
  });
});
