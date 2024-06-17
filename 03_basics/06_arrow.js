function chai(){
    
    // console.log(this) // printing "this" inside a function -- it will behave differently from printing it outside the function | outside fxn : {} | inside fxn: we get a lot of values

    // example, put something in this function, and when you will print "this", what happens?
    let username = "mayank"
    console.log(this.username) // prints undefined
    // can't use "this" inside a normal function like that | but we can use "this inside "object"
    console.log(this) // multiple values
}
chai()




const coffee = function(){
    let username = "monkey"
    console.log(this.username) // prints undefined | can't use "this" inside such functions also
    console.log(this)  // multiple values
}
coffee()


// Arrow Functions

const water = ()=>{
    let username = "kinley"
    console.log(this.username) // prints undefined
    console.log(this) // prints {}
}

water()


// ------------------- Arrow Functions ----------------------

const addTwo = (num1, num2)=>{
    return num1 + num2
}

console.log(addTwo(2,3)) // prints 5

// implicit return - no need to use curly brackets

const addThree = (num1, num2, num3) => num1 + num2 + num3 // or const addThree = (num1, num2, num3) => (num1+num2+num3) -- valid

console.log(addThree(1,2,6)) // prints 9

// but, what if?

const square = (num1) => {num1*num1} 
console.log(square(5)) // undefined



// if you use the curly brackets {}, then you have to use the return keyword, eg

const cube = (num) => {return num*num*num}
console.log(cube(2)) // prints 8


// Q: how to return an object IMPLICITLY? - wrap inside a bracket ()

// const fxn = () => {username: "hitesh"}

// console.log(fxn()) // prints undefined


const txn = ()=> ({username: "hitesh"})
console.log(txn()) // prints {username: 'hitesh'}


// Q: how to return an object EXPLICITLY? - the normal way (using return keyword inside {})
const rxn = ()=> {return {username: "sanket"}}
console.log(rxn()) // prints {username: 'sanket'}