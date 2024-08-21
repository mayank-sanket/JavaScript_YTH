let count  = 0;
let str = "string zxc";
let len = str.length;

let fxn = function(str){
    for(let i=0; i<len; i++){
        if(str[i] === " ") continue;
        else{
            count++;
        }


    }
    console.log(count)
}
fxn(str)

