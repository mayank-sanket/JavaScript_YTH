// getter and setter in traditional way using Object syntax 

// very rare

const User = {

    _email: "m@gmail.com", 
    _password: "abc",



    get email(){

        return this._email.toUpperCase()

    },

    set email(val){
        this._email = val;

    },

    get password(){
        return this._password.concat("12312DEF")
    },

    set password(val){
        this._password = val;
    }
}


// something similar to new keyword but in Objects

const mayank = Object.create(User)
console.log(mayank.email);
console.log(mayank.password);