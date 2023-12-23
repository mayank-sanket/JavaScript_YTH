// Data Types and ECMA standards

// the earlier JS did not have the features of arrows, classes, modules, etc
// but the latest JS has these features

"use strict";   // treats all the JS code as the newer version
// most of the times we don't need to write "use strict"; as the engine automatically treats the code as new version JS but....


// alert("Your device is hacked!") // if you try to run this in TERMINAL (node), you will get an error. To run alert functions, BROWSER is recommended 
// alert(3+3) // we are using nodejs, not browser

// if you want to use alert function in NODE, there is a different syntax for it 

// readability

// console.log(3
//     +3) 

// (valid but not easy to read -- not recommended)

// semicolon is optional in JS but you have to use it when there are two or more instructions in the same line
// eg.

// console.log(3+2); console.log("Mayank")  // here the semicolon was mandatory

// for documentation, use MDN or ECMA. ECMA (tc39) is the official JS documentation, however, most of the time we see MDN docs

// Data Types 
//number, string, bigint, boolean, null, undefined, symbol | primitive
// object | non-primitive
// in total 8 data types in JS
let name = "Mayank" // String data type
let age = 22
let isLoggedIn = true

// number (range: )
// bigint  (used in stock trading or large websites, such as Facebook, etc)
// string (can be used in single quotes as well as double quotes)
// boolean (true/false)
// null : it is actually a stand-alone value
let place = null // empty or khali(instead of using 0 many times, we prefer using null as zero is a value and might affect the code, eg, temperature = 0 is a value but temp = null isn't)
// undefined : example-
let state = "" // type is string but undefined

// symbol (used to find uniqueness, or individual components used in React)
// object

// knowing the type of data : different ways

let firstName = "Mayank"
console.log(typeof(firstName)) // prints "string"

console.log(typeof(23)) // prints "number"
console.log(typeof "Mayank") // prints "string"
console.log(typeof null) // prints "object" | that means "null" is an object
console.log(typeof undefined) // prints "undefined" | type of "undefined" is undefined