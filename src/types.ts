export type Unit = typeof unit;
export const unit = Symbol("unit");

export type Left<L, _R> = [false, L];
export type Right<_L, R> = [true, R];
export type Either<L, R> = Left<L, R> | Right<L, R>;

export const isRight = <F, S>(either: Either<F, S>): either is Right<F, S> =>
  either[0];
export const isLeft = <F, S>(either: Either<F, S>): either is Left<F, S> =>
  !either[0];

export type Tuple<F, S> = [F, S];

export type Some<T> = [T];
export type None = [];
export type Optional<T> = Some<T> | None;

export const isSome = <T>(optional: Optional<T>): optional is Some<T> =>
  Boolean(optional.length);
export const isNone = <T>(optional: Optional<T>): optional is None =>
  !Boolean(optional.length);

export type Equals<T, S> = [T] extends [S]
  ? [S] extends [T]
    ? true
    : false
  : false;
