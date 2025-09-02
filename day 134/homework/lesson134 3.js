let p1 = new Promise(resolve => 
    setTimeout(() => resolve('First'), 5000)
);

let p2 = new Promise(resolve => 
    setTimeout(() => resolve('Second'), 4000)
);

let p3 = new Promise(resolve => 
    setTimeout(() => resolve('Third'), 3000)
);

Promise.race([p1, p2, p3])
  .then(val => console.log(val))
  .catch(err => console.error(err));
