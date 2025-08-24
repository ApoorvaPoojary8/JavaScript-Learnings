//Dates

let myDate = new Date()
//console.log(myDate)

console.log(myDate.toString())
// console.log(myDate.toLocaleString)
// console.log(myDate.toDateString)
// console.log(myDate.toISOString)
// console.log(myDate.toLocaleTimeString)
// console.log(myDate.toUTCString)


console.log(typeof myDate)

//let myCreateDate = new Date(2025,0,23)
//let myCreateDate = new Date(2025,0,23,5,3)
//console.log(myCreateDate.toLocaleString());

//let myCreateDate = new Date("2025-05-14")
let myCreateDate = new Date("01-12-2025")
//console.log(myCreateDate.toLocaleString());


let myTimeStamp = Date.now()

// console.log(myTimeStamp)

// console.log(myCreateDate.getTime())

//console.log(Math.floor(Date.now()/1000))asked in interviews frequently


let newdate = new Date()
console.log(newdate)
console.log(newdate.getDate())
console.log(newdate.getMonth())

// console.log(`${newdate.getDay()} and the time`)

//very useful methods

newdate.toLocaleString('default',{
    weekday:"long",

})












