class User {
    constructor (email, password){
        this.email = email;
        this.password = password;

    }


    get email(){
        return this._email.toUpperCase()
    }

    set email(val){
        this._email = val;
    }




    get password(){
        return `${this._password}abcdef` // we added _ here at getter also as we used at setter
    }

    set password(val){
        this._password = val;  // it is recommended to add a underscore before the variable name --standard practice (easy to understand) you can also take any other name but it should be easy to  understand


        // note that the name of the setter as well as getter should be the same as the name of the property on which you are applying getter and setter
        
    }
}

const mayank = new User("m@gmail.com", 1334)

console.log(mayank.password)

console.log(mayank.email)