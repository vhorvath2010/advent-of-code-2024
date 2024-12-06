async function loadReports(filePath: string): Promise<number[][]> {
  const fileText = await Deno.readTextFile(filePath);
  const reports = fileText
    .split("\r\n")
    .map((stringPair) => stringPair.split(" "))
    .map((pair) => pair.map((num) => parseInt(num)));
  return reports;
}

function isReportSafe(report: number[]): boolean {
  const isIncreasing = report[1] > report[0];
  for (let i = 0; i < report.length - 1; i++) {
    const diff = report[i + 1] - report[i];
    if (diff === 0 || Math.abs(diff) > 3) {
      return false;
    }
    const isDiffIncreasing = diff > 0;
    if (isDiffIncreasing !== isIncreasing) {
      return false;
    }
  }
  return true;
}

const reports = await loadReports("input.txt");
console.log(`Loaded ${reports.length} reports`);

let safeReports = 0;
reports.forEach((report) => {
  safeReports += isReportSafe(report) ? 1 : 0;
});
console.log(`There are ${safeReports} safe reports`);
