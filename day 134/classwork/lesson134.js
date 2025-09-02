let p1 = Promise.resolve(1);
let p2 = Promise.resolve(2);
let p3 = Promise.resolve(3);

Promise.all([p1,p2,p3])
    .then(res => console.log("Success:",res))
    .catch(err => console.log("Failed:" , err))

let p4 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("p4");
    }, 3000);
});

let p5 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("p5");
    }, 2000);
});

let p6 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("p6");
    }, 1000);
});

Promise.race([p4, p5, p6])
        .then((res) => {
            console.log("Fastest:", res);
        })
        .catch((err) => {
            console.log("Slowest:", err);
        });

let p7 = Promise.reject("Failed");
let p8 = Promise.resolve("Success");
let p9 = Promise.reject("Failed");

Promise.any([p7, p8, p9])
  .then(result => {
    console.log("Result:", result);
  })
  .catch(error => {
    console.log("Error:", error);
  });

let p10 = Promise.resolve("Success");
let p11 = Promise.reject("Failed");

Promise.allSettled([p10, p11])
  .then(res => console.log(res));
