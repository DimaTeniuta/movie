import { makeAutoObservable } from 'mobx';

class Sort {
  rating = [0, 10];

  public constructor() {
    makeAutoObservable(this);
  }

  setRating(value: number[]) {
    this.rating = value;
  }
}

export default Sort;
