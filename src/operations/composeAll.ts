import type { Profunctor } from "../profunctors";
import type { Optic } from "../constructors";

import compose from "./compose";

export default <S, P extends Profunctor>(
  ...os: Optic<S, S, S, S, P>[]
): Optic<S, S, S, S, P> => os.reduce(compose);
