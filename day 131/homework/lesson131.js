//სინქრონული 

console.log("1");
console.log("2");
console.log("3");





function num1() {
    console.log("num1")
}

function num2(){
    console.log("num2")
}

function num3(){
    console.log("num3")
}

//ასინქრონული

console.log("1");

setTimeout(() => {
  console.log("10");
}, 10000);

console.log("2");





let fetchData = new Promise((resolve) => {

  setTimeout(() => {

    resolve("Hi!!!");

  }, 1000);

});

fetchData.then((message) => console.log(message));