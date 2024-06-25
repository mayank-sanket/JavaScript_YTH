// two ways of declaring an object: 1. as a literal | 2. as a constructor


// singleton: whenever you declare an object as literal, it's not singleton
// when you declare an object as constructor then it's singleton

// object literals
const JSuser = {} // empty object


const obj ={
    name: "Mayank", // behind the scenes, "name"
    age: 22, // "age"
    location: "New Delhi",
    email: "mayanksanket@google.com",
    isLoggedIn: true,
    lastLoginDays: ["Monday", "Saturday"]
}

// accessing 
// let name = obj.name
// console.log(name)
// console.log(obj.name)

// better way: 
// console.log(obj["name"])

// note:
// console.log(obj[name]) // error


// question: what if?
let usr = {
    name: "Mayank",
    "Full Name": "Mayank Sanket",
}

// console.log(usr.Full Name) // error
// but
console.log(usr["Full Name"]) // Mayank Sanket


// therefore, it's recommended to use the syntax abc["def"] to access the object items

//-----------------------------------------------
// symbol data type
const mySym = Symbol("key1")

const alpha = {
    a: "monk",
    mySym: "mykey1",
    b: 122
}

console.log(alpha) // prints mykey2 but the datatype of mykey1 becomes string
//  { a: 'monk', mySym: 'mykey1', b: 122 }

// but we want to use it as a symbol, right?

// therefore, use the syntax

const mySym2 = Symbol ("Key2")
const beta = {
    c: "donkey", 
    [mySym2]: "my new key 2",
    f: 323
}

console.log(beta[mySym2]) // my new key 2
console.log(beta)
//  { c: 'donkey', f: 323, [Symbol(Key2)]: 'my new key 2' }