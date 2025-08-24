const score =  100;
console.log(score);


const balance = new Number(100)
console.log(balance);


console.log(balance.toString().length)
console.log(balance.toFixed(3));// this method is very useful while doing e commerce application

const otherNumber = 123.63471

console.log(otherNumber.toPrecision(3))

const hundreds = 100000000

//console.log(hundreds.toLocaleString());// 1,00,00,000 in india and 10,000,000 in US

console.log(hundreds.toLocaleString('en-IN'))

//++++++++++++++++++++++ Math +++++++++++++++++++++++++++

// console.log(Math)
// console.log(Math.abs(-4))
// console.log(Math.round(4.5))
// console.log(Math.floor(4.5))
// console.log(Math.ceil(4.5))
// console.log(Math.min(4,7,9,0,-3))

// console.log(Math.max(4,7,9,0,-3))

console.log(Math.random())// gives random number between 0 and 1

console.log(Math.random()*10)// gives random number between 0 and 10;
//If it was 0.7, after ×10 it becomes 7.

//If it was 0.95, after ×10 it becomes 9.5.

console.log((Math.random()*10)+1) // gives random number between 1 and 10
console.log(Math.floor(Math.random()*10)+1)
//If it was 5.3, now it becomes 6.3.

//If it was 9.9, now it becomes 10.9.

const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max-min+1))+min)

