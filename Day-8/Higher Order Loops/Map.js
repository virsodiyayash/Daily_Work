const map = new Map();

map.set('IN' , "India");
map.set('USA' , "United states of america");
map.set('FR' , "france");

console.log(map)

//This prints whole array 
// for (const key of map) {
//     console.log(key);
// }

//This prints personal key or value according to you select what will you prints
for (const [key , value] of map) {
    console.log(key , ":-" , value);
}

