// Object de-structure and JSON API intro 

const course = {
    name : "Javascript",
    price : 999,
    course_Instructor : "Rahul"
}

console.log(course.course_Instructor); // op : Rahul

// Another syntax
const {course_Instructor} = course
const {name : course_name} = course   // just accessing the values inside objects 
console.log(course_Instructor);  // op : Rahul 
console.log(course_name);   // op : Javascript 

