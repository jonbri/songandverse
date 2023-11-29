module.exports = {
  branches: ["main"],
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/npm",
    require("./src/plugin/semantic-release-plugin"),
  ],
};
