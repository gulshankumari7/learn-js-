
const mySym = Symbol("key1")

const jsUser = {
    name : " Gulshan Kumari",
    "full_name" : "Divya Singh",    
    [mySym] : "MyKEY1",
    age : 22,
    location :  "Bihar",
    email : "gulshan2212@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Saturday"]
}
console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser["full_name"]);
console.log(jsUser[mySym]);