import type { Profunctor } from "../profunctors";
import type { Optic } from "../constructors";

export default <S, T, A, B, P extends Profunctor>(
  optics: Optic<S, T, A, B>[],
  dict: P,
  f: (a: A) => B
) => {
  return optics
    .reverse()
    .reduce((accu: any, optic: any) => optic(dict, accu), f);
};
