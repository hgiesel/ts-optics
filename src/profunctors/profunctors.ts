import { Tuple, Either } from "../types";

export interface Profunctor {
  dimap: <T, U, S, V>(
    l: (s: S) => T,
    r: (u: U) => V,
    f: (t: T) => U
  ) => (s: S) => V;
}

export interface Strong extends Profunctor {
  firstStrong: <T, U, E>(f: (t: T) => U) => (tuple: Tuple<T, E>) => Tuple<U, E>;
}

export interface Choice extends Profunctor {
  rightChoice: <T, U, E>(
    f: (t: T) => U
  ) => (either: Either<E, T>) => Either<E, U>;
}
