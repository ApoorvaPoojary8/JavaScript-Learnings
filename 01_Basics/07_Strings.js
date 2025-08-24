const name = "Apoorva"

const repoCount = 11

//console.log(name + repoCount + " value");

console.log(`helloo my name is ${name} i have ${repoCount} repos`)

const gameName = new String("Dorae-mon")// object
// console.log(gameName[0])
// console.log(gameName.__proto__)// all methods of string

// console.log(gameName.length)

console.log(gameName.toUpperCase())
console.log(gameName.charAt())
console.log(gameName.indexOf('m')) // 
console.log(gameName.substring(0,5))// 0 to 4

const newString = gameName.substring(0,4)
console.log(newString)

const anotherString = gameName.slice(-8,4)
console.log(anotherString)


const newString2 = " Apoorva "
console.log(newString2)
console.log(newString2.trim())//removes extra spaces




const url = "https:/www.youtube.com/watch?v=H1r5f7bX9nY&list=PLu0W_9lII9agICnT8t4iYVSZ3eykIAOME&index=7"

console.log(url.includes("https"))
console.log(url.replace("youtube","vimeo"))

console.log(gameName.split('-'))

