// ES6 afterwards

class User {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword(){
        return `${this.password}abc`
    }

    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}


const chai = new User("chai", "chai@gmail.com", 123);

console.log(chai.encryptPassword()); // 123abc

console.log(chai.changeUsername()); // CHAI


//  BEHIND THE SCENES:


function User2(username, email, password){

  this.username = username;
   this.password = password;
   this.email = email;

}


User2.prototype.encryptPassword = function(){
    return `${this.password}abc`
}

User2.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}


const tea = new User2("tea", "tea@gmail.com", "kjdkfjd");

console.log(tea.changeUsername())

console.log(tea.encryptPassword())