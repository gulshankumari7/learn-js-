let NewDate =new Date()
// console.log(NewDate.toString());
// console.log(NewDate.toDateString());
// console.log(NewDate.toLocaleString());
// console.log(typeof NewDate);

// let myCreatedDate = new Date(2025, 0 , 22);
// let myCreatedDate = new Date(2025, 0 , 22);
let myCreateDate = new Date("2025-10-11");

console.log(myCreateDate.toLocaleString());
let TimeStamps = Date.now()
// console.log(TimeStamps);
// console.log(myCreateDate.getTime());
console.log(Math.floor(Date.now()/1000));
// Declare new date
let newDate =new Date()
console.log(newDate);
console.log(newDate.getDay());
// `${newDate.getDay()} and the time`

// International format

newDate.toLocaleString('default',{
    weekday: "long",
})