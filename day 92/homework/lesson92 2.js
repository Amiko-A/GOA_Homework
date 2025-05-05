let people = [
    { name: 'Amiko' },
    { name: 'Nika' }
  ];
  
  let places = [
    { city: 'Gori' },
    { city: 'Brussels' }
  ];
  
let mergedArray = people.concat(places);
  
mergedArray.copyWithin(2, 0, 2);
  
mergedArray.push({},{});
  
mergedArray.fill({ city: 'New York' }, 4, 6);
  
mergedArray.pop();
  
mergedArray.shift();
  
mergedArray.unshift({ name: 'Charlie' }, { name: 'David' });
  
console.log(mergedArray);