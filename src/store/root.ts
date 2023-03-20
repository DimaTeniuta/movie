import { makeAutoObservable } from 'mobx';
import Movies from './movies';

class RootStore {
  movies = new Movies();

  constructor() {
    makeAutoObservable(this);
  }
}

// export type { RootStore };
export const store = new RootStore();
