function checkType(val) {
  return (val !== Object(val)) ? "primitive" : "non-primitive";
}