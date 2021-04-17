import { Tuple, Either } from "../types";

export interface Profunctor<T, U> {
  dimap: <S, V>(l: (s: S) => T, r: (u: U) => V, f: (t: T) => U) => (s: S) => V;
}

export interface Strong<T, U> extends Profunctor<T, U> {
  firstStrong: <E>(f: (t: T) => U) => (tuple: Tuple<T, E>) => Tuple<U, E>;
}

export interface Choice<T, U> extends Profunctor<T, U> {
  rightChoice: <E>(f: (t: T) => U) => (either: Either<E, T>) => Either<E, U>;
}
