import { IMovie } from '../types/movie';

export const fetchMovies = async (page: number): Promise<IMovie> => {
  return fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=db2a4c48afddc2ca40ced287915ab169&query=popular&page=${page}`
  ).then((res) => res.json());
};
