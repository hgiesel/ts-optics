import { Either, isLeft } from "../types";
import type { Choice } from "../profunctors";
import type { Optic } from "./optic";

export type Prism<S, T, A, B> = Optic<S, T, A, B, Choice>;

export default <S, T, A, B>(
  build: (b: B) => T,
  match: (s: S) => Either<T, A>,
): Prism<S, T, A, B> => <D extends Choice>(
  dict: D,
  pab: (a: A) => B,
): ((s: S) => T) => {
  const f0 = (tb: Either<T, B>): T => (isLeft(tb) ? tb[1] : build(tb[1]));
  const f1 = dict.rightChoice(pab);
  return dict.dimap(match, f0, f1);
};
