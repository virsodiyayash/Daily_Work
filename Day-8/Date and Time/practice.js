// const myDate = new Date();
// console.log(myDate);//24-08-29T17:23:41.884Z
// console.log(myDate.toString());//Thu Aug 29 2024 22:53:41 GMT+0530(India Standard)
// console.log(myDate.toDateString());//Thu Aug 29 2024
// console.log(myDate.toISOString());//2024-08-29T17:23:41.884Z
// console.log(myDate.toJSON());//2024-08-29T17:23:41.884Z
// console.log(myDate.toLocaleString());//29/8/2024 , 10:53:41 pm
// console.log(myDate.toLocaleDateString());//29/8/2024
// console.log(myDate.toLocaleTimeString());//10:53:41 pm


// const createdDate = new Date(2023 , 0 , 23);//Mon Jan 23 2023
// const createdDate = new Date(2023 , 0 , 23 , 5 , 3);//23/1/2023, 5:03:00 am
// const createdDate = new Date("2023-01-14");//14/1/2023, 5:30:00 am
const createdDate = new Date("01-14-2023");
// console.log(createdDate.toLocaleString());


let myTimeStamp = Date.now();

console.log(myTimeStamp);
console.log(createdDate.getTime());