function isFalsy(value) {
  return value === false ||
         value === 0 ||
         value === "" ||
         value === null ||
         value === undefined ||
         Number.isNaN(value);
}