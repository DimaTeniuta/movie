import { render, screen } from '@testing-library/react';
import React from 'react';
import { Card } from './Card';

const mockPath = 'https://image.tmdb.org/t/p/w500/9Rq14Eyrf7Tu1xk0Pl7VcNbNh1n.jpg';

const mockClick = () => {};

describe('Card', () => {
  it('render', () => {
    render(
      <Card image={mockPath} onClick={mockClick} rating={8.2}>
        {'Test'}
      </Card>
    );
    expect(screen.queryByText('Test')).toBeInTheDocument();
    expect(screen.getByAltText('Test')).toBeInTheDocument();
  });
});
