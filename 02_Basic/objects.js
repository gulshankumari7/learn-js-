
const mySym = Symbol("key1")
//  To access object value using dot notation.
const jsUser = {
    name : " Gulshan Kumari",
    "full_name" : "Divya Singh",  
    // [mySym] using [] is a symbol key syntax. 
    [mySym] : "MyKEY1",
    age : 22,
    location :  "Bihar",
    email : "gulshan2212@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Saturday"]
}
// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full_name"]);
// console.log(jsUser[mySym]);

jsUser.email = " gulshan2207@gmail.com"
// Object.freeze(jsUser)
jsUser.email = " gulshangpt@gmail.com"
// console.log(jsUser);

// use functions 

jsUser.greeting = function(){
    console.log("Hello js users");
}
console.log(jsUser.greeting());

// useing string interpolation
jsUser.greetingTwo = function(){
    console.log(`hello js user, ${this.name}`);
}
console.log(jsUser.greetingTwo());