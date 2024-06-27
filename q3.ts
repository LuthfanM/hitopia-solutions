/**
 * Usage: npx tsx q3.ts
 *  Example: npx tsx q3.ts
 *
 * 
 */

function findHighestPalindrom(inputNum: string, amountDigit: number): string {
  const n = inputNum.length;
  let arr = inputNum.split("");
  let changes = new Array<boolean>(n).fill(false);

  for (let i = 0, j = n - 1; i < j; i++, j--) {
    if (arr[i] !== arr[j]) {
      arr[i] = arr[j] =
        "" + Math.max(Number.parseInt(arr[i]), Number.parseInt(arr[j]));
      changes[i] = changes[j] = true;
      amountDigit--;
    }
  }

  if (amountDigit < 0) return "-1";

  for (let i = 0, j = n - 1; i <= j && amountDigit > 0; i++, j--) {
    if (i == j && amountDigit > 0) {
      arr[i] = "9";
    }
    if (arr[i] < "9") {
      if (changes[i] || changes[j]) {
        arr[i] = arr[j] = "9";
        amountDigit--;
      } else if (amountDigit >= 2 && arr[i] !== "9") {
        arr[i] = arr[j] = "9";
        amountDigit -= 2;
      }
    }
  }

  return arr.join("");
}

console.log(findHighestPalindrom("3943", 1));  //output 3993
console.log(findHighestPalindrom("932239", 2)); //output 992299
console.log(findHighestPalindrom("12345", 1)); //output -1
