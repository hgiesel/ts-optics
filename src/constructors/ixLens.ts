import type { Tuple } from "../types";
import lens, { Lens } from "./lens";

/***** Lens [a] a *****/
export default <S extends A[], A>(index: number): Lens<S, S, A, A> => {
  const getter = (vals: S): A => {
    return vals[index];
  };

  const setter = (vals: Tuple<S, A>): S => {
    const newVals = vals[0].slice();
    newVals[index] = vals[1];
    return newVals as S;
  };

  return lens(getter, setter);
};
