async function loadPairs(filePath: string): Promise<number[][]> {
  const fileText = await Deno.readTextFile(filePath);
  const numberPairs = fileText
    .split("\r\n")
    .map((stringPair) => stringPair.split("   "))
    .map((pair) => pair.map((num) => parseInt(num)));
  return numberPairs;
}

const pairs = await loadPairs("input.txt");
console.log(`Loaded ${pairs.length} pairs. The first is ${pairs[0]}`);
