module.exports = {
  branches: ["main", "next"],
  plugins: [
    "@semantic-release/commit-analyzer",
    [
      "@semantic-release/npm",
      {
        pkgRoot: "./dist",
      },
    ],
    require("./src/plugin/semantic-release-plugin"),
  ],
};
