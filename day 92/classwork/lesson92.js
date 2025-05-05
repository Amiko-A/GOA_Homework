let arrey1 = [1,2,3,4];

let arrey2 = [5,6,7,8];

let concatArray = arrey1.concat(arrey2);

concatArray.copyWithin(4,0,2);

concatArray.fill(0,5,8);

let lastElement = concatArray.pop();

let firstElement = concatArray.shift();

let unshiftArray = concatArray.unshift(10,20);

console.log(concatArray);
