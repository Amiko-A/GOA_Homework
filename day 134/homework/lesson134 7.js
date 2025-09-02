let p1 = Promise.resolve('Success');
let p2 = Promise.reject('Failure');
let p3 = Promise.resolve('Success');
let p4 = Promise.reject('Failure');
let p5 = Promise.resolve('Success');

Promise.allSettled([p1, p2, p3, p4, p5])
  .then(res => {
    res.forEach(item => {
      console.log(item);
    });
  })
  .catch(err => console.error(err));
