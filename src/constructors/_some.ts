import { Optional, Either, Unit, unit, isNone } from "../types";
import prism from "./prism";

// prism(
//     <A>(m: Optional<A>): Either<Unit, A> => isNone(m) ? [false, unit] : [true, m[0]],
//     <S>(s: S):
// )
