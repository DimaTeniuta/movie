import { makeAutoObservable } from 'mobx';
import { fetchMovies } from '../API/fetchMovies';
import { IMovie, IMovieResult } from '../types/movie';
import { FlowReturnFetchMovies } from './types';

class Movies {
  movies: IMovie = { page: 0, results: [], total_pages: 0, total_results: 0 };
  movie: IMovieResult | null = null;
  page = 1;
  searchQuery = 'popular';
  isLoading = false;

  public constructor() {
    makeAutoObservable(this);
  }

  public setMovie(value: IMovieResult) {
    this.movie = value;
  }

  public setSearchQuery(value: string) {
    this.searchQuery = value;
  }

  public setPage(value: number) {
    this.page = value;
  }

  public *fetchMovies(): FlowReturnFetchMovies<typeof fetchMovies> {
    try {
      this.isLoading = true;
      const result = yield fetchMovies(this.page, this.searchQuery);
      this.movies = result;
    } catch (error) {
      console.error('fetchMovies', error);
    } finally {
      this.isLoading = false;
    }
  }
}

export default Movies;
