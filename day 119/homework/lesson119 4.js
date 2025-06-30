function minMax(arr){
  let minimum = Math.min(...arr);
  let maximum = Math.max(...arr);
  
  return[minimum,maximum];
}