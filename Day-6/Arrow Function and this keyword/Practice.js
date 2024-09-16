const user = {
    username : "yash",
    price : 999,
    welcomeMessage : function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage();
// user.username = "hello"
// user.welcomeMessage();

// console.log(this);

// function chai(){
//     console.log(this);
// }

// chai()

// const chai = () => {
//     const username = "yash";
//     console.log(username);
// }

// chai();

// const addTwo = (num1 , num2) => {
//     return num1 + num2
// }

// const addTwo = (num1 , num2) => num1 + num2;
// const addTwo = (num1 , num2) => (num1 + num2);
const addTwo = (num1 , num2) => ({username : "yash"});

console.log(addTwo(3 , 4));