

// old syntax for concatenation:
const name = "Mayank "
const repoCount = 50



console.log(name + repoCount + " on github") // prints Mayank 50 on github

// modern syntax: the concept of backticks: ``  | string interpolation -- use of placeholders to inject variables

const name2 = "Mayank"
const profession = "software developer"

console.log(`Hello, my name is ${name2} and I am a ${profession}.`)

console.log(`Hello, my name is ${name2} and I am a ${profession}. I have ${repoCount} repositories on github.`)

// advantage of using the modern syntax | one example: 

const name3 = "Priyank"
console.log(`Hello, my name is ${name3} and my name has total ${name3.length} characters in it.`) // prints Hello, my name is Priyank and my name has total 7 characters in it.

// another syntax to declare strings unlike the previous ones

const gameName = new String('PUBG')   // using objects way
// Here String is an object

console.log(gameName)  // prints something like [String: 'PUBG'] on Node RTE 

// if you go in browser: 
// const gameName = new String('PUBG')
// console.log(gamename)
// output: String {'PUBG'} // if you expand this, you will get something like: 
/*
0: "P"
1: "U"
2: "B"
3: "G"
length: 4

*/

// note that it is not an array, here String is an object | here the data is in "key-value pairs" | advantage - length property and some more methods (under prototype) such as chatAt, endsWith, concat etc

// coming back to node:

console.log(gameName[0]) // printing the 0th key-value | ie P

console.log(gameName.__proto__) // prototype
// prints an empty object: {} in node RTE but on browser, it shows a list of all the prototypes (there f means function)

// using some of the methods to play with gameName

console.log(gameName.length) // prints 4
console.log(gameName.toLowerCase()) // notice the () // prints pubg

// note that: it did not change the original string gameName, it just printed it in lowercase, the original value of the string gameName is still PUBG (becuase String is primitive data type)


// other things: 
console.log(gameName.charAt(3)) // prints G
console.log(gameName.charAt(2)) // // prints B

console.log(gameName.indexOf('G')) // prints 3

console.log(gameName.indexOf('X')) // prints -1 as it is not present in the string


// toDo: go through the string methods in detail : MDN Docs


// playing with strings 

const myName = "mayank-sanket"

const newName = myName.substring(0, 4) // you can hover to see the syntax in VS code
console.log(newName); // prints maya

const anotherString = myName.slice(0,4)
console.log(anotherString); // prints maya
// advantage of using slice() : you can also use negative values in it | by using negative values, you print in reverse

// read more about slice with negative parameters in it on MDN docs or some other docs

// in substring() also, you can put negative parameters but it ignores it and makes zero => better not use it there


// ++++++++++++++++++++++++++++++++

// trim() Method

const newString = "          mayanksanket   " // commonly found when some user enters spaces while giving inputs in the form etc

console.log(newString); // prints           mayanksanket       (with spaces)
// if we don't want to store them in the DB, then
console.log(newString.trim()); // prints mayanksanket (witout spaces) 

// trim() works on whitespace characters plus the line terminators

// read more about trim() on MDN docs 


// ++++++++++++++++++++++++++++++++

// replace() method

// const url = "https://hitesh.com/hitesh choudhary" // someone gave a whitespace in between
// note: browser does not  understand whitespace
// browser will automatically convert this into: 
const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-')) // prints https://hitesh.com/hitesh-choudhary

// some more things:
console.log(url.includes('choudhary')) // prints true
console.log(url.includes("hitesh")) // prints true

console.log(url.includes('mayank')) // prints false

// +++++++++++++++++++++++++++++++++++++++++++++

// Storing strings in an array by splitting:

const veryBigString = "hitesh-sir-teaches-very-well"
// syntax of split() : split(separator, limit) | read more on MDN docs
console.log(veryBigString.split('-'))
//  by printing this, you get an array: [ 'hitesh', 'sir', 'teaches', 'well' ]

const veryBigString2 = "mayank is a very good developer"
console.log(veryBigString2.split(" ")) // [ 'mayank', 'is', 'a', 'very', 'good', 'developer' ]

console.log(veryBigString2.split(" ", 3)) // prints the first 3 elements in the array: [ 'mayank', 'is', 'a' ]
