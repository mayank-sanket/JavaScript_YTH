const accountId = 1777721  // cannot be changed (constant variable)
let accountEmail = "mayank@gmail.com"
var accountPassword = "x7ThalaForA_Reason"
accountCity = "Bhopal" //JS supports this way of creating variables also (not recommended tho)


// accountState;    // this will throw an error
let accountState; // this variable is just declared and has no value. if you print this, it will print "undefined"


// accountId = 234 // not allowed to change the value of a const (it will throw an error if you change the value of const)

accountEmail = "mayank2@gmail.com"
accountPassword = "ThalaForever"
accountCity = "New Delhi"  

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]) // printing all variables at the same time in a tabular format with index numbers
