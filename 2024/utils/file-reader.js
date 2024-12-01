const fs = require("fs");
module.exports.readFileLine = (fileName) => {
  const rawInput = fs.readFileSync(fileName,'utf-8');
  return rawInput.toString().split("\n");
};
module.exports.getFileName = () => {
  if (process.env.NODE_ENV.toLowerCase() == "demo") {
    return "./demo-input.txt";
  }
  return "./input.txt";
};
