const jsonData = `[
  {"name": "Amiko", "age": 30, "email": "amiko@example.com"},
  {"name": "bondo", "age": 25, "email": "bondo@example.com"},
  {"name": "dato", "age": 35, "email": "dato@example.com"}
]`;

function validateStructure(jsonString) {
  const data = JSON.parse(jsonString);
  return data.every(item => 'name' in item && 'age' in item && 'email' in item);
}

console.log(validateStructure(jsonData));
