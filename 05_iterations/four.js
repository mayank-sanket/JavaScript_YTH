
const myObject = {
    js: 'JavaScript',
    cpp: 'C++',
    rb: 'Ruby',
    py: 'Python'
}

// for in loop

for (const key in myObject) { 
    // if (Object.hasOwnProperty.call(object, key)) {
    //     const element = object[key];
        
    // } //this if statement comes by default, no need to use it
    
    console.log(key) // prints js, cpp, rb, py (in new lines)

    console.log(myObject[key]) // prints JavaScript, C++, Ruby, Python (in new lines)

    // printing in string 
    console.log(`${key} is the shortcut for ${myObject[key]}`)  // cpp is the shortcut for C++ ...... (and similarly) in new lines


}


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// can we use for in loop with arrays?

const languages = ["Java", "Python", "JavaScript", "C++", "Rust"]

for (const key in languages) {
    console.log(key) // prints the keys (ie, 0, 1, 2, 3, 4)  // key in array is analogous to index

}

// for(const [key, value] in languages){
//     console.log(key, " : ", value)
// }

// CAN'T USE THE ABOVE       (as it gives something like----     0: undefined, 1: undefined, etc (in new lines))

// how to print the values present at particular indexes (keys) then?

for (const key in languages) {
   console.log(languages[key]) 
   /*
   prints : 

Java
Python
JavaScript
C++
Rust
   */
}




// for in loops with maps - does it work?


const map = new Map() 
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India") // it won't get printed, only the first one will get printed

console.log(map)

/*
Map(3) {
  'IN' => 'India',
  'USA' => 'United States of America',
  'Fr' => 'France'
}
*/

// note: map is not iteratable with for in loop
for (const key in map) {
    console.log(key) // prints nothing
    
}



