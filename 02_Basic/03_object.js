const course = {
    courseName : "JavaScript",
    price : "898",
    courseInstructor : "Divya"
}
const {courseInstructor : instructor} = course
console.log(instructor);
const {courseName} = course
console.log(courseName);
// {} destructure using curly braces.
const navbar = ({company}) =>{

}
navbar(company = "Divya")