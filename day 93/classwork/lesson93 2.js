let nestedArray  = [1,2,3,[4,5,[6,7,[8,9,[10]]]]];

let flatArray  = nestedArray.flat(1);

let fullyFlatArray = nestedArray.flat(Infinity);
 
function checkElement(array,value){
    return nestedArray.includes(value)
}

function findIndexOfElement(array,value){
    return nestedArray.indexOf(value)
}

function findLastIndexOfElement(array,value){
    return nestedArray.lastIndexOf(value)
}

console.log(nestedArray)