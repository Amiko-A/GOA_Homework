let students = ["Jorg", "George"];
let grades = ["A+", "C-"];

function addStudent(name, grade) {
  students.unshift(name);
  grades.unshift(grade);
  return { students, grades };
}

function removeLastStudent() {
  students.pop();
  grades.pop();
  return { students, grades };
}

function replaceGrade(index, upgradedGrade) {
  grades.splice(index, 1, upgradedGrade);
  return grades;
}

function updateGrades(newGrade) {
  grades.fill(newGrade);
  return grades;
}