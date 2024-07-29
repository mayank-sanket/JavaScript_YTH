

const user = {
    username: "hitesh",
    loginCount: 7,
    signedIn: true,

    // method

    getUserDetails: function(){
        // console.log("Got user details from database");

        // console.log(`Username: ${username}`) //  prints username is not defined -- why?

        console.log(`Username: ${this.username}`)


        // NOTE: printing "this" inside the execution user object
        console.log(this) // prints {username: "hitesh", loginCount: 7, signedIn: true, getUserDetails: [Function: getUserDetails] } 
        
    }
}

console.log(user.username);

console.log(user.getUserDetails());


// NOTE: printing "this" in the global context

console.log(this) // prints {}

// NOTE: printing "this" in the browser global context

console.log(this) // prints window