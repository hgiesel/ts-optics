import type { Either, Tuple } from "../types";
import { isLeft } from "../types";
import dict from "../profunctors/functions";

export default <S, T, A, B>(
  getter: (s: S) => Either<T, A>,
  setter: (vals: Tuple<S, B>) => T,
  pab: (a: A) => B
) => {
  const f0 = (s: S): Tuple<Either<T, A>, S> => [getter(s), s];
  const f1 = (vals: Tuple<Either<T, B>, S>): T =>
    isLeft(vals[0]) ? vals[0][1] : setter([vals[1], vals[0][1]]);
  const f2 = dict.firstStrong(dict.rightChoice(pab));
  return dict.dimap(f0, f1, f2);
};
