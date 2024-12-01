const path = require("path");
const { getFileName, readFileLine } = require("../utils/file-reader");
const { insertIntoArr } = require("../utils/insertion-sort");

const fileName = getFileName();
const rawInputLines = readFileLine(path.join(__dirname, fileName));
const leftSide = [];
const rightSide = [];
rawInputLines.forEach((line) => {
  const rawPair = line.split("   ");
  leftSide.push(parseFloat(rawPair[0]));
  rightSide.push(parseFloat(rawPair[1]));
});
leftSide.sort();
rightSide.sort();
let totalSize = 0;
for (let i = 0; i < leftSide.length; i++) {
  let diff = leftSide[i] - rightSide[i];
  if (diff < 0) {
    diff = diff * -1;
  }
  totalSize = totalSize + diff;
}

console.log("result sum:", totalSize);
let similarityScore = 0;
for (let i = 0; i < leftSide.length; i++) {
  const matches = rightSide.filter((item) => item == leftSide[i]);
  const currentScore = leftSide[i] * matches.length;
  similarityScore = similarityScore + currentScore;
}
console.log(similarityScore);
