const JSuser = {
    name: "Mayank",
    age: 22,
    location: "Bhopal",
    email: "mayanksanket@gmail.com"
}

JSuser.location = "New Delhi"
console.log(JSuser["location"]) // New Delhi

// Object Freezing concept

Object.freeze(JSuser) // freezes the object
JSuser.location = "New York"
console.log(JSuser["location"]) // prints New Delhi 



