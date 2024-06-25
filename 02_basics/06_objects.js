
// objects singleton
const tinderUser  = new Object() // empty object

// literal object
const bubmbleUser = {} // empty object

console.log(tinderUser) // {}
console.log(bubmbleUser) // {}

// the only difference between these two objects is that the first object is singleton whereas the second object is non-singleton

// ----------------------------------------

tinderUser.id = "221abc"
tinderUser.name = "samay"
tinderUser.isloggedIn = false

console.log(tinderUser) // { id: '221abc', name: 'samay', isloggedIn: false }


// ----------------------------------

const regularUser = {
    email: "someone@gmail.com",
    fullName: {
        userFullName: {
            firstName: "Mayank",
            lastName: "Sanket"
        }
    }
}

// console.log(regularUser.fullName.userFullName.lastName)
// or
console.log(regularUser["fullName"]["userFullName"]["lastName"])

// console.log(regularUser[fullName][userFullName][lastName]) // error

// -----------------------------------------------


// COMBINING OBJECTS

const obj1 = {1: "a", 2: "b", 3: "c"}
const obj2 = {3: "a", 4: "b", 5: "c"}


const obj3 = {obj1, obj2}
console.log(obj3) // prints { obj1: {fkdkfjkdf}, obj2: {fdkfd}}

// actual way
const obj4 = Object.assign({}, obj1, obj2) // can combine as many objects as you want

console.log(obj4) 

// or using spread operator (used most of the time)

const o1 = {
    name: "mayank", 
    age: "22"
}

const o2 = {
    city: "New Delhi",

}

const obj5 = {...obj1, ...obj2}
console.log(obj5)





// Example:  when you get objects from Databas

const users = [
    {
        name: "A",
        email: "abc@gmail.com"
    },
    {
        name: "B",
        email: "zyz@gmail.com"
    },
    {
        name: "X",
        email: "s@gmail.com"
    }
]

console.log(users[1].email) // zyz@gmail.com

//______________________________________________



// note: getting the keys of a particular object and getting the values of a particualr object separately

const testObj = {
    id: "1",
    name: "Abc", 
    email: "abc@gmail.com"
}

console.log(Object.keys(testObj)) // prints an array of keys, ie [ 'id', 'name', 'email' ]

console.log(Object.values(testObj)) // prints an array of values, ie   [ '1', 'Abc', 'abc@gmail.com' ]


// getting entries 
console.log(Object.entries(testObj)) // returns array inside array of respective key-value pairs , ie  [ [ 'id', '1' ], [ 'name', 'Abc' ], [ 'email', 'abc@gmail.com' ] ]  


// -------------------------------- hasOwnProperty ---------------------

// to check whether there is a key in the object or not
console.log(testObj.hasOwnProperty('isLoggedIn')) // prints false

// console.log(testObj.hasOwnProperty(isLoggedIn)) // error because you have to use " " or ' '

//