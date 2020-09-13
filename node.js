const student = {
    name:"Alex",
    age:20,
    email:"something@gmail.com"
} ;
//transforming the student object into a string
const studentStr = JSON.stringify(student);

console.log(studentStr);

//convert the string back to an object
const jsObject = JSON.parse(studentStr);

console.log(jsObject);