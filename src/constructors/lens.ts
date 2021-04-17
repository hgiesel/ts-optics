import type { Tuple } from "../types";
import dict from "../profunctors/functions";

export default <S, T, A, B>(
  getter: (s: S) => A,
  setter: (vals: Tuple<S, B>) => T,
  pab: (a: A) => B
) => {
  const f0 = (s: S): Tuple<A, S> => [getter(s), s];
  const f1 = (vals: Tuple<B, S>) => setter([vals[1], vals[0]]);
  const f2 = dict.firstStrong(pab);
  return dict.dimap(f0, f1, f2);
};
