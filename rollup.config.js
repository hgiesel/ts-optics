import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import babel from "@rollup/plugin-babel";
import { terser } from "rollup-plugin-terser";

const babelOptions = {
  exclude: "node_modules/**",
  babelHelpers: "bundled",
};

const terserOptions = {
  output: {
    comments: false,
  },

  compress: {
    drop_console: false,
    pure_funcs: [],
  },
};

const tsconfigDist = {
  declaration: true,
  declarationDir: "dist/",
};

export default (args) => {
  const destination = { file: "dist/ts-optics.min.js" };
  const format = "iife";

  const plugins = [
    nodeResolve(),
    commonjs(),
    typescript(args.configDist ? tsconfigDist : {}),
    babel(babelOptions),
  ];

  if (!args.configDev) {
    plugins.push(terser(terserOptions));
  }

  return {
    input: "index.ts",
    output: {
      name: "globalThis",
      ...destination,
      format,
      sourcemap: true,
      extend: true,
    },
    plugins,
  };
};
