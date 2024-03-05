// bad example (without break statement)

const month = 3
switch(month){
    case 1: 
    console.log("January")

    case 2: 
    console.log("February")

    case 3: 
    console.log("March")

    case 4:
    console.log("April")

    default:
        console.log("DJKFJDKLFJDKLFJDK")

}
// the above code wil print March in one line April in the next and DJKFJDKLF... in the next (in the next line because there is no break statement)

const day = 4
switch (day) {
    case 1:
        console.log("Monday")
        break;
    case 2:
        console.log("Tuesday")
        break;
    case 3:
        console.log("Wednesday")
        break;
    case 4:
        console.log("Thursday")
        break;
    case 5:
        console.log("Friday")
        break;
    case 6:
        console.log("Saturday")
        break;
    case 7:
        console.log("Sunday")
        break;
    default:
        console.log("Not a valid day")
        break;
}

// switch cases with strings

const mnt = "mar"
switch (mnt) {
    case "jan":
        console.log("January")
        
        break;
    case "feb":
        console.log("February")
        
        break;
    case "mar":
        console.log("March")
        
        break;
    
        
       
        

    default:
        console.log("dklfjdklfjdkfj")
        break;
}