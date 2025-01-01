const scores = [100, 95, 95, 100, 95]
const initialValue3 = 0

const totalScore = scores.reduce((acc, currval)=>{
console.log(`Accumulator is ${acc} and the current value is ${currval}`)
return acc+currval
}, initialValue3)

// console.log(`                       and the net percentage is ${totalScore/5}`)