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