import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { store } from '../../store';
import { Movies } from './Movies';

const mockData = {
  page: 1,
  results: [
    {
      adult: false,
      backdrop_path: '/wsQWCwnPV3HmKUU4LD6CEdlc3OE.jpg',
      genre_ids: [1, 2],
      id: 442,
      original_language: 'sv',
      original_title: 'Populärmusik från Vittula',
      overview:
        'Matti and Niila, growing up in the mid-sixties in the harsh and conservative environment of a Finnish-speaking part of Tornedalen in Swedish Laponia, close to the Finnish border. Their big dream is to become rock stars. In the present the now grown-up Matti feels guilt for the death of his drug-addicted rock star friend Niila.',
      popularity: 3.465,
      poster_path: '/79nUxKn6kPagIOHcOMsev3UxT38.jpg',
      release_date: '2004-10-01',
      title: 'Popular Music',
      video: false,
      vote_average: 6.386,
      vote_count: 44,
    },
    {
      adult: false,
      backdrop_path: null,
      genre_ids: [1, 2],
      id: 941789,
      original_language: 'es',
      original_title: 'Por un orgasmo libre, colectivo y popular',
      overview:
        'November 25th, 2011. Participants of a demonstration against violence on women talk about their issues.',
      popularity: 0.6,
      poster_path: null,
      release_date: '',
      title: 'For a Free, Collective and Popular Orgasm',
      video: false,
      vote_average: 0,
      vote_count: 0,
    },
  ],
  totalPages: 5,
  total_results: 93,
};

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(mockData),
  })
) as jest.Mock;

describe('Movies', () => {
  it('render', async () => {
    await waitFor(() => {
      render(<Movies />);
    });
    expect(fetch).toBeCalledTimes(1);
  });
});
