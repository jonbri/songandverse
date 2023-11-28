module.exports = {
  branches: ["main"],
  plugins: [
    "@semantic-release/commit-analyzer",
    [
      "@semantic-release/release-notes-generator",
      {
        linkCompare: false,
      },
    ],
    "@semantic-release/changelog",
    "@semantic-release/npm",
    require("./semantic-release-plugin"),
  ],
};
