function addTwoNumbers(number1 , number2){
    let result = number1 + number2;
    return result;
}

const result = addTwoNumbers(3 , 5);
// console.log(result);


function logInUserMessage(userName){

    if(userName === undefined){
        console.log("Please enter the username");
        return;
    }

    return `${userName} just logged in`;
}

console.log(logInUserMessage("yash"));
