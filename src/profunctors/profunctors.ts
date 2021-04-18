import { Tuple, Either } from "../types";

export interface Profunctor {
  dimap: <T, U, S, V>(
    l: (s: S) => T,
    r: (u: U) => V,
    f: (t: T) => U,
  ) => (s: S) => V;
}

/***** First ~ Second *****/

type First = <A, B, T>(f: (a: A) => B) => (tuple: Tuple<A, T>) => Tuple<B, T>;
type Second = <A, T, U>(f: (t: T) => T) => (tuple: Tuple<A, T>) => Tuple<A, U>;

export interface Bifunctor {
  bimap: <A, B, T, U>(
    f: (a: A) => B,
    g: (t: T) => U,
  ) => (tuple: Tuple<A, T>) => Tuple<B, U>;
  first?: First;
  second?: Second;
}

export interface Strong extends Profunctor {
  firstStrong: First;
  secondstrong?: Second;
}

/***** Right ~ Left *****/

type Right = <T, U, E>(
  f: (t: T) => U,
) => (either: Either<E, T>) => Either<E, U>;
type Left = <T, U, E>(f: (t: T) => U) => (either: Either<T, E>) => Either<U, E>;

export interface Bicontravariant {
  cimap: <T, U, E>(f: (t: T) => U) => (either: Either<E, T>) => Either<E, U>;
  left?: Left;
  right?: Right;
}

export interface Choice extends Profunctor {
  rightChoice: Right;
  leftChoice?: Left;
}

/***** Traversing *****/

type Wander = <S, T, A, B>(
  f: (f_: (a: A) => B[], s: S) => T[],
) => (g: (a: A) => B) => (s: S) => T;
type Traverse = <T, U>(f: (t: T) => U) => (ts: T[]) => U[];

export interface Traversing1 extends Strong {
  wander1: Wander;
  traverse1?: Traverse;
}

export interface Traversing extends Traversing1, Choice {
  wander: Wander;
  traverse?: Traverse;
}
