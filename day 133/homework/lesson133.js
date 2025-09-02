let promise = Promise.resolve({ status: "ok", code: 200 });

promise
    .then(response => {
        console.log(response);
    });
