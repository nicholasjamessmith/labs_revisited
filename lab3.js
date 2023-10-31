//Lab 3 - Booleans and Loops
//Loop It!
//Create a loop that will print "hi" 15 times.
for (let i = 0; i <= 15; i++) {
  console.log("hi")
}
//Create a loop that will print "YEP!" 30 times
for (let a = 0; a <= 30; a++) {
  console.log("YEP!")
}

//Booleans and Loops - Part 1
let some_num = (Math.floor(Math.random()*100));
for (let b = 0; b <= 10; b++) {
  if (some_num < 10) {
    console.log("that's a small number")
  }; if (some_num > 20) {
    console.log("that's a big number")
  }
  //} else if (some_num > 10 < 20) {
  //  console.log("that's a medium sized number")
  //}
}
console.log(some_num)
//How do you print one log for a specific boolean result within a loop? I.e how do you pring "that's a small number ONLY once (representing the condition of the number 

//Pseudocoding
//How much would it cost to drive around the world at the equator if:
//1) The earth is rotating at 1000mph
//2) Gas costs $3 per gallon
//3) Your car gets 15 miles to the gallon

//Step 1. It costs $45 for a full tank of gas.
//Step 2.
//Incomplete*

//Booleans and Loops - Part 2
//const fave_day = "Sunday"
//for (fave_day === "Sunday") {
//  console.log("I like the weekend")
//}

//Loops and booleans part 2
//Create a variable called fave_day and assign it to your favorite day of the week.
//const fave_day = "Sunday";
//const iterable = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday",];
//for (const value of iterable) {
//  console.log(value);
//}
//Create a loop that uses the variable fave_day that you created. Make a loop that will print "I like the weekend" if fave_day equals Saturday or Sunday. The loop should print "Give me a good 'ol weekday" if fave_day is equal to Monday, Tuesday, Wednesday, Thursday, or Friday.

let fav_day = "Sunday";
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
for (let day of days) {
  if (day === "Saturday") {
    console.log("I like the weekend")
  }
  if (day = fav_day) {
    console.log("Hallelujah")
  }
    console.log(days);
  }
  //console.log(day);
