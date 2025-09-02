let reject = new Promise (reject => reject("Something went wrong"));

reject
    .catch (err => conxole.log("failure:" , err))