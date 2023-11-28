module.exports = {
  branches: ["main"],
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/changelog",
    "@semantic-release/npm",
    [
      "@semantic-release/git",
      {
        "assets": ["CHANGELOG.md"]
      }
    ],
    require('./semantic-release-plugin'),
    "@semantic-release/github"
  ]
};
