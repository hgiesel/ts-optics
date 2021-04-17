import { Tuple, Either, isRight } from "../types";
import { Strong, Choice } from "./profunctors";

/***** (->) *****/

const dimap = <T, U, S, V>(l: (s: S) => T, r: (u: U) => V, f: (t: T) => U) => (
  s: S
): V => r(f(l(s)));

const firstStrong = <T, U, E>(f: (t: T) => U) => (
  tuple: Tuple<T, E>
): Tuple<U, E> => [f(tuple[0]), tuple[1]];

const rightChoice = <A, B, C>(f: (a: A) => B) => (
  either: Either<C, A>
): Either<C, B> =>
  isRight(either) ? [true, f(either[1])] : [false, either[1]];

export default new (class implements Strong, Choice {
  dimap = dimap;
  firstStrong = firstStrong;
  rightChoice = rightChoice;
})();
