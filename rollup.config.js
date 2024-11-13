// rollup.config.js
import commonjs from "@rollup/plugin-commonjs";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import { terser } from "rollup-plugin-terser";

export default {
  input: "src/index.ts",
  output: [
    {
      dir: "dist",
      format: "esm",
      entryFileNames: "[name].js",
      plugins: [terser()],
    },
  ],
  plugins: [nodeResolve(), commonjs(), typescript()],
  external: ["react", "react-dom"], // 외부 의존성 분리
};
