const fmap = <A, B>(f: (a: A) => B) => (xs: A[]): B[] => {
  return xs.map(f);
};

/* Traversal<F<A>,F<B>,A,B> */
export default <A, B>(f: (a: A) => B) => fmap(f);
