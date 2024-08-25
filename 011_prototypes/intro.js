/*
JavaScript works on prototypal inheritance



level of prototypal inheritance in JS:




Array -----> Object ----> null

String ------> Object -------> null


now functions are also some kind of object (we can say that) and have some prototypes

Function ------> Object ---------> null





We can say that in JS, everything is an Object



*/


// function's prototypal behaviour demo


let multiplyByTen = function(num){
    return num*10;
}


console.log(multiplyByTen(2)) // 20


multiplyByTen.power = 12;      

console.log(multiplyByTen.power) // prints 12

console.log(multiplyByTen.prototype) // prints {} : this means that the function supoports prototypal behaviour. initially the prototype is an empty object


// ---------------------------------------------------------

function createUser(username, score){
    // "this" refers to the context
    this.username = username;

    this.score = score;
}

// can we inject some functionalities in JS?

createUser.prototype.increment = function(){
    // score++;

    this.score++; // to increase the score of whoever called the fxn
}



createUser.prototype.printMe = function(){
    console.log(`Price is ${this.score}`)
}

//----------------------

// const chai = createUser("chai", 25);
// const tea = createUser("tea", 250); // will give error because you did not use new keyword while passing the details from the LHS to the variables on RHS



// an interesting feature of JavaScript:
// you don't need to always write like Array.prototype.map(), or Array.prototype.filter()   

// you can simply use them as Array.map() 
// JS does some things for us directly


const chai = new createUser("chai", 25);
const tea = new createUser("tea", 250)

chai.printMe()