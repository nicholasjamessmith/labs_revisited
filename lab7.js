//Calculate the Cube
//Write a function calculateCube that takes a single number and prints the volume of a cube made from that number.
//console.log(calculateCube(5));
//=> 125

//1) Write a function called calculateCube
//2) Pass the function a param (number)
//3) Return 'number' * 'number' * 'number'

const calculateCube = (number) => {
  return Math.pow(number, 3)
}
console.log(calculateCube(5))

//Is a Vowel?
//Write a function isAVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. The vowel could be upper or lower case.
//console.log(isAVowel("a"));
//=> true

//1) Write a function called isAVowel
//2) pass the function a param of a string with length of 1 (a character)
//3) return true if character is a vowel, false otherwise.
//4) vowel can be upper or lowercase

const isAVowel = (character) => {
  //return character.includes("A", "E", "I", "O", "U", "a", "e", "i", "o", "u")
  return ["A", "E", "I", "O", "U", "a", "e", "i", "o", "u"].includes(character.charAt(0))
}
console.log(isAVowel("A"))
console.log(isAVowel("z"))
console.log(isAVowel("u"))
console.log(isAVowel("N"))

//const isAVowel2 = (letter) => {
//  return ["A", "E", "I", "O", "U", "a", "e", "i", "o", "u"].includes(letter.charAt(0))
//}

//console.log(isAVowel2("Z"))
//console.log(isAVowel2("e"))

//Get Two Lengths
//Write a function getTwoLengths that accepts two parameters (strings). The function should return an array of numbers where each number is the length of the corresponding string.

//console.log(getTwoLengths("Hank", "Hippopopalous"));
//=> [4, 13]

//1) Write a function named getTwoLengths
//2) Function should accept two parameters (strings)
//3) Function should return an array of numbers
//4) Each number should be the length of the corresponding string

const getTwoLengths = (string1, string2) => {
  return [string1.length, string2.length]
}
console.log(getTwoLengths("Nicholas", "Smith"))

//Get Multiple Lengths
//Write a function getMultipleLengths that accepts a single parameter as an argument: an array of strings. The function should return an array of numbers where each number is the length of the corresponding string.

//console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));
//=> [5, 4, 2, 2, 4]

//1) Write a function GetMultipleLengths
//2) Function should accept an array of strings as an argument (param)
//3) Function should return an array of numbers
//4) Each number should be the length of the corresponding string

const getMultipleLengths = ([]) => {
  return
}
console.log(getMultipleLengths(["Nicholas", "James", "Smith"]))
//INCOMPLETE

//Maximum of Three Numbers
//Define a function maxOfThree that takes three numbers as arguments and returns the largest of them. If all numbers are the same, it doesn't matter which one is returned. If the two largest numbers are the same, one of them should be returned.

//console.log(maxOfThree(6, 9, 1));
//=> 9

//1) Define a function maxOfThree
//2) Function should take 3 numbers as arguments
//3) Function should return largest number
//4) If all numbers are the same, it doesn't matter which is returned
//5) If the two largest numbers are the same, than one of them should be returned

const maxOfThree = (num1, num2, num3) => {
  return Math.max(num1, num2, num3);
}
console.log(maxOfThree(1, 3, 7))
console.log(maxOfThree(2, 2, 2))
console.log(maxOfThree(4, 4, 1))
//  if (num1 === num2 || num2 === num3 || num3 === num1) {
//  return Math.