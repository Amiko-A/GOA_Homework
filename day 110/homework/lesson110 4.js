function countTruthiesAndFalsies(arr) {
  let truthy = 0;
  let falsy = 0;

  for (let i of arr) {
    if (i) {
      truthy++;
    } else {
      falsy++;
    }
  }

  return { truthy, falsy };
}
