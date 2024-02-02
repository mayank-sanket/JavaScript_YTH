// two kinds of data types: 1. primitive  types 2. non- primitive (or reference types)

// 1. Primitive: 7 types: String, Number, Boolean, null undefined, Symbol, BigInt

// note: JS is a dynamically typed language
// for type safety in JS, we use TypeScript

// null is a kind of object which is void

const score = 100 // const score = false // etc.
const scoreValue = 100.9 
const isLoggedIn = false
const outsideTemperature = null // empty
let userEmail; // UNDEFINED by default
// or 
let userEmail2 = undefined;  // 
// Symbols
const id = Symbol('123')
const anotherId = Symbol('123') // despite passing the same values in both the symbols,the result of id and anotherId will not be same as they are different symbols  || mainly used in React, etc

console.log(id ===anotherId); // prints false
console.log(id == anotherId); // prints false

console.log(anotherId); // prints Symbol(123)
console.log(id); // prints Symbol(123)

// BigInt
// const bigNumber = 232323232323232323232323232323233232323232323;  // it shows message (too large to be represented), therefore add n in the end of number like this
const bigNumber = 22222222222222222222222222222222222222n;
console.log((bigNumber));
console.log(typeof bigNumber); // prints bigint
console.log(typeof a_var_which_i_didnot_define) // prints undefined

console.log(typeof outsideTemperature)// prints object || the value stored in outsideTemperature is null and null is a kind of object

// 2. Reference (Non-primitive): Array, Objects, Functions

// Arrays
const heros = ["shaktiman", "naagraj", "doga"] // non-primitive

// Objects

let objMayank = {
    name: "Mayank",
    age: 22,
    location: "Delhi",
}

// Functions: 
// function can be treated as a variable in js

const myFunction = function(){
    console.log("Hello world function");
}

myFunction(); // function being called


console.log(typeof myFunction); // prints funciton  || it is a function object (a kind of object)




// note: if you console.log(typeof any_none_primitive_type) then you get object in the output (in case of functions, you get function as the output which is basically an object function)

// 