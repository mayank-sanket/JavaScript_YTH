
// syntax

// fxn definition
function printMyName(){
    console.log("Your name is Mayank")
    console.log("Your name is Mayank")
    console.log("Your name is Mayank")
    console.log("Your name is Mayank")
    console.log("Your name is Mayank")
    console.log("Your name is Mayank")
    console.log("Your name is Mayank")
    console.log("Your name is Mayank")
    console.log("Your name is Mayank")
    console.log("Your name is Mayank")
} 

printMyName() // function calling 


//----------------------------------

function addTwoNos(n1, n2){
    console.log(n1+n2)
}

let a = 2, b = 10
addTwoNos(a,b) // prints 12


// other variations
function multiplyTwoNos(n1, n2){
    return n1*n2
}
let x = 10, y = 10
console.log(multiplyTwoNos(x,y)) // prints 100

// or

const fxnvariable = multiplyTwoNos(9,10)
console.log(fxnvariable); // prints 90

function abcd(n1, n2, n3){
    let theirSum = n1+n2+n3
    return theirSum
    console.log("fjdklfjdkfjdkfljdklf;j") // this does not get executed as it is written after return keyword
}

const abcdfxnvariable = abcd(2, 2, 3)
console.log(abcdfxnvariable); // prints 7


// some cases:

function add(num1, num2){
    console.log(num1 + num2)
}

let n1 = 10, n2 = "23"
add(n1, n2) // prints 1023
let x1 = 10, x2 = "th"
add(x1, x2) // prints 10th

add() // prints NaN

add(2, null) // prints 2



//----------------------------------------------------------------------

function loginUserMessage(username){
    // return(`Hello ${username}`)
            // or
        return `Hello ${username}, you just logged in.`     // both are same       
}
console.log(loginUserMessage("Mayank"))

// Q: what if you don't pass an argument in teh function? 
console.log(loginUserMessage()) // prints:    Hello undefined, you just logged in

// Q: what if you pass an empty string?
console.log(loginUserMessage("")) // prints:    Hello , you just logged in


// how to avoid that?

function loggedinmsg(username){
    if(!username){ // if username is undefined
       console.log("Enter a valid name:")
       return
    }

    return `Hello ${username}`
}

console.log(loggedinmsg("")) //  prints: enter a valid name     and undefined in new lines
console.log(loggedinmsg())  // prints : enter a valid name      undefined (in new lines)


// default values

function message(username = "Guest"){
    return `Hello ${username}!`
}

console.log(message()) // prints Hello Guest!