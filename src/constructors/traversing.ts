import type { Strong, Traversing } from "../profunctors";
import type { Optic } from "./optic";

export type Traversal<S, T, A, B> = Optic<S, T, A, B, Strong & Traversing>;

export default <S, T, A, B>(
  traverse: (f: (a: A) => B[], s: S) => T[]
): Traversal<S, T, A, B> => <D extends Strong & Traversing>(
  dict: D,
  pab: (a: A) => B
): ((s: S) => T) => dict.wander(traverse)(pab);
