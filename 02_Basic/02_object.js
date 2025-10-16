// singleton 
// const tinderUser = new Object()

const tinderUser={}
tinderUser.id = "Divya123"
tinderUser.name = "Divya"
tinderUser.isLoggedIn = false
// console.log(tinderUser);

const regularUser = {
    email : "divya12@gmail.com",
    fullName : {
        userFullName : {
            firstName : "Divya",
            lastName : "Singh"
        }
    }
}

console.log(regularUser.fullName.userFullName.firstName);

const obj1  = {1 : "a", 2 : "b"}
const obj2  = {3 : "a", 4 : "b"}
const obj4  = {5: "a", 6 : "b"}
// Merge Objects 

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({},obj1, obj2,obj4)
// spread operator ...
const obj3 = {...obj1, ...obj2, ...obj4}
console.log(obj3);
const user = [
    {
        id : 1,
        email: "G@gmail.com"
    },
    {
        id : 2,
        email: "D@gmail.com"
    },
    {
        id : 3,
        email: "G@gmail.com"
    },
]
user[1].email
console.log(tinderUser);
console.log(Object.keys(tinderUser));

console.log(Object.entries(tinderUser));
