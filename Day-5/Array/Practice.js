const marvel_heroes = ["thor" , "hulk" , "ironman"];
const dc_heroes = ["superman" , "flash" , "batman"];

//this gives array in array
// marvel_heroes.push(dc_heroes);
// console.log(marvel_heroes);

// const more_heroes = marvel_heroes.concat(dc_heroes);
// console.log(more_heroes);

const new_heroes = [...marvel_heroes , ...dc_heroes];
// console.log(new_heroes);


const another_array = [1 , 2 , 3 , [4 , 5 , 6] , [6 , 7 , [4 , 5]]];
const usable_array = another_array.flat(Infinity);
console.log(usable_array);


console.log(Array.isArray("yash"));
console.log(Array.from("yash"));
console.log(Array.from({name : "yash"}));//interesting


let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1 , score2 , score3));