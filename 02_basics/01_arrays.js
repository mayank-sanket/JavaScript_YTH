
const myArray = [0, 1, 2, 3, 4, 5] // same type of data

const myArray2 = [0, 1, 2, 3, 4, 5, true, "Mayank"] // various types of data || valid

// arrays in JS are resizable

console.log(myArray[1]) // valid
// console.log(myArray["one"]) // not valid (prints undefined)

// JS array-copy-operations create shallow copies (MDN docs)

// other kinds of arrays:
const myHeros = ["Shaktiman", "Naagraj"]

// other ways of using array

const myArr3 = new Array(1, 2, 3, 4, 5, 6)

//++++++++++++++++++++++++++++++++++++++++++++++++ Array Methods

// push method

myArray.push(6) // adds 6 in the last
console.log(myArray); // prints the entire array with 6 at the end
myArray.push(7)
console.log(myArray);  // prints the entire arr with 7 at the end 

// pop  method(no need to pass parameter)

myArray.pop() // removes the last element, ie 7
console.log(myArray); // prints the array without 7

// unshift method

myArray.unshift(9)  // puts 9 at the ZEROTH index 
console.log(myArray); 
// prints all the elem but 9 at the zeroth position and all elem placed afterwards
// not recommended (time consuming process)  | use only if highly needed to do so


// shift method
myArray.shift() // no need of parameter || removes the zeroth element (which was 9 in this case)
console.log(myArray); // prints the new array (after removal of the zeroth element)



// other methods:

// includes() : returns boolean values

console.log(myArray.includes(11)); // prints false

// indexOf() : 
console.log(myArray.indexOf(4)); // prints 4 

console.log(myArray.indexOf(99)); // prints -1 (not present in the array)

// +++++++++++++++++++++++++++++++++++++++

const newArr = myArray.join() //
console.log(newArr); // prints array in the string format (separated by comma) like 0, 1, 2, 3, 4, 5, 6 and not like ... (contd.)
/**
 [
    0, 1, 2, 3,
    4, 5, 6
 ]
 */

console.log(typeof newArr); // prints string
console.log(typeof myArray); // prints object



//++++++++++++++++++++++++++++++++++ slice and splice ++++++++


// slice:

console.log("A ", myArray); // prints the original array as it was

const mynewarr = myArray.slice(1, 3) // retuns a section of array (1 index is included, 3 index isn't) // 
console.log(mynewarr);  // prints the section of array (index 3 not included)

console.log("B", myArray); // prints the original array as it was

// splice:

const mynewarr2 = myArray.splice(1,3) // returns a section of array (both 1 index and 3 index are included)

console.log(mynewarr2); // prints from index 1 to index 3 (both included)

console.log("C ", myArray); // prints the part of array left after removing the spliced array

// means: splice(1,3) removed the part of main array from index 1 to index 3 (both included) and affected the original array, so if we print the main array again, we get the array minus the spliced part 


// diff bw slice and splice: 1. slice(1, n) = > n is not included | slice does not affect the original array
// 2. splice (1, n) = > both 1 and n are included | splice affects the original array too


