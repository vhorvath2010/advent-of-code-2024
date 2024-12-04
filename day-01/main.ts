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
for (let i = 0; i < n; i++) {
  sum += Math.abs(firstList[i] - secondList[i]);
}
console.log(sum);
