//conversion of data types in JavaScript
let score = "33abc"

console.log(typeof score);//  number
console.log(typeof(score));

let valueInNumber = Number(score);
console.log(typeof valueInNumber)
console.log(valueInNumber)
// "33" => number
// "33abc" => NaN (Not a Number)
// "abc" =>NaN
// undefined => NaN
// null => 0
// true => 1
// false => 0

let isLoggedIn = 1

let isLoggedInBoolean = Boolean(isLoggedIn)
 
console.log(isLoggedInBoolean)

// 1 => true;0 =>
// "" => false
//"Apoorva" = >true



