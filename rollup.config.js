import typescript from "@rollup/plugin-typescript";
import terser from "@rollup/plugin-terser";
import del from "rollup-plugin-delete";

export default {
  input: "./src/index.ts",
  output: [
    {
      file: "./dist/index.min.js",
      format: "umd",
      name: "svgZoomDragVueDirectives",
      exports: "named",
    },
    {
      file: "./dist/index.esm.js",
      format: "esm",
    },
  ],
  plugins: [typescript(), del({ targets: "dist/*" }), terser()],
};
