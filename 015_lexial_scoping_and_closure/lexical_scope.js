// LEXICAL SCOPING



function init(){
    let name = "Mayank";
    function displayName(){
        console.log(name); // displayName function has access to the name variable which is declared inside the parent function

    }
    displayName();
}

init(); 


// -----------------------------------------------------

function outer(){
    let username  = "mayank";

    function inner(){
        let secretKey = "my1234"
        console.log("inner", username) // prints mayank (has access to the variable username declared in the parent function)
    }

    function innerTwo(){

        console.log('inner two', username) // prints mayank 

        console.log(secretKey) // reference error
    }

    inner();
    innerTwo();


    

}

outer();

// console.log(username) // reference error (no access to the variable username)