// Dates in JS
// read more: MDN docs
// JS Date objects represent a single moment in time in a platform-independent format. Date objects encapsulate an integral number that represents milliseconds since jan 1, 1970
// January 1, 1970 UTC  | milliseconds since then

// the default Date and Time feature on JS is a pain point
// TC39 is working on "Temporal: a new Date/Time API" : (not done as of 02/02/24) -- read more on MDN docs


let myDate = new Date() // myDate is an instance of Date()

console.log(myDate); // prints a date object like: 2024-02--02T02:22:01.513Z

console.log(typeof myDate); // object
console.log(typeof Date()); // string
console.log(typeof Date);// // function

// doing things with myDate
console.log(myDate.toString()) // prints like: Fri Feb 02 2024 07:55:07 GMT+0530 (India Standard Time) -- in my system | 

// in Hitesh Sir's system, it did wrt the GMT, i.e: GMT+0000 (Coordinated Universal Time)

// doing more (the important ones are: toDateString, toISOString, toJSON, toLocaleDateString, toLocaleString, toLocaleTimeString)




console.log(myDate.toString()); // Fri Feb 02 2024 08:03:44 GMT+0530 (India Standard Time)
console.log(myDate.toLocaleString()); // 2/2/2024, 8:03:44 AM
console.log(myDate.toDateString());   // Fri Feb 02 2024
console.log(myDate.toISOString());    // 2024-02-02T02:33:44.364Z
console.log(myDate.toJSON());          // 2024-02-02T02:33:44.364Z
console.log(myDate.toLocaleDateString());  // 2/2/2024
console.log(myDate.toTimeString());  // 08:03:44 GMT+0530 (India Standard Time)
console.log(myDate.toUTCString());  // Fri, 02 Feb 2024 02:33:44 GMT

// ++++++++++++++++++++++++++ Playing +++++++

console.log("newline")
let myCreatedDate = new Date(2023,0, 23)
console.log(myCreatedDate);  // 2023-01-22T18:30:00.000Z
console.log(myCreatedDate.toDateString()); // Mon Jan 23 2023  (notice, here month started with 0, ie January = 0)

let myCreatedDate2 = new Date(2023, 0, 23, 5, 3)
console.log(myCreatedDate2.toLocaleString()); // 1/23/2023, 5:03:00 AM

let myCreatedDate3 = new Date(2023, 0, 23, 5, 3, 2) // will give error if you write double 0 instead of single
console.log(myCreatedDate3.toLocaleString());  // 1/23/2023, 5:03:02 AM


// another format to input date:

// let myCreatedDate4 = new Date("2023-00-14") //yyyy-mm-dd
// console.log(myCreatedDate4.toLocaleString()) // invalid date (here, it won't work with 00)

let myCreatedDate4 = new Date("2023-01-14") // yyyy-mm-dd
console.log(myCreatedDate4.toLocaleString()) // 1/14/2023, 5:30:00 AM

let myCreatedDate5 = new Date("2023-02-25")
console.log(myCreatedDate5.toLocaleDateString());  // 2/25/2023

//mm-dd-yyyy

let myCreatedDate6 = new Date("01-14-2024")
console.log(myCreatedDate6.toLocaleString()); // 1/14/2024, 12:00:00 AM 


// let myCreatedDate7 = new Date("23-01-2023") // doesn't work (invalid)
// console.log(myCreatedDate7.toLocaleString()); // invalid date

// +++++++++++++++++++++++++++++++++++++++++++++++++++

// Timestamps in JS

// applications of using this: exact timestamp type problems such as Quiz first position, polls ticket booking, etc

let myTimeStamp = Date.now()
console.log(myTimeStamp); // something like: 1706843009901 (milliseconds since 01 jan 1970)

console.log(myCreatedDate6.getTime()); // something like: 1705170600000 (milliseconds since the time declared in the variable myCreatedDate)
// significance of this thing: in making apps such as ticket booking etc

// convert this value that you get in milliseconds into seconds
console.log(Date.now()/1000) // 1706843308.566  // line 84

// or
console.log(myTimeStamp/1000) // 1706843376.555 (since line number 87 does the console.log after the line 84, therefore, this value is smaller than what we get in line 84)


// to avoid the decimal values (point something) in above printing:
console.log(Math.floor(myTimeStamp/1000))


// some more things:

let myCreatedDate9  = new Date("2019-02-23") // 2019, feb, 23

let myNewTimeStamp = myCreatedDate9.getTime() 

console.log(myNewTimeStamp); 1550880000000 // line 100
// OR
console.log(myCreatedDate9.getTime()) // same as line 100


// doing more: 

let newDate = new Date()
console.log(newDate.getMonth()); // prints 1 (because I am in February month right now: 0 based indexing here)

console.log(newDate.getDay()); // prints 5 on Friday (02 feb 2024)(M, t, w, th, fr, sat, sun)



// 
// important: defing custom LocaleString by using string
newDate.toLocaleString('default',{ // google more on 'default' here
weekday: "long" // other options: "narrow", etc // to print like "Monday" or "Mon" depending on the case: 



// timeZone: '' // commented
})

// to get suggestions, press control + space in the declared blank object after the 'default' thing

console.log("newline")

// this topic requies googling and all, therefore you don't need to be a master in it, learn the basics and with time, you'll automatically learn advanced things as you practice stuff