function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    return this;   // it is optional as it is implicitly there but use it for understanding
}

function Student(name, rollno, present){
    this.name = name;
    this.rollno = rollno;
    this.present = present;
    return this;
}

const UserOne = User("mayank", 3, false);
console.log(UserOne); // prints the object with some extra information also

// console.log(UserOne.isLoggedIn) 


const UserTwo = User("hitesh", 2, true);
console.log(UserOne); // UserTwo over-writes UserOne

// this is the reason we use new keyword for creating an instance

const studentOne = new Student("mayank", 1, true);
const studentTwo = new Student("priyank", 2, true);

console.log(studentOne.name);
console.log(studentTwo.name);


function Teacher(name){
    this.name = name;

    this.greeting = function(){
        return (`Good morning ${this.name} Sir!`)
    };

    return this;
}



// read more about instanceof, and constructors on MDN

// eg: 
// console.log(Teacher.constructor);

