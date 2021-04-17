import type { Lens } from "./lens";
import type { AffineTraversal } from "./affineTraversal";

export type Optic<S, T, A, B> = Lens<S, T, A, B> | AffineTraversal<S, T, A, B>;
