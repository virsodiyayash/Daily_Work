function calculateCartPrice(...num){
    return num;
}

// console.log(calculateCartPrice(200 , 400 , 600));


const user = {
    userName : "yash",
    price : 199
};

function handleObject(anyObject){
    console.log(`username is ${anyObject.userName} and price is ${anyObject.price}`)
}

handleObject(user);