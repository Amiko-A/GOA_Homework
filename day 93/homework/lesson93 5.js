let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10];
let arr3 = [11, 12, [13, 14, [15]]];

let combinedArray = arr1.concat(arr2, arr3);

combinedArray.copyWithin(5, 0, 3);

combinedArray.fill(0, 6, 9);

combinedArray.pop();

combinedArray.shift();

combinedArray.unshift(100, 200);

combinedArray.splice(3, 5, "x", "y", "z");

let slicedArray = combinedArray.slice(6, 11);

let joinArray = slicedArray.join(",");

let flatArray = slicedArray.flat(Infinity);

let hasEight = flatArray.includes(8);
console.log("Step 12 - Includes 8:", hasEight);

let indexOfNine = flatArray.indexOf(9);
console.log("Step 13 - Index of 9:", indexOfNine);

console.log("Final Combined Array:", combinedArray);
