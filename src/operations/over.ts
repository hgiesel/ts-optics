import type { Profunctor } from "../profunctors";
import type { Optic } from "../constructors";

import { instanceFunction } from "../profunctors";

export default <S, T, A, B, P extends Profunctor>(
  optic: Optic<S, T, A, B, P>,
  f: (a: A) => B
) => optic(instanceFunction as any, f);
