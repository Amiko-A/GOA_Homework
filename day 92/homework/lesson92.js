let numsArray = [1,2,3,4];

let strArray = ["one","two","three","four"];

let concatArray = numsArray.concat(strArray);

let copyArray = concatArray.copyWithin(4, 0, 3);

let fillArray = concatArray.fill("filled",2,4);

let popArray = concatArray.pop()

let shiftArray  = concatArray.shift()

let unshiftArray = concatArray.unshift(100,200)

console.log(concatArray)
