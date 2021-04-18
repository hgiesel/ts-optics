import type { Profunctor } from "../profunctors";
import type { Optic } from "../constructors";

export default <S, T, A, B, C, D, P extends Profunctor>(
  o1: Optic<A, B, C, D, P>,
  o2: Optic<S, T, A, B, P>,
): Optic<S, T, C, D, P> => {
  return (dict: P, pac: (c: C) => D) => o2(dict, o1(dict, pac));
};
