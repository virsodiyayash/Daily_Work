const array = [ 1 , 2 , 3 , 4 , 5];

const initialValue = 0;

// const sumWithArray = array.reduce(
//     (acc , currentValue) => acc + currentValue,initialValue
// );

const sumWithArray = array.reduce( (acc , currentValue) => {
    return acc + currentValue;
} , 0)

console.log(sumWithArray);