export type Left<L, _R> = [false, L];
export type Right<_L, R> = [true, R];
export type Either<L, R> = Left<L, R> | Right<L, R>;

export const isRight = <F, S>(either: Either<F, S>): either is Right<F, S> =>
  either[0];

export const isLeft = <F, S>(either: Either<F, S>): either is Left<F, S> =>
  !either[0];

export type Tuple<F, S> = [F, S];

export type Equals<T, S> = [T] extends [S]
  ? [S] extends [T]
    ? true
    : false
  : false;
