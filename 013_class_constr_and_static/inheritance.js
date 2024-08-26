class User {
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`)
    }
}


class Teacher extends User{

    // this constructor will overwrite the existing one
    constructor(username, email, password){

       super(username) // gets the property/behaviour from the parent class
        this.email = email;
        this.password = password;
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`)
    }
}

const Hitesh = new Teacher("Hitesh Choudhary", "hitesh@gmail.com", "hitesh123")

Hitesh.addCourse()


const randomTeacher = new User("randomBhaiya")

// randomTeacher.addCourse() // error (because it does not have access to addCourse method)


// ==========
console.log(Hitesh === Teacher) // false

console.log(Hitesh instanceof Teacher) // true

console.log(Hitesh instanceof User) // true