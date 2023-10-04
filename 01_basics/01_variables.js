const accountId = 144553
let accoutEmail = "naveen@gmail.com"
var accouintPassword = "12345"
accountCity = "Bangalore"
let accountState;

// accountId = 2 // not allowed
accoutEmail = "nb@nb.com"
accouintPassword = "45698"
accountCity = "Shimla"

/*
Prefer not to use var
Beacuse of issue in block scope and functional scope
*/

console.log(accountId);
console.table([accountId,accoutEmail,accouintPassword,accountCity,accountState])