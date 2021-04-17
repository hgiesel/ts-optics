import type { Lens } from "../constructors";

import { instanceForget } from "../profunctors";

export default <S, A>(optic: Lens<S, S, A, A>) =>
  optic(instanceForget, (a: A): A => a);
