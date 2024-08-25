function SetUsername(username){
    // some complex DB calls

    this.username = username;

    console.log('function called and user created')
}

function createUser(username, email, password){

    SetUsername(username);

    // SetUsername.call(this, username)
    
    
    this.email = email;
    this.password = password;
}


const chai = new createUser("chai", "chai@google.com", "12345");
console.log(chai);


// what is the problem with the above code?

// output: 

/*

function called and user created

createUser{ email: 'chai@google.com, password: '12345'}



: you did not get any information about the username of the user even though the function SetUserName was called

:reason: since after being called, the function gets removed from the call stack, the variables declared inside the function also get removed from the memory

: to avoid this: we need to hold the reference of the variables used inside the function

: therefore, we use the syntax: FxnName.call(this, parameter)   

: notice that the first argument is 'this' keyword and the second parameter is parameter that we initally passed
*/


// final syntax:

// SetUsername.call(this, username)


// FINAL CODE
function SetStudentName(sname){
    
    // some complex db calls

    console.log(`student with name ${this.sname} is being registered now`)

    this.sname = sname;
}


function RegisterStudent(sname, enrollmentId, email){
    SetStudentName.call( this, sname);
    this.enrollmentId = enrollmentId;
    this.email = email;
}


const student1 = new RegisterStudent("mayank sanket", 1, "mayanksanket@gmail.com");

console.log(student1)