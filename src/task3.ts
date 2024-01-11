import { First } from './task2';

export type Flatten<T extends unknown[]> = T extends [First<T>, ...infer Rest]
  ? First<T> extends unknown[]
    ? [...Flatten<First<T>>, ...Flatten<Rest>]
    : [First<T>, ...Flatten<Rest>]
  : [];
