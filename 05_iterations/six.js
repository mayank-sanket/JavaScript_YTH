const languages = ["Java", "Python", "JavaScript", "C++", "Rust", "Golang"]

languages.forEach((item)=>{
console.log(item)
})

// storing the forEach loop in a variable

const lng = languages.forEach((item)=>{
    console.log(item)
})

// what happens if you try to print it the variable named lng? what does it return?

console.log(lng) // prints undefined 

// then how to print the return value of the lng variable?

const lngg = languages.forEach((item)=>{
    return item;

})

console.log(lngg) // prints undefined

// THIS MEANS YOU CANNOT RETURN ANYTHING WITH forEach loop




// -----------------------------------------------------------------------------------------------


// you can define arrow functions like : 1.  ()=>{}  | 2. ()=>() | 3. ()=>     (third one when the function is single line)
// working with arrays using loops


// FILTER
//filter :  we pass a callback function (it maybe arrow function) inside the parameter of filter to get the desired result

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// myNums.filter(   (num)=>{num>5}   ) // filter those nums(any_name) which are greater than 5 | it returns those values (you can store in a variable)

const filteredNums = myNums.filter((nums)=> nums>5)  // same like above fxn (but stored in a variable so that it can be printed)

console.log(filteredNums) // [6, 7, 8, 9, 10]

// an interesting case: if you don't use inline arrow function and use { }

const filteredNums2 = myNums.filter((nums)=>{
    nums>5
})

console.log(filteredNums2) // prints [] only, why?

// because, if the callback arrow fxn is not inline (ie, scope or { } is used, we need to use the return keyword) | why? because in inline function, it assumes that you are returning the values but once you use scope, you have to emphasize on return keyword

const fltnms3 = myNums.filter((nums)=>{
    return nums>5
})

console.log(fltnms3)  // [ 6, 7, 8, 9, 10 ]


// using something like filter using forEach loop

const newNums = []
myNums.forEach((num) => {
    if(num>5){
       newNums.push(num)
    }
})

console.log(newNums) // [ 6, 7, 8, 9, 10 ]

// ______________________________________________________________________________________________


// AN IMPORTANT APPLICATION OF FILTER (something like database)

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

//   let userBooks = books.filter( (bk) => bk.genre === 'History') // if the callback fxn in inline, we don't need to use return keyword

  userBooks = books.filter( (bk) => {    // could have used let userBooks instead of userBooks but it has already been defined in line number 93 as let (now commented) | without let, it would work fine as well
    return bk.publish >= 1995 && bk.genre === "History"
})
  console.log(userBooks); 

/*
  [
  {
    title: 'Book Three',
    genre: 'History',
    publish: 1999,
    edition: 2007
  }
  ] 

*/