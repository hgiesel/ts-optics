import type { Tuple } from "../types";
import lens, { Lens } from "./lens";

/***** Lens [a] a *****/
export default <S extends A[], A>(index: number): Lens<S, S, A, A> => {
  const getter = (vals: S): A => {
    return vals[index];
  };

  const setter = ([vals, val]: Tuple<S, A>): S => {
    const newVals = [...vals];
    newVals[index] = val;
    return newVals as S;
  };

  return lens(getter, setter);
};
