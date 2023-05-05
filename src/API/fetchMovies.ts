import { IMovie } from '../types/movie';

export const fetchMovies = async (page: number, query: string): Promise<IMovie> => {
  return fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=db2a4c48afddc2ca40ced287915ab169&query=${query}&page=${page}`
  ).then((res) => res.json());
};
