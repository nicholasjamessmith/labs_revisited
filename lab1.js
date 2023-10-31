//Lab 1 - Intro to JS
//Activity
let a = "";
let b = "bongos";
let c = "get your";

a = b;
b = c;
c = a;

//What are the values of 'a' 'b', and 'c'?
//a = bongos; *CORRECT*
//b = get your; *CORRECT*
//c = "" //'c' is set to 'a' which was already set to 'bongos'; therefore c = 'bongos'
console.log(a)
console.log(b)
console.log(c)
//Answer:

//Activity
//Use the + operatior to concatenate these strings together within a console.log: "Please", "squeeze", "the",  "cheese". Make sure there are spaces in-between each word.
console.log("Please " + "squeeze " + "the " + "cheese") //*CORRECT
//With the variable const word = 'believe', replace the string "squeeze" with the word variable.
const word = 'believe'
console.log("Please " + word + " the " + "cheese") //(include space after variable)

const x = 5;
const y = 10;
console.log("The sum of " + x + " and " + y + " is " + (x + y)) //(include space before and after variables, and put parenthesis around addition.

//DRY - "Don't repeat yourself" - loop
let num = 1;

while (num <= 1000) {
  console.log("The number is: " + num);
  num++;
}

//Loop Sytax - while loop
//while loop examples:
let number = 1;
while (number <= 1000) {
  console.log("The number is:  " + number);
  number++;
}
//* variable names have to be consistent within code block; can't forget to start count with 'number++'

let runProgram = true;
while (runProgram) {
  console.log("program is running");
  runProgram = false;
}

let startProgram = true;
while (startProgram) {
  console.log("The program is on")
  console.log("This is the program")
  console.log("The program is over")
  startProgram = false
}

//Psuedo-code
//initial condition
//while (boolean expresssion) {
  //run code in block
  //change condition <-- *prevent infinite loop*
//}

//Boolean example
console.log(1 > 2)
console.log(1 == 2)

//Activity
console.log(-10 >= -100) //true
console.log(0 < 1000) //true
console.log(888 === 889) //false
console.log(20 <= 20) //true

let n = 1;
while (n <= 100) {
  console.log(n);
  n++;
}
//*CORRECT*

let z = 0;
while (z <= 5000) {
  console.log(z * z)
  z++;
}

let i = 1000;
while (i >= 1) {
  console.log(i)
  i--;
}

//For Loops
for (let num = 1; num <= 1000; num++) {
  console.log("The number is: " + num);
}

//Three parts to 'control panel of the loop, delimited by the semicolon
//for (initial condition; while condition; repeating expression) {
//}
//1. Initial code supplied to the loop (usually a numerical starting value of the loop)
//2. The condition under which the loop runs (it will run while the expression is true)
//3. A repeating expression that runs at the end of each loop (usually an instruction to increase the numerical starting value)

for (let i = 0; i <= 99; i++) {
  console.log(i);
}

for (let i = 99; i <= 9999; i++) {
  console.log(i)
}


for (let z = 1000; z >= 1; z--) {
  console.log(z)
}

let string = "This is the song that never ends";
for (let i = 0; i <= 100; i++) {
  console.log(string);
}