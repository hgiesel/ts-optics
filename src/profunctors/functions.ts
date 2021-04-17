import { Tuple, Either, isRight } from "../types";
import { Profunctor, Strong, Choice } from "./profunctors";

const dimap = <A, B, C, D>(
  l: (a: A) => B,
  r: (c: C) => D,
  f: (b: B) => C
): ((a: A) => D) => (a: A): D => r(f(l(a)));

const firstStrong = <A, B, C>(f: (a: A) => B) => (
  tuple: Tuple<A, C>
): Tuple<B, C> => [f(tuple[0]), tuple[1]];

const rightChoice = <A, B, C>(f: (a: A) => B) => (
  either: Either<C, A>
): Either<C, B> =>
  isRight(either) ? [true, f(either[1])] : [false, either[1]];

export default new (class implements Profunctor, Strong, Choice {
  dimap = dimap;
  firstStrong = firstStrong;
  rightChoice = rightChoice;
})();
