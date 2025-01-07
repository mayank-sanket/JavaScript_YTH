const course = {
    courseName: "JavaScript in Hindi",
    price: 999,
    courseInstructor: "Hitesh Choudhary"

}

console.log(course.courseInstructor) // Hitesh Choudhary
// or
// console.log(course["courseInstructor"]) // Hitesh Choudhary


// q: you want to get the name of the course instructor by destructuring the object

// Destructuring using {}

// 
const {courseInstructor} = course

const {courseName, price} = course
console.log(courseName) // JavaScript in Hindi
console.log(courseInstructor) // Hitesh Choudhary


// setting aliases

const {courseInstructor: inst} = course
console.log(inst) // prints Hitesh Choudhary



// application in React -- ignore this example right now

/*

const navbar = (props.company) => {

}
navbar(company = "facebook")


-----
but we can directly use destructuring like this to pass props: 

navbar({company}) =>{
    
    }

navbar(company = "facebook")
*/

