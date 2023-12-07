function getFibonacciInRange(start, end) {
  if (start < 1 || end < 1 || start > end) {
    return "Invalid range.";
  }

  let fibonacciSequence = [1, 1];
  let i = 2;

  while (true) {
    let nextFibonacci = fibonacciSequence[i - 1] + fibonacciSequence[i - 2];
    
    if (nextFibonacci > end) {
      break;
    }

    fibonacciSequence.push(nextFibonacci);
    i++;
  }

  return fibonacciSequence.slice(start - 1, end);
}

// Get Fibonacci sequence between 1 and 10
const fibonacciInRange = getFibonacciInRange(1, 10);

// Output the result
console.log("Fibonacci Sequence between 1 and 10:", fibonacciInRange);
