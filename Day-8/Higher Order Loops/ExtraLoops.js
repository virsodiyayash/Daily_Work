const coding = ["js" , "ruby" , "java" , "python" , "cpp"];

//For Each loop doesn't return anything
// const values = coding.forEach((item) => {
//     console.log(item);
//     return item;
// })

// console.log(values);


const myNums = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10];

//if i write curly brackets the you have compulsory write return statement
//Because when we apply curly brackets then it return whole object 
//Scope needs return statement

// const newNums = myNums.filter((num) => {
//    return num > 4;
// })

//======================================================================================


// const newNums = myNums.filter((num) =>  num > 4)
// console.log(newNums);


// const newNums = [];

// myNums.forEach( (nums) => {
//     if(nums > 4){
//     newNums.push(nums);
//     }
// })

// console.log(newNums);



const myNumbers = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10];

// const newNumbs = myNumbers.map( (num) => num + 10);
// console.log(newNumbs);


//----------------------Chaining----------------------

const newNums = myNumbers
                        .map((num) => num * 10)
                        .map((num) => num + 1)
                        .filter((num) => num > 40);

console.log(newNums);                        