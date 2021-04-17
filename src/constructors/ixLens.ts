import { Tuple } from "../types";
import lens from "./lens";

/***** Lens [a] a *****/
export default <S extends A[], A>(
  index: number
): ((f: (a: A) => A) => (s: S) => S) => {
  const getter = (vals: S): A => {
    return vals[index];
  };

  const setter = (vals: Tuple<S, A>): S => {
    const newVals = vals[0].slice();
    newVals[index] = vals[1];
    return newVals as S;
  };

  return (f: (a: A) => A): ((s: S) => S) => lens(getter, setter, f);
};
