const accountId = 1777721  // cannot be changed (constant variable)
let accountEmail = "mayank@gmail.com"
var accountPassword = "x7ThalaForA_Reason"
accountCity = "Bhopal" //JS supports this way of creating variables also (not recommended tho)

// accountId = 234 // not allowed to change the value of a const (it will throw an error if you change the value of const)

accountEmail = "mayank2@gmail.com"
accountPassword = "ThalaForever"
accountCity = "New Delhi"  

// accountEmail, accountPassword, accountCity can be modified


// console.log(accountId)  // for this we have to use console.log() for every variable to get printed

console.table([accountId, accountEmail, accountPassword, accountCity]) // printing all variables at the same time in a tabular format with index numbers

/*
Prefer not using var
because of issues in block issues and functional issues
*/