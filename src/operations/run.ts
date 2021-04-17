import type { Profunctor } from "../profunctors";
import type { Optic } from "../constructors";

export default <S, T, A, B, P extends Profunctor>(
  optic: Optic<S, T, A, B, P>,
  dict: P,
  f: (a: A) => B
): ((s: S) => T) => optic(dict, f);
