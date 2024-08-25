

let myName = "mayank     ";

console.log(myName.length); // prints 11

// console.log(myName.trim().length) // prints 6

// create a method to show the true length of the string (without using the 'trim' method directly)

// associate a method which does the task for all strings


// before that, let's do something with objects


let myHeros = ['thor', 'spiderman'];
let heroPower = {
    thor: "hammer", 
    spiderman: "sling",


    getSpiderPower: function(){
        console.log(`Spidey power is ${this.spiderman}`)
    }
}


// injecting method in the object

Object.prototype.mayank = function(){
    console.log(`mayank is present in all the objects`)
}



heroPower.mayank()

myHeros.mayank() // prints 'mayank is present in all the objects' 

// how? because Arrays are also Objects in JS and we have added the method to the top level hierarchy



Array.prototype.sanket = function (){
    console.log(`sanket is present in all arrays`)
}

myHeros.sanket()

// heroPower.sanket() // error because you added the method in all the the arrays and not all the objects 

// this would have worked if you had passed sanket function to all the Objects (in that case, it would have worked well with both Objects as well as Arrays)



//---------------------------------------


// INHERITANCE

const User = {
    name: "chai", 
    email: "chai@google.com"
}

const  Teacher = {
    makeVideo: true,


}

const TeachingSupport = {
    isAvailable: false,

}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport    // brings all the properties of TeachingSupport to TASupport

}

// the __proto__ can be used outside the object also using dot notation

Teacher.__proto__ = User; // now Teacher can access all the properties of User


// note: this kind of prototypal inheritance is a bit outdated

// modern syntax for this thing:

Object.setPrototypeOf(TeachingSupport, Teacher) // TeachingSupport accesses all the properties of Teacher



//=====================================================

// SOLUTION TO THE ASSIGNMENT:

let someString = "mayank           "


// assigning the property of trueLength to all the strings
String.prototype.trueLength = function(){
    
    console.log(this)  // [String: 'mayank        ']        


    console.log(`True length is ${this.trim().length}`)
}

someString.trueLength()


// now the trueLength method works on all strings

"testString             ".trueLength()  // [String: 'testString           '] True length is 10

"iceTea".trueLength()   // [String: 'iceTea']    True length is 6