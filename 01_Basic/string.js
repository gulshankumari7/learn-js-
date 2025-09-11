const name = "Divya"
const repo = 89
// console.log(name +" " +repo +" " +"value")
// String interpolation
console.log(`Hello this is ${name} and my repo ${repo}`);
// String is an object
const gameName = new String('Gulshan-Kumari')
console.log(gameName[0])
console.log(gameName[1])
console.log(gameName[2])
console.log(gameName[3])
console.log(gameName[4])
console.log(gameName[5])
console.log(gameName[6])
// Now we get an object 
console.log(gameName.__proto__)
// for length
console.log(gameName.length)

console.log(gameName.charAt(2))
// find position.
console.log(gameName.indexOf('t'))
const newString = gameName.substring(0,4)
console.log(newString)
const anotherString = gameName.slice(-14,3)
console.log(anotherString)
const newString1 ="   Gulshan   "
console.log(newString1)
console.log(newString1.trim())//trim remove spaces.
const url="https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20','-'))
console.log(url.includes('divya'))
console.log(gameName.split('_'))