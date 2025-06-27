function findNextSquare(sq) {
  let root = Math.sqrt(sq);

  if (Number.isInteger(root)) {
    let root2 = root + 1;
    return root2 * root2;
  } else {
    return -1;
  }
}