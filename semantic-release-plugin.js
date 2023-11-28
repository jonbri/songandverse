const fs = require("fs");

async function prepare(config, context) {
  const changeLogPath = "CHANGELOG.md";
  console.log("changeLogPath", changeLogPath);
  if (!fs.existsSync(changeLogPath)) {
    throw new Error(`Cannot find ${changeLogPath}`);
  }
  const content = fs.readFileSync(changeLogPath, "utf8");
  console.log("changelog dump");
  console.log(content);
}

module.exports = { prepare };
