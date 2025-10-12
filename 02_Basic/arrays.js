// Arrays always write in Square brackets
const myArr = [0, 1, 2, 3, 4, 5]
console.log(myArr[2]);
const myHero = ["Shaktiman", "naagraj"]

// Shallow copy of an object is a copy whose properties share the same references.
// deepcopy properties do not share the original reference.
//  arrays methods
// push simply add array
myArr.push(6)
myArr.push(7)
console.log(myArr);
// pop remove the last value.
myArr.pop()
console.log(myArr);
// add in first
myArr.unshift(9)
console.log(myArr);
// remove first element
myArr.shift()
console.log(myArr);
// include ans the value in boolean if exist then true else false.
console.log(myArr.includes(5));
console.log(myArr.indexOf(5));
const newArr = myArr.join()
console.log(myArr);
console.log( newArr);

// slice, splice
console.log("A ",myArr);
const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log("B ",myArr);
// splice manipulate original operations.
const myn2 = myArr.splice(1,3)
console.log("c ",myArr);
console.log(myn2);