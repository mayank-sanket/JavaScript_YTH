// try printing an array in the console of the browser to see various prototypes

const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

marvel_heros.push(dc_heros) // pushing  array inside an array
// it does not merge the arrays, it puths the other array inside the main array

console.log(marvel_heros); // [ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

// here the other array is treated as a single element inside the main array

console.log(marvel_heros[3]); // ['superman', 'flash', 'batman']
console.log(marvel_heros[3][2]); // prints batman

console.log("newline")


// ++++++++++++++++ concat method +++++++++++++


const indoor = ["chess", "ludo"]
const outdoor = ["cricket", "football"]

const allGames = indoor.concat(outdoor) // joins both the arrays

console.log(allGames);  // [ 'chess', 'ludo', 'cricket', 'football' ]


//++++++++++++++++++++++ spread method ++++++++++++++++++++

const mumbai = ["rohit", "hardik", "bumrah"]
const chennai = ["dhoni", "raina", "shardul"]

const ipl_final = [...mumbai, ...chennai]  // spread method (using 3 dots) | it combines all the individual elements of the array to form a new array
console.log(ipl_final);  // [ 'rohit', 'hardik', 'bumrah', 'dhoni', 'raina', 'shardul' ]

// spread method is more preferred over concat method | why? because concat has some limitations eg arr1.concat(arr2) but : spread has no such limitation, eg: [...arr1, ...arr2, ...arr3, ...arr4] and so on

// other things

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]


// const usable_another_array = another_array.flat(1)

// const usable_another_array = another_array.flat(2)


const usable_another_array = another_array.flat(Infinity) // pass the depth as parameter | hack: use Infinity so that you don't have to count the depth

// returns a new array with all sub-array elements concatenated into it recursively up to the specified depth

console.log(usable_another_array);


// other things

console.log((Array.isArray("Mayank")))  // prints false

console.log(Array.from("Mayank"));  // [ 'M', 'a', 'y', 'a', 'n', 'k' ]


// interesting case (highly used in projects)
console.log(Array.from({name: "monkey"})) // prints [] because you did not specify whose array you want, of keys or of values


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // returns a new array from a set of elements || prints [ 100, 200, 300 ]

