import { render, screen } from '@testing-library/react';
import React from 'react';
import { Card } from './Card';

const mockData = {
  backdrop_path: 'https://image.tmdb.org/t/p/w500/9Rq14Eyrf7Tu1xk0Pl7VcNbNh1n.jpg',
  title: 'Test',
};

describe('Card', () => {
  it('render', () => {
    render(<Card image={mockData.backdrop_path}>{mockData.title}</Card>);
    expect(screen.queryByText('Test')).toBeInTheDocument();
    expect(screen.getByAltText('image')).toBeInTheDocument();
  });
});
