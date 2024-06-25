
if(true){
    console.log("Hey!")
}

// interesting example:
if(false){
    console.log("Hello!") // this does not get executed as the condition is false
}

// applications:

if(2 == 2){
    console.log("the values are equal")
}

if(3>=5){
    console.log("3 is greater than 5")
}

// -----
const isLoggedIn = true
if(isLoggedIn){
    console.log("the user is logged in")
}


if(3!=2){
    console.log("3 is not equal to 2")
}

let a = 323
let b = "323"

if(a==b){
    console.log("ABCDEF") // executed because (323 == "323") is true
}

if(a===b){
    console.log("DEFG")  // not executed because (323 === "323") is not true
}

if(a!==b){
    console.log("GHI") // executed because (a!==b) is true 
}

//  == vs ===, != vs !==

//______________________________________________________________________

// if-else

if(2>3){
    console.log("2 is greater than 3")
}
else{
    console.log("3 is greater than 2")
}

// another example (INTERESTING)
const score = 200
if(score>100){
    const power = "fly"
    console.log(`User power: ${power}`) // prints: User power: fly
}

// console.log(`User power: ${power}`) // this will give an error due to scope of power

// but if you do like:

const votes = 300
if(votes>151){
    var status = "majority" // reason why we prefer not using var is mentioned after this code block
    console.log(`Your status is - ${status}`)  // prints: Your status is - majority
}

// console.log(`Your status is - ${status}`) // no error and prints another time (becuase var has a global scope) | this is the reason we avoid using var in 
// to preserve the scope of the variable, avoid using var



// shorthand:
const balance = 4000000
if(balance>2000000) console.log("Good enough!") // implicit scope (this assumes the scope, but it works if executable code is in the same line as the conditional statement) | or

const slr = 7000000
if(slr>4000000) console.log("good"), console.log("keep it up"); // separated by commas and ending with semicolon || not readable though



//++++++++++++++++++++++++++++

const balABC = 1200
if(balABC<500){
    console.log("less than 500")
}
else if(balABC<700){
    console.log("greater than 500 but less than 700")
}
else if(balABC<900){
    console.log("less than 900")
}

else{
    console.log("less than 1300")
}

// =======================================

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard){
    console.log("Allowed to purchase the course")
}


if(loggedInFromEmail || loggedInFromGoogle){
    console.log("User logged in")
}