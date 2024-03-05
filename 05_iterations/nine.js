// see the reference of reduce on MDN website

// MDN snippet:
const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);

console.log(sumWithInitial);
// Expected output: 10

//_________________________________________________________________________________________

const numbers = [1, 2, 3]
// const initVal = 0
const totalsm = numbers.reduce((ac, currval)=> { return ac + currval}, 0) // here the callback fxn and 0 are two parameters of the reduce method  | we could have also started with any other value than zero by either storing it in a variable or by directly passing as argument:  || real life example: shopping cart, bills etc

console.log(totalsm) // prints 6


//---------------------

const numbers2  =[1, 3, 5]
const initialVal2 = 0

const totalSum2 = numbers2.reduce((acc, currval)=>{return acc + currval}, initialVal2) // here initialVal2 is the second parameter other than the callback function

console.log(totalSum2) // 9



// ---------------------------------- let's see an example with initial value not equal to 0, let's say the cart is not empty and items are added later (real life relation)

const Bill = [100, 200, 430]
const earlierBill = 120

const newBill = Bill.reduce((acc, currval) => acc+currval, earlierBill)

console.log(newBill)// prints 850




//--------------------------------------------------------------------------
// suppose you want to see the values of accumulator and current value at each iteration

const scores = [100, 95, 95, 100, 95]
const initialValue3 = 0

const totalScore = scores.reduce((acc, currval)=>{
console.log(`Accumulator is ${acc} and the current value is ${currval}`)
return acc+currval
}, initialValue3)

console.log(`                       and the net percentage is ${totalScore/5}`)




//-----------------------------------------------------------

// example 1 without arrow function (using callback function)

const scores2 = [10, 11, 12, 13]
const initval9 = 0

const totalscore2 = scores2.reduce(function(acc, currval) {return acc + currval}, initval9)
console.log(totalscore2); // 46

// ------------------------------------------------------------------------

// other good example of reduce 

const shoppingCart = [
    {
        itemName: "JavaScript Course", 
        price: 4000
    },
    {
        itemName: "Java Course", 
        price: 3000
    },
    {
        itemName: "Python Course", 
        price: 5000
    },

    {
        itemName: "Mobile Dev Course", 
        price: 5000
    },
    {
        itemName: "Blockchain Course", 
        price: 4000
    },
    {
        itemName: "DSA Course", 
        price: 4500
    }
]

const portalFee = 200 // iniital value (mandatory to pay)
const totalPayingAmt = shoppingCart.reduce((acc,item ) => acc + item.price, portalFee)

console.log(totalPayingAmt)