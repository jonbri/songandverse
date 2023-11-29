const fs = require("fs");

async function prepare(config, context) {
  require("conventional-changelog")({
    preset: "angular",
    releaseCount: 0,
  }).pipe(process.stdout);
}

module.exports = { prepare };
