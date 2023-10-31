//printGreeting
//Write a function called 'printGreeting' with a parameter 'name' that returns a greeting with the argument interpolated into the greeting.

const printGreeting = (name) => {
  console.log("Hello there, " + name)
}
printGreeting("Nicholas")

//reverseWordOrder
//Write a function 'reverseWordOrder' that accepts a single argument, a string. The function should return a string with the order of the words reversed. Don't worry about punctuation.

//1) Declare a function 'reverseWordOrder'
//2) 'reverseWordOrder' should accept 1 argument which is a string
//3) 'reverseWordOrder' should *return* a string with the order of the word reversed.

const reverseWordOrder = (string) => {
  const words = string.split(' ');
  const wordsReverse = words.reverse();
  const stringReverse = wordsReverse.join(' ');
  console.log(stringReverse)
}
reverseWordOrder("Hello my name is Nicholas")

const reverseString = (stringInput) => {
  const initial = stringInput.split(' ');
  const reversal = initial.reverse();
  const joined = reversal.join(' ');
  console.log(joined)
}
reverseString("Today I am practicing my coding skills")

const reverse = (input) => {
  const a = input.split(' ');
  const b = a.reverse();
  const c = b.join(' ');
  console.log(c);
}
reverse("Reverse this string now")

//calculate
//Write a function called calculate.

//This function should take three arguments, two numbers and a string.

//Name the parameters num1, num2, and operation.

//If the function receives the string "add" for the operation parameter, it will return the sum of num1 and num2.

//If the function receives the string "sub" for the operation parameter, it will return num1 minus num2.

//Do the same thing for multiplication "mult", division "div", and exponent "exp" (where num2 is the exponent of num1).

const calculate = (num1, num2, operation) => {
  if (operation === "add") {
    return num1 + num2;
  } else if (operation === "sub") {
    return num1 - num2
  } else if (operation === "mult") {
    return num1 * num2
  } else if (operation === "div") {
    return num1 / num2
  } else if (operation === "exp") {
    return num1 ** num2
  }
}
console.log(calculate(5, 3, "add"))
console.log(calculate(10, 4, "sub"))
console.log(calculate(3, 4, "mult"))
console.log(calculate(20, 4, "div"))
console.log(calculate(5, 2, "exp"))




