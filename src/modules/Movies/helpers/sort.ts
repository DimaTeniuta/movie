import { IMovieResult } from '../../../types/movie';

export const sortMovies = (data: IMovieResult[], min: number, max: number) => {
  return data.filter((movie) => movie.popularity >= min && movie.popularity <= max);
};
