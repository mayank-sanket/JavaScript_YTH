// functions with objects and arrays as parameters

// vid 20

function calculateCartPrice (num1){
return num1
}

console.log(calculateCartPrice(2))

// what if you passed multiple arguments in a function which accepts only one argument

console.log(calculateCartPrice(200, 300, 400)) // prints 200 only

// how to pass multiple values in the function -- use rest operator (...) // ... is called rest operator as well as spread operator (depending on the usage)

function calculateCartPrice2(...num1){
    return num1
}

console.log(calculateCartPrice2(100, 200, 300)); // prints [100, 200, 300]  (an array of nums)


// Q: 
function cCP3(val1, val2, ...num1){
    return num1
}

console.log(cCP3(200, 300, 400, 500)); // prints [400, 500]



// ------------------------------------------------

// Functions with Objects

const user = {
    username: "Mayank",
    price: 199
}

function handleObject(anyoject_here){
console.log(`Username is ${anyoject_here.username} and price is ${anyoject_here.price}`)
}

// passing as variable
handleObject(user)   // Username is Mayank and price is 199
 
// passing the object directly
handleObject({
    username: "Sam",
    price: 399
})  // Username is Sam and price is 399



// ------------------------------------------------

// Functions with Arrays

const myNewArray = [200, 100, 400, 600, 800]


function printSecondElem(array_here){
    return array_here[1]
}

console.log(printSecondElem(myNewArray)) // 100

// similarly you can pass the array directly as well

console.log(printSecondElem([100, 200, 300, 400, 500])) // 200