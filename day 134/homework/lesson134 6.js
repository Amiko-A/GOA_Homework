let p1 = Promise.reject('Failure');
let p2 = Promise.reject('Failure');
let p3 = Promise.reject('Failure');

Promise.any([p1, p2, p3])
  .then(res => console.log(res))
  .catch(err => console.error('All Promises failed:', err));
