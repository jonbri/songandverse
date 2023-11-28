module.exports = {
  branches: ["main"],
  plugins: [
    "@semantic-release/commit-analyzer",
    [
      "@semantic-release/release-notes-generator",
      {
        releaseCount: 0,
      },
    ],
    "@semantic-release/changelog",
    "@semantic-release/npm",
    require("./semantic-release-plugin"),
  ],
};
