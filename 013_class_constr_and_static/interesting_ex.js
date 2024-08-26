// can we change the value of Math.pi in JS? No!



console.log(Math.PI) // 3.1415....793

Math.PI = 10;
console.log(Math.PI)  // 3.1415....793

// Object.getOwnPropertyDescriptor() // tells hidden things about the Object


const descripter = Object.getOwnPropertyDescriptor(Math, "PI")   // ObjectName, key
console.log(descripter) // {value: 3.1415....793, writable: false, enumerable: false, configurable: false}


// can we create our own object with our own strict functionalities? Yes

// const myObject = Object.create(null);

const chai = {
    name: "ginger tea", 
    price: 250,
    isAvailable: true
}
console.log(chai);

console.log(Object.getOwnPropertyDescriptor(chai, "name"))  /*

{  value: 'ginger tea',
writable: true,
enumerable: true,
configurable: true}

*/



// in order to define property, do this:

Object.defineProperty(chai, "name", {
    writable: false,
    enumerable: false
})

// there is also something like defineProperties


console.log(Object.getOwnPropertyDescriptor(chai, "name"))

 /*

{  value: 'ginger tea',
writable: false,
enumerable: false,
configurable: true}

*/

// if you make one property not enumerable, then it becomes uniterable


// =======================================================================

// using loops in objects

const anObj = {
    name: "mayank",
    age: 22,
    height: 165,
    task: function(){
        console.log('I am an engineer')
    }
}


// for([key, value] of Object.entries(anObj)){
//     console.log(`${key}: ${value}`)
// }

// this will also print task: function(){console.log(......)}

for([k, v] of Object.entries(anObj)){
    if(typeof v!== 'function'){
    console.log(`${k}: ${v}`)
}
}

// name: mayank age: 22 height: 165



// now if you want a particular property such as age to not be iterable, then do this:

Object.defineProperty(anObj, "age", {
    enumerable: false
})



for([k, v] of Object.entries(anObj)){
    if(typeof v!== 'function'){
    console.log(`${k}: ${v}`)
}
}


// name: mayank height: 165

