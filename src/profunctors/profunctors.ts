import { Tuple, Either } from "../types";

export interface Profunctor {
  dimap: <A, B, C, D>(
    l: (a: A) => B,
    r: (c: C) => D,
    f: (b: B) => C
  ) => (a: A) => unknown;
}

export interface Strong {
  firstStrong: <A, B, C>(f: (a: A) => B) => (tuple: Tuple<A, C>) => unknown;
}

export interface Choice {
  rightChoice: <A, B, C>(f: (a: A) => B) => (either: Either<C, A>) => unknown;
}
