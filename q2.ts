/**
 * Usage: npx tsx q2.ts <string>
 *  Example: npx tsx q2.ts "([])"
 *
 *  List of Input To Try :
 *  1. "([])"
 *  2. "([)]"
 *  3. "{[()]}"
 * 
 */

// 2. Determine the complexity of your code. O(n)
// Explain the details of the complexity analysis for answer No. 2 and include it in the README of your repository!

function checkBalancedBracket(input: string): string {  
  const stack: string[] = [];
  const matchingBrackets: { [key: string]: string } = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  for (let char of input) {
    if (char === "(" || char === "[" || char === "{") {
      stack.push(char);
    } else if (char === ")" || char === "]" || char === "}") {
      if (stack.length === 0 || stack.pop() !== matchingBrackets[char]) {
        return "NO";
      }
    }
  }

  return stack.length === 0 ? "YES" : "NO";
}

(() => {
  const args = process.argv.slice(1);

  if (args.length < 2) {
    console.error("Usage: npx tsx q2.ts <string>");
    console.error(`Example: npx tsx q2.ts "([])"`);
    process.exit(1);
  }

  const inputString = args[1];  

  const result = checkBalancedBracket(inputString);

  console.log(result);
})();
