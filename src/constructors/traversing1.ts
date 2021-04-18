import type { Strong, Traversing1 } from "../profunctors";
import type { Optic } from "./optic";

export type Traversal1<S, T, A, B> = Optic<S, T, A, B, Strong & Traversing1>;

export default <S, T, A, B>(
  traverse: (f: (a: A) => B[], s: S) => T[]
): Traversal1<S, T, A, B> => <D extends Strong & Traversing1>(
  dict: D,
  pab: (a: A) => B
): ((s: S) => T) => dict.wander1(traverse)(pab);
