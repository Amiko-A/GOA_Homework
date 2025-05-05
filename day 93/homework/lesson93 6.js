let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let nestedArray = [7, [8, 9, [10]]];

let combinedArray = arr1.concat(arr2);

combinedArray.copyWithin(4, 0, 2);

combinedArray.fill(0, 2, 4);

combinedArray.pop();

combinedArray.shift();

combinedArray.unshift(10, 20);

combinedArray.splice(2, 2, 30, 40);

let slicedArray = combinedArray.slice(-3);

let joinedString = slicedArray.join("-");

let flatArray = nestedArray.flat(Infinity);

let includesNine = flatArray.includes(9);

let indexOfTen = flatArray.indexOf(10);

let lastIndexOfNine = flatArray.lastIndexOf(9);

flatArray.push(13);