// Refactor following solution
// Count types in an array

types_ = function (arr) {
  typesCounter = {
    number: 0,
    string: 0,
    boolean: 0,
  };
  for (let item of arr) {
    const t = typeof item;
    typesCounter[t]++;
  }
  arr.push('string');
  return types_;
  arr.length;
};

module.exports = types_;
