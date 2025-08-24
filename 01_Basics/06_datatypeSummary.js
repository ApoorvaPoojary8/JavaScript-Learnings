//Primitive datatypes
//7 in total:String,Number,Boolean,null,undefined,Symbol,BigInt

const score = 100;//Number
const score2 =100.2;

const isLoggedIn = true;
const isLoggedIn2 = false;//Boolean
const state = null;//null is a standalone value, it is not an object
let useEmail;//undefined
let username = "Apoorva";//String

const id = Symbol("123");//Symbol is a unique value, 
const anotherId = Symbol("123")

console.log(id === anotherId) //false, because symbols are unique
const bigNumber = 1234567890123456789012345678901234567890n;//BigInt



//Reference Type(Non-primitive datatypes)
//Arrays,Objects,Functions


const heros = ["shaktiman","nagraj","doga"];//Array

let myObject = {//Object
    name :"Apoorva",
    age : 20
}

const myFunction = function(){
    console.log("Hello i am Learning JS");
}//object function

console.log(typeof heros)




//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Memory
//Stack (Primitive types) and Heap(Non-primitive types)
//stack gives copy of the value and Heap gives reference of the value
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++
let myYoutubechannel = "Hitesh "
let anotherchannel = myYoutubechannel
anotherchannel = "CodewithHitesh"
console.log(myYoutubechannel);

console.log(anotherchannel);//Hitesh


let userOne ={
    name: "Apoorva",
    email:"apoorva89@gmail.com"
}
let userTwo = userOne
userOne.email = "prashanth.com"

console.log(userTwo)
console.log(userOne.email)
console.log(userTwo.email)




