import type { Either, Tuple } from "../types";
import affineTraversing, { AffineTraversal } from "./affineTraversing";

/***** AffineTraversal {[k]: a} a *****/
export default <S extends {}, A>(
  name: string | number | symbol,
): AffineTraversal<S, S, A, A> => {
  const getter = (obj: S): Either<S, A> => {
    return Object.prototype.hasOwnProperty.call(obj, name)
      ? [true, obj[name]]
      : [false, obj];
  };

  const setter = ([obj, val]: Tuple<S, A>): S => {
    const newVals = { ...obj };
    newVals[name] = val;
    return newVals as S;
  };

  return affineTraversing(getter, setter);
};
