//singleton
//object.create

//object literals'

const mySmb = Symbol("key1");

const JsUser = {
    name : "yash",
    age : 18,
    [mySmb] : "myKey1",
    location : "lalpur",
    email : "yash@google.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday" , "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser[mySmb]);

JsUser.greeting = function(){
    console.log("Hello JS User");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
