import { Tuple, Either, isRight, Equals } from "../types";
import { Strong, Choice } from "./profunctors";

const unit = Symbol("unit");
type Unit = typeof unit;

/***** (Forget r) *****/

const lmap = <T, U, S>(l: (s: S) => T, f: (t: T) => U) => (s: S): U => f(l(s));

const dimap = <T, U, S, V extends Equals<U, V>>(
  l: (s: S) => T,
  _r: (u: U) => V,
  f: (t: T) => U
) => lmap(l, f);

const firstStrong = <A, B, C>(f: (a: A) => B) => (tuple: Tuple<A, C>): B =>
  f(tuple[0]);

const rightChoice = <A, B, C>(f: (a: A) => B) => (
  either: Either<C, A>
): Either<Unit, B> => (isRight(either) ? [true, f(either[1])] : [false, unit]);

export default new (class implements Strong, Choice {
  dimap = dimap as any;
  firstStrong = firstStrong as any;
  rightChoice = rightChoice as any;
})();
