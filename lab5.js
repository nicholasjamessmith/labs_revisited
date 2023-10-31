quotes = ["oh", "yes", "no"]

const randomThings = [1, 10, "Hello", true]

//1. how do you access the 1st element in the array?
randomThings[0]
console.log(randomThings[0])
//2. Reassign the value of "Hello" to "World".
randomThings[2] = "World"
console.log(randomThings)
//3. Check the value of the array to make sure it updated the array.

//We've Got Class
//Given the following array
const ourClass = ["Stan Lee", "Zoom", "Github", "Slack"]

//1. What would you write to access the 3rd element of the array?
ourClass[2]
console.log(ourClass[2])
//2. Change the value of "Github" to "Octocat"
ourClass[2] = "Octocat"
console.log(ourClass[2])
//3. Add a new element, "Cloud City" to the array.
ourClass.push("Cloud City")
console.log(ourClass)

//Mix It Up
//Given the following array
const myArray = [5, 10, 500, 20]

//Using the push method, add the string "Egon" to the end of the array.
myArray.push("Egon")
console.log(myArray)
//Using a method, remove the string from the end of the array.
myArray.pop("Egon")
console.log(myArray)
//Using the unshift method, add the string "Bob Marley" to the beginning of the array
myArray.unshift("Bob Marley")
console.log(myArray)

//Using a different method, remove the string from the beginning of the array
myArray.splice(0, 1)
console.log(myArray)

//Use the reverse method on this array
myArray.reverse()
console.log(myArray)

//Biggie Smalls
//Write an if..else statement that iterates over the myArray array declared above:
// console.log(x) if x <= myarray.length
for (let index = 0; index < myArray.length; index++) {
  //  console.log(myArray[index])
  //}
  //console.log little number if the number is entered is less than 100
  //If the number entered is 100 or more, alert big number.
  if (myArray[index] > 100) {
    console.log("little number")
  } else {
    console.log("big number")
  }
}

//Monkey in the Middle
//Write an if...else if...else statement:

//console.log little number if the number entered is less than 5.
for (x = 0; x <= 100; x++) {
  if (x < 5) {
    console.log("litte number")
  } else if (x > 10) {
    console.log("big number")
  } else {
    console.log("monkey")
  }
}
//If the number entered is more than 10, log big number.

//Otherwise, console.log "monkey".

//What's in Your Closet?
//Below, we've given you examples of Kristyn and Thom's closets modeled as data in JavaScript.

const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "GA hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],[
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs"
  ],[
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans"
  ]
];

// 1. What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.
console.log("Kristyn is rocking that " + kristynsCloset[2] + " today")

// 2. Kristyn can't find her left shoe. Remove this item from her closet and save it to a variable named kristynShoe.
kristynShoe = kristynsCloset[0]
console.log(kristynShoe)

// 3. Kristyn just bought some sweet shades! Add "raybans" to her closet after "yellow knit hat".
kristynsCloset.splice(6, 0, "raybans");
console.log(kristynsCloset)

// 4. Kristyn spilled coffee on her hat... modify this item to read "stained knit hat" instead of yellow.
kristynsCloset.splice(5, 1, "stained knit hat")
console.log(kristynsCloset)

// 5. Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirts array.
console.log(thomsCloset[0][0])

// 6. In the same way, access one item from Thom's pants array.
console.log(thomsCloset[1][2])

// 7. Access one item from Thom's accessories array.
console.log(thomsCloset[2][0])

// 8. Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"
console.log("Thom is looking fierce in a " + thomsCloset[0][1] + ", " + thomsCloset[1][1] + ", and " + thomsCloset[2][0] + ".")

// 9. Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.
//thomsCloset.splice([1][2], 1, "Footie Pajamas")
console.log(thomsCloset)
// Incorrect