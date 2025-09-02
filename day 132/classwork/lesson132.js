let promise = new Promise((resolve, reject) => {
    let isCarGray = true;

    if (isCarGray) {
        resolve("Yeah, This car is gray");
    } else {
        reject("This car is sold out in gray color");
    }
});

promise
    .then(res => console.log("Success:", res))
    .catch(err => console.log("Failure:", err))
    .finally(() => console.log("Finished checking car color"));
