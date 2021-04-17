import type { Profunctor } from "../profunctors";
import type { Optic } from "../constructors";

import over from "./over";

export default <S, T, A, B, P extends Profunctor>(
  optics: Optic<S, T, A, B, P>[],
  b: B
) => over(optics, () => b);
