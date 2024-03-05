// concept of maps in arrays


const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// task: add 10 to each of the numbers present in the array

// const abc = myNums.map((nms)=>{nms+10})  // // // since you opened a scope here, you will have to use return keyword in the callback fxn
// console.log(abc);  

/*
         [
    undefined, undefined,
    undefined, undefined,
    undefined, undefined,
    undefined, undefined,
    undefined, undefined
         ] */  // why? since you opened a scope, you need to use return keyword




        
         
const newNms = myNums.map((val) =>{return val+10})         
console.log(newNms)

 /* prints

[
  11, 12, 13, 14, 15,
  16, 17, 18, 19, 20
]

*/
   

// or 


const newNums = myNums.map((num) => num + 10)  // no need to use return keyword in callback fxn as you did not open the scope or {}

console.log(newNums)   /* prints

[
  11, 12, 13, 14, 15,
  16, 17, 18, 19, 20
]

*/


// _________________________________________________________________________________________


// CHAINING OF MAPS

// suppose you want to multiply each number by 10 and add 1 to it then return the numbers in a new array: there are two ways - 1. direct method 2. using chaining concept

const newNmbrs = myNums.map((nums) => nums*10).map((nums) => nums+1)
console.log(newNmbrs)   

/* prints

[
  11, 21, 31, 41,  51,
  61, 71, 81, 91, 101
]
*/

// or to increase readability: 

// const newNmbrs22= myNums
//                 .map((nums) => nums*10)
//                 .map((nums) => nums+1)
// console.log(newNmbrs22) // same output as above



// Q: can we use filter as well (in chaining)? Yes!
console.log("------------");
const newNmbrs333 = myNums.map((nums) => nums*10).map((nums) => nums+1).filter((nums) => nums>50)
console.log(newNmbrs333)   // [ 51, 61, 71, 81, 91, 101 ]
