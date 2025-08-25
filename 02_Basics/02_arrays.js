const marvel_heros = ["thor","Ironman","spiderman"]

const dc_heros = ["superman","batman","flash"]


//marvel_heros.push("hulk")
// marvel_heros.push(dc_heros)

// console.log(marvel_heros)//creates array inside a array

// console.log(marvel_heros[3][1])

// const allHeros = marvel_heros.concat(dc_heros)
//console.log(allHeros)

const allHeros2 = [...marvel_heros, ...dc_heros]
//console.log(allHeros2)
const another_array = [1 ,2 , 3 ,[ 4 , 5, 6],7 ,[6, 7 ,[ 4 , 5 ]]]
const real_array = another_array.flat(Infinity)
console.log(real_array)



console.log(Array.isArray("Apoorva"))//false
console.log(Array.from("Apoorva"))
console.log(Array.from({name : "Apoorva"}))//[] // intresting case in interview


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3))//[ 100, 200, 300 ]// intresting case in interview


