class User {
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`Username is ${this.username}`)
    }


// 'static' keyword prevents the access of the method by instances

static createId(){
    return `123`
}

}

const mayank = new User("mayank");

// console.log(mayank.createId());


class Teacher extends User{
    constructor(username, email){
        super(username);
        this.email = email;
    }
}

const hitesh = new Teacher("hitesh choudhary", "hitesh@gmail.com");

hitesh.logMe() // it should work as hitesh in an instance of User