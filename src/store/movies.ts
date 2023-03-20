import { makeAutoObservable } from 'mobx';
import { fetchMovies } from '../API/fetchMovies';
import { IMovie } from '../types/movie';
import { FlowReturnFetchMovies } from './types';

class Movies {
  movies: IMovie = { page: 1, results: [], total_pages: 1, total_results: 1 };
  page = 1;
  isLoading = false;

  constructor() {
    makeAutoObservable(this);
  }

  setPage(value: number) {
    this.page = value;
  }

  *fetchMovies(): FlowReturnFetchMovies<typeof fetchMovies> {
    try {
      this.isLoading = true;
      const result = yield fetchMovies(this.page);
      this.movies = result;
    } catch (error) {
      console.error('fetchMovies', error);
    } finally {
      this.isLoading = false;
    }
  }
}

export default Movies;
