// array with strings ["dkdk", "kkk", "d", ""]
// array with objects [{}, {}, {}]

// for of loop

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
   console.log(num) // prints 1 to 5 in new lines
   
    
}

const str = "Hello Mayank!"
for (const s of str) {
    console.log(s) // prints all the characters of the string "Hello Mayank" in new lines (also the space character)
    
}

const str2 = "hello mayank"
for(const s of str2){
    
    if(s==" ") break;
    console.log(s) // prints the characters till hello only (in new lines) and does not print the characters of mayank
}


// ++++++++++++++++++++++++++++++++++++++


// Maps : read more on MDN docs
const map = new Map() // repetitions are not allowed here (values are unique) | order matters
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")  // since this is repeated, this does not get printed when we try to print the entire map (printed only one time)

console.log(map) 
/*
prints 

Map(3) {
  'IN' => 'India',
  'USA' => 'United States of America',
  'Fr' => 'France'
}

*/

// for of loop in maps
for (const key of map) {
    console.log(key) // prints as array
    /*
[ 'IN', 'India' ]
[ 'USA', 'United States of America' ]
[ 'Fr', 'France' ]
    
    */
}
// how to print as key value pairs?

for(const [key, value] of map){ // destructuring the array by using [key, value]
    console.log(key, " :- ", value)

    /** prints (not as an array like the above one)
IN  :-  India
USA  :-  United States of America
Fr  :-  France
     */
}
    

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// for of loop in objects

// const myObj = {
//     'game1': 'NFS',
//     'game2': 'Spiderman'

// }

// for (const [key, value] of myObj) { // name does not matter (you can use any name instead of key and value)
//     console.log(key, "=>", value)
    
// }  

// the above snippet will give error as objects are not iteratable like maps. to iterate through objects, there are other ways (for of does not work with objects)