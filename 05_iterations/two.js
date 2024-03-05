// while loops

let index = 0
while(index<=10){
    console.log(`Value of index is ${index}`)
    index += 2; 
}  // 0, 2, 4, 6, 8, 10


let myArr = ["mayank", "priyank", "sanket"]
let arrindex = 0
while(arrindex<myArr.length){
    console.log(myArr[arrindex])
    arrindex++
} // mayank, priyank, sanket (in new lines)


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// do - while loops

let score = 1

do{
    console.log(`Your score is ${score}`)
    score++


}
while(score<=100)


let scr = 11

do {
    console.log(`Your score is ${scr}`)
    score--
    
} while (scr>15); // even though the condition is not true, the do - while loop runs at least once