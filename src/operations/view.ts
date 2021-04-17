import type { Lens } from "../constructors";

import { instanceForget } from "../profunctors";
import run from "./run";

export default <S, A>(optics: Lens<S, S, A, A>[]) =>
  run(optics, instanceForget, (a: A): A => a);
