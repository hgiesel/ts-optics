import { Either, Tuple } from "../types";
import affineTraversal from "../constructors/affineTraversal";

/***** AffineTraversal [a] a *****/
export default <S extends A[], A>(
  index: number
): ((f: (a: A) => A) => (s: S) => S) => {
  const getter = (vals: S): Either<S, A> => {
    return typeof vals[index] !== "undefined"
      ? [true, vals[index]]
      : [false, vals];
  };

  const setter = (vals: Tuple<S, A>): S => {
    const newVals = vals[0].slice();
    newVals[index] = vals[1];
    return newVals as S;
  };

  return (f: (a: A) => A): ((s: S) => S) => affineTraversal(getter, setter, f);
};
