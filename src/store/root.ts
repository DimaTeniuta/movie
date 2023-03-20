import { makeAutoObservable } from 'mobx';
import Movies from './movies';

class RootStore {
  movies = new Movies();

  constructor() {
    makeAutoObservable(this);
  }
}

export const store = new RootStore();
