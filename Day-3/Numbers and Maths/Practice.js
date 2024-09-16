// important formula for random
console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random() * 10) + 1);

const min = 10;
const max = 20;

//important formula for generate random number for game
console.log(Math.floor(Math.random() * (max - min + 1)) + min);


const score = 400;
console.log(score);

const balance = new Number(100);
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 123.8966;
//this method gives total number of the total number and in this total is 3 so answer
//is 124.
console.log(otherNumber.toPrecision(3));

const hunderds = 1000000
//By default it is as us standards
console.log(hunderds.toLocaleString('en-IN'));
