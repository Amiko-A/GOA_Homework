const jsonData = `[
  {"name": "Amiko", "rank": 4, "active": true},
  {"name": "Bondo", "rank": 2, "active": false},
  {"name": "dato", "rank": 1, "active": true},
  {"name": "nugo", "rank": 3, "active": false},
  {"name": "liana", "rank": 5, "active": false}
]`;

function getInactiveObjects(jsonString) {
  const data = JSON.parse(jsonString);
  return data.filter(item => item.active === false);
}

console.log(getInactiveObjects(jsonData));
