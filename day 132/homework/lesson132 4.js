let promise = new Promise((resolve,reject) => {
    let random = Math.floot(Math.random() * 10);

    if (random >= 5){
        resolve("Success");
    }else {
        reject("Failed")
    }
})