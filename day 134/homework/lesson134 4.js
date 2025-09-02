let p1 = Promise.reject('Failure');
let p2 = new Promise(resolve => 
    setTimeout(() => resolve('Delayed Success 1'), 2000));
let p3 = new Promise(resolve => 
    setTimeout(() => resolve('Delayed Success 2'), 3000));

Promise.race([p1, p2, p3])
  .then(res => console.log(res))
  .catch(err => console.log('Rejected:', err));
