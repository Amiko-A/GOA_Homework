const jsonData = `[
  {"id": 1, "value": "One"},
  {"id": 2, "value": "Two"},
  {"id": 3, "value": "Three"}
]`;

function transformToMap(jsonString) {
  const data = JSON.parse(jsonString);
  return data.reduce((map, item) => {
    map[item.id] = item.value;
    return map;
  }, {});
}

console.log(transformToMap(jsonData));
