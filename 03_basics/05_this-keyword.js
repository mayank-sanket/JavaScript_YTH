// to study more about "this" when we study about prototypes

// "this" tells about the current context

const user = {
    username: "mayank",
    price: 999,
    welcomeMessage: function(){
        // console.log(`Hey ${username}, welcome to the website.`) // wrong
        console.log(`Hello ${this.username}, welcome to the website.`) // refers to the current context (which is the curly bracket)


        // seeing the context
        console.log(this)  // prints the object as the context { username: '---- (sam or mayank - depending on whether executed after modifying the value of user.username or before modifying the value of user.username)', price: 999, welcomeMessage: [Function:welcomeMessage]} -- 
    }
}

user.welcomeMessage() // prints Hello mayank, welcome to the website

// but what if someone changes the value of username

user.username = "sam" // here we changed the context

user.welcomeMessage() // prints - Hello sam, welcome to the website | also Hello mayank, welcome to the website (due to the upper code)


// what if?
console.log(this)  // prints {} (empty object) on Node environment | but on browser, it will print the Window as the context -- In the browser, the global object is Window