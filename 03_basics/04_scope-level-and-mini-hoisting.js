

// Nested Scopes:

function one(){
    const username = "Mayank"
    function two(){
        const website = "buzzworld"
        console.log(username)
    }

    // console.log(website);  // error (because the scope of website is in the fxn two only)
    
    two()  // calling fxn two => prints username, i.e, Mayank
    
    // (this variable is accessible inside fxn two because fxn two is defined inside fxn one)
}

one() // calling fxn one


// what is closure? the child fxn can access the variables of parent fxns when nested (more to know about this but for now, this is the basic)




//-----------------------------------------------------------
// Nested Scopes using if-else statements

if(true){
    const username = "Monkey"
    if(username === "Monkey"){
        const website = "buzzworld"
        console.log(username + " " + website) // prints Monkey buzzworld

    }

    // console.log(website) // error because it is not accessible to the parent conditional statment (if)

    
}

// console.log(username) // error becuase not accessible here




// +++++++++++++++++++++++++ INTERESTING EXAMPLE ++++++++++++++++++++++++++++++++++++


// one way of declaring fxn
function addOne(num){
    return num + 1

}

addOne(5) // returns 6


// another way of declaring fxn
const addTwo = function (num){
    return num + 2
}

addTwo(9) // returns 11



//  what if you try to do something like this with the first way of declaration?

addEk(5) // calling the fxn before defining // no error //  || // this concept is called hoisting :: refer to MDN docs for more clarity about the concept and various types of hoisting


console.log(addEk(5)) // would print 6

function addEk(num){
    return num + 1
}

// ============================================

// but what if you try to do something like above with the second fxn? => will get an error


// addDo(9) // calling the fxn before defining (gives an error)
// const addDo = function (num){
//     return num + 2
// }

