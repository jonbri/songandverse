module.exports = {
  branches: [
    "+([0-9])?(.{+([0-9]),x}).x",
    { name: "main", channel: "beta", prerelease: true },
    { name: "prod", channel: "latest" },
  ],
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    [
      "@semantic-release/changelog",
      {
        changelogFile: "./CHANGELOG.md",
      },
    ],
    [
      "@semantic-release/exec",
      {
        publishCmd: "cp ./CHANGELOG.md ./dist/CHANGELOG.md",
      },
    ],
    [
      "@semantic-release/npm",
      {
        pkgRoot: "./dist",
      },
    ],
    [
      "@semantic-release/git",
      {
        assets: "./CHANGELOG.md",
      },
    ],
    "@semantic-release/github",
  ],
};
