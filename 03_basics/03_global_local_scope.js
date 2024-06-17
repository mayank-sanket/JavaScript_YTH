// let a = 10;
// const b = 20;
// var c = 30;

// {} is called scope (if used with functions or if-else | not called scope if we use it with objects, then it's called object declaration)


if(true){
    let a = 10
    const b = 20
    var c = 30 // the scope of these three variables should ideally be inside the if block only (within {})

    // let and const satisfy it but var does not, if you try to print a and b, you will get error but if you print c, you won't get an error
}

// console.log(a) // error
// console.log(b)  // error
console.log(c)  // 30 (no error)


// what if?

var abcd = 300

if(true){
    let xyz = 10
    const mno = 20
    var abcd = 40
    //  or
    // abcd = 40
    // then also the same behaviour
}


console.log(abcd)  // prints 40 (whatever is assigned later)


// --------------------------

let tdm = 200

if(true){
    let tdm = 100
    const btr = 200
    console.log("Inner: " + tdm); // Inner: 100
    
}

console.log("Outer: " + tdm); // Outer: 200


// _________________________________________________

// notes: when you go to browser console, the global scope is different from when you run in the node (code environment)                              ----explore more in DOM