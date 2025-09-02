let promise = Promise.reject(new Error("Custom failure!"));

promise
  .catch(err => {
    console.log(err.message);
  });