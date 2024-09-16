let val1;

// val1 = 5 ?? 10 => 5
// val1 = null ?? 10 => 10
// val1 = undefined ?? 15 => 15

val1 = null ?? 10 ?? 20 // => 10 only gets first number

console.log(3 - "3.0");