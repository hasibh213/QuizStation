const fs = require("fs");

const readFile = (path) => {
  console.log(path);
  const content = JSON.parse(fs.readFileSync(path));
  return content;
};

module.exports = readFile;
