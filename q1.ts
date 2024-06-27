/**
 * Usage: npx tsx q1.ts <string> <[num1, num2, ..., numN]>
 * Example: npx tsx q1.ts aabbccdd "[1,2,3,4,5]"
 * 
 * List of Input to Try:
 * aabbccdd "[1,2,3,4,5]"
 * aabbccdd "[1,2,3,4,5,6,7,8,9,10]"
 * aabbccddzzzggg "[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]"
 */

const charWeights: { [key: string]: number } = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6,
  g: 7,
  h: 8,
  i: 9,
  j: 10,
  k: 11,
  l: 12,
  m: 13,
  n: 14,
  o: 15,
  p: 16,
  q: 17,
  r: 18,
  s: 19,
  t: 20,
  u: 21,
  v: 22,
  w: 23,
  x: 24,
  y: 25,
  z: 26,
};

function calculateWeight(char: string): number {
  return charWeights[char];
}

function getSubstringWeights(str: string): Set<number> {
  const weights = new Set<number>();
  let x = 0;

  while (x < str.length) {
    let char = str[x];
    let weight = calculateWeight(char);
    let sum = weight;

    weights.add(sum);

    let j = x + 1;
    while (j < str.length && str[j] === char) {
      sum += weight;
      weights.add(sum);
      j++;
    }

    x = j;
  }

  return weights;
}

function checkQueries(str: string, queries: number[]): string[] {
  const weights = getSubstringWeights(str);
  return queries.map((query) => (weights.has(query) ? "Yes" : "No"));
}

(() => {
  const args = process.argv.slice(2);

  if (args.length < 2) {
    console.error("Usage: npx tsx q1.ts <string> <[num1, num2, ..., numN]>");
    console.error(`Example: npx tsx q1.ts aabbccdd "[1,2,3,4,5]"`);
    process.exit(1);
  }

  const inputString = args[0];
  let queries: number[];

  try {    
    queries = JSON.parse(args[1]);
    if (!Array.isArray(queries)) {
      throw new Error("array expected");
    }
  } catch (e) {
    console.error("invalid format");
    process.exit(1);
  }

  const result = checkQueries(inputString, queries);
  console.log(result);
})();
