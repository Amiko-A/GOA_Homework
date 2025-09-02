const jsonData = `[
  {"name": "Alpha", "rank": 4, "active": true},
  {"name": "Bravo", "rank": 2, "active": false},
  {"name": "Charlie", "rank": 1, "active": true},
  {"name": "Delta", "rank": 3, "active": true},
  {"name": "Echo", "rank": 5, "active": false}
]`;

function parseAndTransformData(jsonString) {
  const operatives = JSON.parse(jsonString);
  const activeOperatives = operatives.filter(operative => operative.active);
  activeOperatives.sort((a, b) => b.rank - a.rank);
  const transformedOperatives = activeOperatives.map(operative => 
    `Operative ${operative.name} (Rank ${operative.rank}) - ACTIVE`
  );
  return transformedOperatives;
}

const result = parseAndTransformData(jsonData);
console.log(result);
