const jsonData = `[
  {"name": "Amiko", "email": "amiko@gmail.com", "verified": true},
  {"name": "Bondo", "email": "bondo@gmail.com", "verified": false},
  {"name": "dato", "email": "dato@gmail.com", "verified": true}
]`;

function extractNames(jsonString) {
  const data = JSON.parse(jsonString);
  return data.map(user => user.name);
}

console.log(extractNames(jsonData));
