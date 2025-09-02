function getCount(str) {
  let vowelCount = 0;
  
  for(let i = 0;i < str.length;i++){
    let x = str[i];
    if(x === "a" || x === "e" || x === "i" || x === "o" || x === "u"){
      vowelCount++ ;
    }
  }
  return vowelCount
}