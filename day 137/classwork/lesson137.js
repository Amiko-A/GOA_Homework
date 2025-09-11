const jsonperson = `[
  {"name": "Amiko", "email": "amiko@gmail.com", "verified": true},
  {"name": "Bondo", "email": "bondo@gmail.com", "verified": false},
  {"name": "dato", "email": "dato@gmail.com", "verified": true}
]`;
const result = JSON.parse(jsonperson)
  .filter(op => op.active)
  .sort((a, b) => b.rank - a.rank)
  .map(op => `Operative ${op.name} (Rank ${op.rank}) - ACTIVE`);
console.log(result);
