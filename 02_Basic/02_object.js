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