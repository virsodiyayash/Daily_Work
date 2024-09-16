const user = {
    username : 'yash',
    loginCount : 8,
    signedIn : true,

    getUserDetails : function(){
        console.log(`userName : ${this.username}`);
    }
}

console.log(user.username);
console.log(user.getUserDetails());