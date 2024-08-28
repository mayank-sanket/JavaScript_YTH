// error prone code 

class User {
    constructor(email, password){
        this.email = email;
        this.password = password;
    }

    get password(){
        return this.password.toUpperCase()
    }
    
    set password(val){
        this.password = val

    }

}


const mayank = new User("mayanksanket@gmail.com", 123)


// console.log(mayank.password) // 123

// what if you don't want to give the access of some property such as password, how to do this


// note: whatever property you define in an object you have getter and setter methods for that property by default in JS, you can use them if you need them

// along with getter, you have to use setter also, otherwise you will get an error



// ISSUE WITH THE ABOVE CODE: stack overflow (Maximum call stack size exceeded at set password [as password]) because you are trying to do everything like constructor, getter, setter ath the same time with the same property 'password'

// in order to avoid this -----> contd(next file)





