const accountID = 123456
let accountEmail = "Omkar@gmail.com"
var accountPassword = "1234"
accountCity = "Mumbai" // this is possible but not allowed
let accoundState;
// accoundID = 2 //not allowed

accountEmail = "ol@gmail.com"
accountPassword = "23456789"
accountCity = "Pune"

console.log(accountID)

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountID, accountEmail, accountPassword, accountCity, accoundState])