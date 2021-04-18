import type { Tuple } from "../types";
import lens, { Lens } from "./lens";

/***** Lens [a] a *****/
export default <S extends {}, A>(
  name: string | number | symbol,
): Lens<S, S, A, A> => {
  const getter = (obj: S): A => {
    return obj[name];
  };

  const setter = ([obj, val]: Tuple<S, A>): S => {
    const newVals = { ...obj };
    newVals[name] = val;
    return newVals as S;
  };

  return lens(getter, setter);
};
