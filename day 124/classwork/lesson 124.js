const employees = new Map([
  ["Richard", "Developer"],
  ["Maria", "SEO Specialist"],
  ["Tom", "Product Manager"],
  ["David", "Accountant"],
  ["Sophia", "HR Manager"]
]);

const newName = "Bob";
const newPosition = "Developer";

employees.set(newName, newPosition);

employees.forEach((position, name) => {
  console.log(`${name} : ${position}`);
});
