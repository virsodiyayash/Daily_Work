// const promiseOne = new Promise((resolve , reject) => {
//     //Do an async task
//     //DB calls , cryptoGraphy , networkCall 

//     setTimeout(() => {
//         console.log('Async task is complete');
//         resolve();
//     }, 1000)
// })

// promiseOne.then(() => {
//     console.log("Promise consumed");
// })

// new Promise((resolve , reject) => {
//     setTimeout(() => {
//         console.log('Async task 2');
//         resolve();
//     } , 1000)
// }).then(() => {
//     console.log("My promise is completed");
// })


// const promiseThree = new Promise((resolve , reject) => {
//     setTimeout(() => {
//         resolve({userName : "yash" , email : "yashpatel@google.com"})
//     }, 1000)
// })

// promiseThree.then((user) => {
//     console.log(user);
// })


// const promiseFour = new Promise((resolve , reject) => {
//     setTimeout(() => {
//         const error = false;

//         if(!error) {
//             resolve({username : "yash" , password : "123"});
//         }

//         else{
//             reject('Something went wrong');
//         }
//     }, 1000);
// })

// promiseFour.then((user) => {
//     console.log(user);
//     return user.username;
// }).then((username) => {
//     console.log(username);
// }).catch((err) => {
//     console.log(err);
// }).finally(() => {
//     console.log('The promise is finally resolved or rejected');
// })


// const promiseFive = new Promise((resolve , reject) => {
//     const error = true;

//     if(!error){
//         resolve({username : "Hello by javascript" , password : "123"});
//     }

//     else{
//         reject("Something went wrong");
//     }
// });

// async function consumePromiseFive(){
//     try{
//         const response = await promiseFive;
//         console.log(response);
//     }
//     catch(error){
//         console.log(error);
//     }
// }

// consumePromiseFive();


// async function getAllUsers() {
//         try{
//             const response = await fetch('https://jsonplaceholder.typicode.com/users');
//             const data = await response.json();
//             console.log(data);
//         }
//         catch(error){
//             console.log('E',error);
//         }         
// }

// getAllUsers();


fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json();
})
.then((response) => {
    console.log(response);
})
.catch((error) => {
    console.log(error);
});
