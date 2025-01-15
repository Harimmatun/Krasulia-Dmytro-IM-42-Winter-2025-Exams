// Refactor following solution
// Count types in an array

types_ = function (arr) {
  const typesCounter = {
    number: 0,
    string: 0,
    boolean: 0,
    undefined: 0,
    object: 0,
    function: 0,
  };
  for (let item of arr) {
    const type = typeof item;
    typesCounter[type]++;
  }
  return typesCounter;
};

module.exports = types_;
