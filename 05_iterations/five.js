const coding = ["js", "py", "cpp", "java"]

// forEach comes with default in array: the moment you press dot after the name of array you get multiple suggestions

coding.forEach(function(item){  // the parameter that we passed here can be named anything, like item, value, val, etc as the fxn knows you are working with the array

    console.log(item) // prints the elements of the array

})

coding.forEach(function(val){  // parameter name can be anything
    console.log(`This index holds the value ${val}`)
})


// we can also use for each loop with arrow functions instead of callback functions, how? because even if we use callback in for each loop, we don't have to name the fxn, and in for each loop, you can use arrow fxn without naming it


coding.forEach((itm)=>{
    console.log(itm) // prints js, py, cpp, java (in new lines)
})

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// FUN

function printMe(item){
    console.log(item) 

}

// we can reference this function in a for each loop (note that we don't have to call this function but only give its reference in the for each loop)

coding.forEach(printMe) // prints the elements: js, py, cpp, java (in new lines)

// note: don't write like this: coding.forEach(printMe()) // because you are not calling the fuction, you are just giving the reference



// --------------------------------------------------------------------------------------------


// working with more parameters in the function of forEach loop

coding.forEach((item, ind)=>{ // name can be anything, item, itm; ind, index; etc
    console.log(item, ind)  // prints
    /*

js 0
py 1
cpp 2
java 3

    */
})

coding.forEach((itm, indx, arr)=>{ // again any name can be given to the parameters
    console.log(itm, indx, arr)

    /**
js 0 [ 'js', 'py', 'cpp', 'java' ]
py 1 [ 'js', 'py', 'cpp', 'java' ]
cpp 2 [ 'js', 'py', 'cpp', 'java' ]
java 3 [ 'js', 'py', 'cpp', 'java' ]
     */


})



// ------------------------------------------------------------------------------------------------------

// array with multiple objects as elements   | an important foundation for database

const  myCoding= [
    {
       languageName:"JavaScript", 
       fileName: "js"
    },
    {
        languageName:"Java", 
        fileName: "java"
    },
    {
        languageName:"Python", 
        fileName: "py"

    }
]


myCoding.forEach((itemitm)=>{
    // console.log(itemitm.languageName) 
    // console.log(itemitm.fileName) 

    console.log(itemitm.languageName, ":", itemitm.fileName)

    /*
JavaScript : js
Java : java
Python : py
    
    */
})

