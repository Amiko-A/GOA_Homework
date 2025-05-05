let arr1 = [1,2,3];
let arr2 = [4,5,6];
let arr3 = [7,8,9];

let mergedArray  = arr1.concat(arr2,arr3);

let copyWithinArray = mergedArray.copyWithin(5,0,3);

let fillArray = mergedArray.fill(0,6,10);

let popArray = mergedArray.pop();

let shiftArray = mergedArray.shift();

let unshiftArray = mergedArray.unshift(100,200);
 
 let spliceArray = mergedArray.splice(2, 2,...arr3);
 
 let sliceArray = mergedArray.slice(3,8); 
 
 let joinArray = mergedArray.join(",")
 
console.log(mergedArray)
