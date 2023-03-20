import { IMovie } from '../types/movie';

export type FlowReturnFetchMovies<
  AsyncFunction extends (page: number) => Promise<IMovie>
> = Generator<ReturnType<AsyncFunction>, void, Awaited<ReturnType<AsyncFunction>>>;
