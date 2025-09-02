const jsonData = `[
  {"score": 85, "passed": true},
  {"score": 75, "passed": false},
  {"score": 90, "passed": true},
  {"score": 80, "passed": false}
]`;

function countByCondition(jsonString) {
  const data = JSON.parse(jsonString);
  return data.filter(item => item.score > 80 && item.passed).length;
}

console.log(countByCondition(jsonData));
