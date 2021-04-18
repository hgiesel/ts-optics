import traversing from "./traversing";

/***** Traversal' s a *****/
export default traversing(
  <S extends A[], A>(f: (a: A) => A[], s: S): S[] =>
    [s.map((a: A) => f(a)[0])] as S[],
);
