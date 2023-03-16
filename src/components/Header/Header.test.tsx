import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { Header } from './Header';

describe('Header', () => {
  it('render separate page', () => {
    render(<Header />);
    expect(screen.getByTestId('cardPage-test')).toBeInTheDocument();
  });
});
