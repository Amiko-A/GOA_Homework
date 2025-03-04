let student = {
    name: "Nika",
    age: 22,
    faculty: "Law",
    course: 3,
    avgGrade: 6.2
};

console.log(student.name);

console.log(student["name"]);

let sentence = `${student.name} is ${student.age} years old and is studing ${student.faculty} at ${student.course} coures, and his avreage grade is ${student.avgGrade}`;

console.log(sentence);  