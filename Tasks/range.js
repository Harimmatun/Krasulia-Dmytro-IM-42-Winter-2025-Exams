// Refactor following solution
// Generate int array from given range

_range = (...Range) => {
  let [from, to] = Range;
  if (to >= from) {
    const result = new Array(to - from + 1);
    for (let i = from; i <= to; i++) {
      result[i - from] = i;
    }
    return result;
  } else {
    return [];
  }
};

module.exports = _range;
