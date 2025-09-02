function descendingOrder(n){
  return order(String(n).split('').sort().reverse().join(''))
}