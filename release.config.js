module.exports = {
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    [
      "@semantic-release/npm",
      {
        pkgRoot: "./dist",
      },
    ],
    [
      "@semantic-release/changelog",
      {
        changelogFile: "./CHANGELOG.md",
      },
    ],
    [
      "@semantic-release/git",
      {
        assets: "./CHANGELOG.md",
      },
    ],

    // require("./src/plugin/semantic-release-plugin"),
  ],
};
