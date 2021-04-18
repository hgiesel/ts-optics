import type { Either, Tuple } from "../types";
import affineTraversing, { AffineTraversal } from "./affineTraversing";

/***** AffineTraversal [a] a *****/
export default <S extends A[], A>(
  index: number
): AffineTraversal<S, S, A, A> => {
  const getter = (vals: S): Either<S, A> => {
    return typeof vals[index] !== "undefined"
      ? [true, vals[index]]
      : [false, vals];
  };

  const setter = ([vals, val]: Tuple<S, A>): S => {
    const newVals = vals.slice();
    newVals[index] = val;
    return newVals as S;
  };

  return affineTraversing(getter, setter);
};
