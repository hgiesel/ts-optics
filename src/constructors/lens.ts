import type { Tuple } from "../types";
import type { Strong } from "../profunctors";
import type { Optic } from "./optic";

export type Lens<S, T, A, B> = Optic<S, T, A, B, Strong>;

export default <S, T, A, B>(
  getter: (s: S) => A,
  setter: (vals: Tuple<S, B>) => T,
): Lens<S, T, A, B> => <D extends Strong>(
  dict: D,
  pab: (a: A) => B,
): ((s: S) => T) => {
  const f0 = (s: S): Tuple<A, S> => [getter(s), s];
  const f1 = (vals: Tuple<B, S>) => setter([vals[1], vals[0]]);
  const f2 = dict.firstStrong(pab);

  return dict.dimap(f0, f1, f2);
};
