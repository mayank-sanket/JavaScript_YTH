// let [min, max] = [10, 20]

// console.log(Math.floor(Math.random()*(max -min + 1) + min))  

const course = {
    courseName: "JavaScript in Hindi",
    price: 999,
    courseInstructor: "Hitesh Choudhary"

}



let newcourse = {...course}
newcourse.courseName = "React in Hindi"

console.log(course.courseName)