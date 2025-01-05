// About data type conversions in JS

let score = 78
let score2 = "35"
let score3 = "34abc"

let score4 = null

let score5 = undefined


let score6 = true;

let score7 = "Mayank"
// console.log(typeof score) // or

console.log(typeof(score)) // prints number

console.log(typeof(score2)) // prints string


// conversion: 

let valueInNumber = Number(score2) // converts score2 form string to number


console.log(typeof valueInNumber) // prints number



let valueInNumber2 = Number(score3) // converts score3 from string to number (theoritially)
// if we do, console.log(typeof(valueInNumber2)), it prints number but we know, that "34abc" is not a number.

// so for that, we first try to print the value stored in the variable : valueInNumber2

console.log(valueInNumber2) // prints NaN    (Not a Number)

 
let valueOfNullInInt = Number(score4) // convert null into number
console.log(valueOfNullInInt) // prints 0

let valueOfUndefinedInInt = Number(score5)

console.log(valueOfUndefinedInInt) //prints NaN


let valueOfBooleanInInt = Number(score6)
console.log(valueOfBooleanInInt) // prints 1 (as true means 1 and false means 0)


let valueOfStringInInt = Number(score7)
console.log(valueOfStringInInt) // prints NaN


//_____________________________________

/*
"33" => 33
"33      " =>33
"33abc" => NaN
true => 1; false =>0; 



*/

let isLoggedIn = 2; 
let booleanIsLoggedIn = Boolean(isLoggedIn) // converts into boolean

console.log(booleanIsLoggedIn) // prints true as isLoggedIn was assigned 2 (non-zero) | would have printed false if isLoggedIn = 0

// in all the cases where isLoggedIn is any non-zero value (say 2), console.log(booleanIsLoggedIn) prints true


let isLoggedIn2 = "" // empty string
let booleanIsLoggedIn2 = Boolean(isLoggedIn2) 
console.log(booleanIsLoggedIn2) // prints false

let isLoggedIn3 = "Mayank" // non-empty string
let booleanIsLoggedIn3 = Boolean(isLoggedIn3)

console.log(booleanIsLoggedIn3) // prints true


let someNumber = 332
let stringSomeNumber = String(someNumber)
console.log(stringSomeNumber) // prints 332 (string) 

console.log(typeof stringSomeNumber) // prints string



