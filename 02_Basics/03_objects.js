//constructor => singleton
//literal => multiple objects

//Object Literal
const mySym = Symbol("key1")

// const JsUser = {
//     name: "Apoorva",fullname: "Apoorva Poojary",
//     age: 18,
//     email : "apoorvart@gmail.com",
//     [mySym]: "mySym1",
//     isLoggesin: false,
//     lastLoginDays: ["Monday", "Friday"]

// }

// console.log(JsUser.name)
// console.log(JsUser["fullname"])// 
// console.log(mySym)
// console.log([mySym])
// console.log(typeof JsUser.mySym)
// console.log(typeof JsUser[mySym])
const JsUser = {
    name: "Apoorva",fullname: "Apoorva Poojary",
    age: 18,
    email : "apoorvart@gmail.com",
    [mySym]: "mySym1",
    isLoggesin: false,
    lastLoginDays: ["Monday", "Friday"]

}


JsUser.email = "apoorva123@gmail.com"//overrides the original value
console.log(JsUser.email)

//Object.freeze(JsUser)//prevents any changes to the object
JsUser.email = "apoorva23@gmail.com"
console.log(JsUser)


// functions

// JsUser.greeting = function(){
//     console.log("hello Js User")
// }

// JsUser.greetingTwo = function(){
//     console.log(`hello Js User,${this.name}`)
// }

// console.log(JsUser)
// console.log(JsUser.greeting)
JsUser.greeting = function(){
    console.log("hello Js User")
}

JsUser.greetingTwo = function(){
    console.log(`hello Js User,${this.name}`)
}

console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())





