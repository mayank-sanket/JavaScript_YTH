const score = 400 // JS automatically defines it as number
console.log(score) 

// but how to explicitly define numbers?

const balance = new Number(100)
console.log(balance);  // prints [Number: 100] on Node RTE as well as browser

// but if you click on it in the browser, you will see many prototypes such as toString, valueOf, toFixed, constructor, toPrecision, toLocaleString, etc

console.log(typeof balance); // prints object

// examples: 
console.log(balance.toString()); // prints 100 and not [Number: 100]
// if you do typeof balance, you will still get object 
console.log(typeof balance); // object

// but
console.log(typeof(balance.toString())); // prints string

// and 
console.log(typeof (balance.toString)) // prints function

// printing the length of the string after converting a number to string
console.log(balance.toString().length); // prints 3

// using precision values: 
console.log(balance.toFixed(2)) // prints 100.00
console.log(balance.toFixed(4)) // prints 100.0000

//++++++++++++++++++++++++++++++++++++

// Other properties of numbers:

const otherNumber = 23.8966
console.log(otherNumber.toPrecision(3)) // prints 23.9 and converts it into a string, ie the value 23.9 will be string 

console.log(typeof(otherNumber)) // number
// but
console.log(typeof(otherNumber.toPrecision)) // function
console.log(typeof(otherNumber.toPrecision())) // string

// other examples of precision
const otherNumber2 = 123.80909
console.log(otherNumber2.toPrecision(3)) // prints 124 (precise value with 3 digits)

// important  
const otherNumber3 = 1123.80909
console.log(otherNumber3.toPrecision(3)) // prints 1.12e+3

//++++++++++++++++++++++++
// other things: 
const hundreds = 1000000
console.log(hundreds.toLocaleString()) // prints with commas (US-style in general) therefore you can count the number of zeros easily 
// for Indian Style:
console.log(hundreds.toLocaleString('en-IN')) // 10,00,00

// ++++++++++++++
// if you do: Number. (number dot) , you see multiple things like: EPSILON, isFinite, isInteger, isNan, isSafeInteger, length, MAX_SAFE_INTEGER, MAX_VALUE, MIN_VALUE

// eg: 
console.log(Number.MAX_VALUE);

//+++++++++++++++++++++++ MATHS +++++++++++++++++++++

// it comes by default in JS

console.log(Math); // prints: Object [Math] {} | it means it is an object and it has a lots of properties

// if you print/run it in browser, you will see a lot of options, such as: abs, acos, acosh, E, LN2, LN10, LOG2E, LOG10E, SQRT1_2, etc

// commonly used: 
console.log(Math.abs(-23.4)); // 23.4 (absolute value)
console.log(Math.round(4.3))// 4  //rounding
console.log(Math.round(4.6)) // 5 // rounding


// rounding with control: using ceiling and floor fxn

console.log(Math.ceil(7.6)) // prints 8
console.log(Math.floor(7.9)) // prints 7


// other functions: 
console.log(Math.sqrt(32)) // prints 5.6568.......2381
console.log(Math.sqrt(25)) // prints 5

console.log(Math.sqrt(32).toPrecision(3)) // prints 5.66


   // min and max

console.log(Math.min(2,3, 4, 5, 1, 12)); // prints 1

console.log(Math.max(2,3, 4, 5, 1, 12)) // prints 12

// note: without using Math function, print 2 raised to the power 3
console.log(2**3); // prints 8

// but how to do it with Math function?
console.log(Math.pow(2,3)); // prints 8

// RANDOM FUNCTION:

console.log(Math.random()); // prints any random value between 0 and 1 (which is different every time)

// show any random value between 1 and 6 (dice game)
// console.log(Math.random()*6); // but what if it randomly becomes 0 or 0.000000000343...36? to avoid that, add +1 to it
console.log(Math.random()*6 + 1) // eg: 5.6046....414
// better syntax: wrap Math.random()*6 in a bracket to avoid confusion

//but how to get the integral part of it? wrap it with Math.floor() 

console.log(Math.floor((Math.random()*6)+1)) // prints integer values from 1 to 6 randomly


// getting  random values from 10 to 20
const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max -min + 1) + min))  













