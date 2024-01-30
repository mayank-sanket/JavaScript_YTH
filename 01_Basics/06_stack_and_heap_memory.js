// modern language/ mid-modern lang -> not too much access of memory | automatic garbage collection, etc

// memory: 1. Stack mem (primitive) 2. Heap mem (Non-primitive)

// whenever stack memory:  => variable copy
// whenever heap memory: => reference (original value)

let myYouTubeName = "MayankSanket" // stack 
let anothername = myYouTubeName 
// console.log(anothername); // prints MayankSanket
anothername = "PriyankSanket"
console.log(anothername); // prints PriyankSanket

console.log(myYouTubeName); // prints MayankSanket  (because Stack memory | primitive type data)

// ++++++++++++++++++++++++++++++++++++++++++

let userOne = {
    email: "usrem@gmail.com",
    upi: "user@ybl",
    city: "New Delhi", 

}

let userTwo = userOne // actual value is referenced   (because of Heap | Non -primitive type data)

userTwo.email = "mayank@google.com"
console.log(userOne.email); // prints mayank@google.com
console.log(userTwo.email); // prints mayank@google.com