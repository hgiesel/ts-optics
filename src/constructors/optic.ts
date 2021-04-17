import type { Profunctor } from "../profunctors";

export type Optic<S, T, A, B, P extends Profunctor> = (
  dict: P,
  pab: (a: A) => B
) => (s: S) => T;
