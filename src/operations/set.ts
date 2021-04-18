import type { Profunctor } from "../profunctors";
import type { Optic } from "../constructors";

import over from "./over";

export default <S, T, A, B, P extends Profunctor>(
  optic: Optic<S, T, A, B, P>,
  b: B,
) => over(optic, () => b);
