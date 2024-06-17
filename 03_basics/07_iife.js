// IIFE - Immediately Invoked Function Expresssions

// one example when you have to execute the fxn just after defining

// function chai(){
//     console.log(`DB connected`)
// }
// chai()    ----// this will throw error if you use the IIFE function below it | if you don't have IIFE below it, this will function normally

// how to avoid the above error?  by using the semi-colon after fxn calling

function chai(){
    console.log(`DB connected`)
}
chai();




// IIFE - defining and executing the fxn at the same time : (fxn def)(fxn call) | ()() 
// wrap the fxn inside () and then use () after the wrapped fxn

(function coffee(){
    console.log(`DB connected`)
})();

//Q: why do we use IIFE?
// ans: 1. to immediately execute the fxn | 2. to prevent the pollution of global scope 

// Q: situation
(function bisleri(){
    console.log("DB connected 2")
})(); // it will give an error if SEMICOLON is not used after the IIFE coffee

// note:  semicolon is used to stop the context after being invoked

// to prevent errors in IIFE, use semicolon before and after using IIFE




// arrow fxn as IIFE
(()=>{
    console.log("DB connected 3")
})();



// ---- Passing parameters in IIFE

(function(name){
    console.log(`Hello ${name}!`)
})('mayank');   // prints Hello mayank

((name)=>{
    console.log(`hey ${name}! Welcome to the website.`)
})("mayank sanket");


// named IIFE vs unnamed IIFE | example - function bisleri is named IIFE while the above fxns are unnamed IIFE