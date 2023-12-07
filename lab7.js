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
