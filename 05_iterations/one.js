// for loop

for(let i =1; i<=10; i++){
    console.log(i)
} // prints 1 to 10

// console.log(i) // error because its scope is inside the loop only



// snippet A:
for(let i = 1; i<=10; i++){
    
    if(i==7){
        console.log("Thala for a reason")
    }

    console.log(i)
}


// snippet B: (notice the difference in the behaviour of both the codes)

for(let i = 1; i<=10; i++){
    
    console.log(i)
    if(i==7){
        console.log("Thala for a reason")
    }

    
}


// +++++++++++++++++++++

for(let i=1; i<=10; i++){
    console.log(`Outer loop value ${i}`)
    for(let j = 1; j<=10; j++){
        console.log(`Inner loop value ${j} and outer loop ${i}`)

    }
}

// +++++++++++++++
let myArray = ["mayank", "priyank", "sanket"]
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];

    console.log(element) 
    
} 



// avoid using the below code
let myArr= ["mayank", "priyank", "sanket"]
for (let index = 0; index <= myArr.length; index++) { // notice that <= is used and not <  (gives an extra undefined value)
    const element = myArr[index];

    console.log(element) 
    
} // prints mayank, priyank, sanket, and undefined    (in new lines)






// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// break and continue

for(let i = 1; i<=10; i++){
    console.log(i)
    if(i == 5){
        break;
    }
} // prints from 1 to 5

for(let i = 1; i<= 10; i++){
    
        if(i == 5){
            continue;  // notice that it is written above the print statement because we have to skip 5 (if we write it after the print statement then 5 will be printed before skipping )
        }

        console.log(i)
    }  // prints 1 to 10 except 5  (continue keyword is used to skip through an iteration)
