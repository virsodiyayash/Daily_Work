const accountId = 144553;
let accountEmail = "yash@google.com";
var accountPassword = "12345";
accountCity = "rajkot";
let accountState;

//accountId = 2;
// We can't assign the value second time to const variables
console.log(accountId);

/*
prefer not to use var 
because of issue in bloke scope and functional scope
*/

accountEmail = "ab@ac.com";
accountPassword = "312121";
accountCity = "jamnagar";

console.table([accountId , accountEmail , accountPassword , accountCity , accountState]);
