const userEmail = "mayanksanket@gmail.com" // truthy value

if(userEmail){ // since userEmail is truthy value, this condition is true
    console.log(`User email is ${userEmail}`)
}
else{
    console.log("Don't have user email")
}

// +++++++++++++++++++++++++++++++++++++++++++

// falsy values:
/*
1. false
2. 0
3. -0
4. BigInt 0n,
5. ""
6. null
7. undefined
8. NaN


// all values other than the above mentioned are truthy
like:
truthy: "0", 'false', "false", " ", [] (empty array), {} (empty object), function(){} (empty fxn)
(since "0", "false", 'false' etc are strings and non-empty, therefore they are truthy values)



*/

const userList = []
if(userList.length===0){
    console.log("there is no user for this app")
}


const emptyObj = {}
if(Object.keys(emptyObj).length===0){
    console.log("empty object")
}

// note: if you do Object.keys(name_of_object) then it returns an array with the keys of the object : that means in the line 39 we are checking the length of that array if it equals 0 or not


// note: 
console.log(false == 0) // true
console.log(false == '') // true
console.log(0 == '') // true


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Nullish Coalescing Operator(??) : null, undefined | this operator checks the safety for null and undefined variables (used in Databases, like if by mistake you get null value, then assign the value provided after the ?? operator)

let val1;
val1 = 5 ??10 
console.log(val1); // prints 5 (as the value before ?? is neither null nor undefined)

let val2
val2 = null ?? 10
console.log(val2); // prints 10 (as the value before ?? is null)

let val3
val3 = undefined ?? 15
console.log(val3); // prints 15 (as the value before ?? is undefined)

let val4
val4 = null ?? 99 ?? 12
console.log(val4); // prints 99 (the first non-null and non-undefined value after the ??)



// ++++++++++++++++++++++++++++++++++++++++

// Ternary Operator:        condition? true : false | 

const price = 100
price >100? console.log("price is greater than 100") : console.log("Price is not more than 100")