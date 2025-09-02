const p1 = Promise.resolve('Success');
const p2 = Promise.resolve('Success');
const p3 = Promise.reject('Failure');

Promise.all([p1, p2, p3])
  .then(val => console.log(val))
  .catch(err => console.error('Error:', err));
