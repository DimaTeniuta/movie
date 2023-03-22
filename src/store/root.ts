import { makeAutoObservable } from 'mobx';
import Movies from './movies';
import Sort from './sortMovies';

class RootStore {
  movies = new Movies();
  sortMovies = new Sort();

  constructor() {
    makeAutoObservable(this);
  }
}

export const store = new RootStore();
