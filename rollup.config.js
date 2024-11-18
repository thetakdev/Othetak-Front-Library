import typescript from "@rollup/plugin-typescript";
import terser from "@rollup/plugin-terser";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import visualizer from "rollup-plugin-visualizer";

export default [
  {
    input: "src/index.ts", // 진입점을 src/index.ts로 설정
    output: [
      { file: "dist/index.cjs", format: "cjs" },
      { file: "dist/index.mjs", format: "esm" },
    ],
    plugins: [
      peerDepsExternal(),
      typescript(),
      terser(),
      visualizer({
        filename: "./bundle-analysis.html", // 분석 결과 파일명
        open: true, // 빌드 후 결과를 브라우저에서 자동으로 엽니다.
      }),
    ],
  },
];
