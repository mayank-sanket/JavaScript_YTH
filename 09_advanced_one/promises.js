
const promiseOne = new Promise(function(resolve, reject){
// do an async task
// DB calls, cryptography, network calls, etc

// for illustration, let's work with setTimeout here

setTimeout(function(){
    console.log('Async task is completed')
    resolve() // resolve function is called here 
}, 1000)

})

// .then is connected to resolve

promiseOne.then(function(){
    console.log("Promise consumed")
})





// -------------------------------------------

// another illustration

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async Task 2")
        resolve()
    }, 1000)
}).then(function(){
    console.log("Async 2 resolved")
})


// ==========================================

const promiseThree = new Promise(function(res, rej){
     setTimeout(function(){
     res({username: "Chai", email: "chai@example.com"})
     }, 1000)

})

promiseThree.then(function(user){
    console.log(user) // prints the object { username: 'Chai', email: 'chai@example.com' }

    // console.log(user.username) // prints Chai

})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        // let error = false;
        if(!error){
            resolve({username: "mayank-sanket", email: "mayanksanket@gmail.com", followers: 600, following: 459})
        }
        else{
            reject("ERROR: Something went wrong!")
        }

    }, 2000)
})

// promise chaining

promiseFour.then((user) => {
    console.log(user);
    return user.username;
}).then((usrnm)=>{
    console.log(usrnm) // should give mayank-sanket (if error = false)

}).catch(function(error){
    console.log(error)
}).finally(()=> console.log("The promise is either resolved or rejected"))



// =======================================================

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "javascript", password: "123@js"})
        }
        else{
            reject('ERROR: JS Went Wrong!')
        }
    }, 1000)
})

// async await
// here you must use try catch otherwise in case of error, you will face problems 

async function consumePromiseFive(){
    try{
        const repsonse = await promiseFive
    console.log(response)
    }
    catch(error){
        console.log(error);
    }
}

consumePromiseFive()

// another usage

async function getAllUsers(){
   try{
    const  response = await fetch('https://jsonplaceholder.typicode.com/users')



const data = await response.json() // you have to use await keyword here as well || this too takes a long time
   console.log(data)
   }
   catch(error){ 
    console.log("E:", error)
   }
}

getAllUsers()



// same thing using .then method



fetch('https://jsonplaceholder.typicode.com/users')
.then((response) =>{
    return response.json()
})
.catch((error) => console.log(error))
.then((data) => console.log(data))


// fetch - microtask queue | priority queue 
// fetch - higher priority