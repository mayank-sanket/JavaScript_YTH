// Earlier there was no concept of classes then how did we use to do getter and setter in function object?



// function based syntax for getter and setter

function User(email, password){

    this._email = email; 
    this._password = password;

    // define properties of the function (function is also an Object)

    Object.defineProperty(this, 'email', {

        get: function (){

            return this._email.toUpperCase()

        }, 
        set : function(value){
            this._email = value;

        }
    } )


    Object.defineProperty(this, 'password', {
        get: function(){
            return this._password.concat("defGHI")
        },

        set: function(value){
            this.password = value;
        }
    })

    


}


const mayank = new User("mayank@gmail.com", "abc")

console.log(mayank.email);
console.log(mayank.password)





// Similarly, you can use object based syntax and add getters and setters there also similar to function based syntax




// in modern syntax, we use getter and setter method directly as there is a concept of classes now, but how did we use to do it earlier?





