function add(numA, numB) {
  if (typeof numA !== "number" || typeof numB !== "number") {
    throw new Error("Arguments must be numbers");
  }
  return numA + numB;
}

module.exports = {
  add,
};
