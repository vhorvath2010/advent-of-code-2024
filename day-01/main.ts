async function loadPairs(filePath: string): Promise<number[][]> {
  const fileText = await Deno.readTextFile(filePath);
  const numberPairs = fileText
    .split("\r\n")
    .map((stringPair) => stringPair.split("   "))
    .map((pair) => pair.map((num) => parseInt(num)));
  return numberPairs[0].map((_, colIndex) => numberPairs.map((row) => row[colIndex]));
}

const pairs = await loadPairs("input.txt");
const firstList = pairs[0];
const secondList = pairs[1];
const n = firstList.length;
console.log(`Loaded ${n} pairs`);

firstList.sort();
secondList.sort();
console.log("Lists sorted");

console.log("Calculating diff...");
let sum = 0;
const secondListFrequency: { [key: number]: number } = {};
for (let i = 0; i < n; i++) {
  const firstNum = firstList[i];
  const secondNum = secondList[i];
  sum += Math.abs(firstNum - secondNum);
  secondListFrequency[secondNum] = (secondListFrequency[secondNum] || 0) + 1;
}
console.log(sum);

console.log("Calculating similarity score...");
console.log(firstList.reduce((accumulator, num) => accumulator + num * (secondListFrequency[num] || 0), 0));
