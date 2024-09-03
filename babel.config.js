module.exports = {
  presets: [
    ["@babel/preset-env", { targets: "> 0.25%, not dead" }],
    ["@babel/preset-react", { runtime: "automatic" }],
    "@babel/preset-typescript",
  ],
  plugins: [
    [
      "module-resolver",
      {
        root: ["./src"],
        alias: {
          "@": "./src",
          "@styles": "./src/styles",
          "@components": "./src/components",
          "@hooks": "./src/hooks",
        },
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    ],
  ],
};
