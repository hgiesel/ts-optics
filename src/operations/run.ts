import type { Profunctor } from "../profunctors";
import type { Optic } from "../constructors";

export default <S, T, A, B, P extends Profunctor>(
  optics: Optic<S, T, A, B, P>[],
  dict: P,
  f: (a: A) => B
): ((s: S) => T) => {
  const evaluate = <X, Y>(
    accu: (x: X) => Y,
    optic: Optic<S, T, X, Y, P>
  ): ((s: S) => T) => optic(dict, accu);

  const reversed = optics.reverse();
  return reversed.reduce(evaluate as any, f) as any;
};
