// result of any comparision expression is in boolean
// additional note: TypeScript doesn't allow you to compare data of two different types


console.log((3<5)) // prints true
console.log(typeof (2<3)) // prints boolean

console.log("3">2) // prints true (JS automatically converted string to number)
console.log("009">9) // prints false (as "009" when converted to number equals 9)

// avoid such comparisions: 
console.log(null > 0); // false
console.log(null < 0);  // false
console.log(null == 0); // false
console.log(null >= 0); // true
console.log(null<= 0); // true

// the reason is that comparisions: >, <, >=, <= and equality check (==) work differently | comparisions convert null to a number treating it as 0

// avoid such comparisions

console.log(undefined == 0) // false
console.log(undefined >= 0)  // false
console.log(undefined <= 0)  // false
console.log(undefined > 0)  // false
console.log(undefined < 0) // false

// STRICT CHECK (===)
console.log("3" == 3) // true
console.log("9" === 9) // false  (as it also checks the data type)
  























