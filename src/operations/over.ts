import type { Profunctor } from "../profunctors";
import type { Optic } from "../constructors";

import { instanceFunction } from "../profunctors";
import run from "./run";

export default <S, T, A, B, P extends Profunctor>(
  optics: Optic<S, T, A, B, P>[],
  f: (a: A) => B
) => run<S, T, A, B, P>(optics, instanceFunction as any, f);
