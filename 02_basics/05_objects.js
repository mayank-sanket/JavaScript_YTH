// adding functions to JS objects

let JSuser = {
    name: "aman",
    age: 22, 
    location: "New Delhi"
}

JSuser.greeting = function(){
    console.log("Hello JS user!");
}

console.log(JSuser.greeting) // prints [Function (anonymous)]

console.log(JSuser.greeting()) // prints Hello JS user and undefined in two lines

// another greeting

JSuser.greeting2 = function(){
    // console.log(`Hello ${this.name}!`)
    // or
    console.log(`Hello ${this["name"]}!`)
    
}

console.log(JSuser.greeting2()) // Hello aman! | undefined (in two lines)
