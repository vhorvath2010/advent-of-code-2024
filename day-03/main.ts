function mul(mulString: string): number {
  const nums = mulString
    .slice(4, -1)
    .split(",")
    .map((num) => parseInt(num));
  return nums[0] * nums[1];
}

const rawInstructions = await Deno.readTextFile("input.txt");
const mulRegex = /mul\(\d+,\d+\)/g;
const mulInstructions = rawInstructions.matchAll(mulRegex);
let sum = 0;
mulInstructions?.forEach((mulInstruction) => {
  sum += mul(mulInstruction[0]);
});
console.log(sum);
