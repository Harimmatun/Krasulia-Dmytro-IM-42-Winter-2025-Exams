// Refactor following solution
// Generate int array from given range

_range = (...Range) => {
  let [from, to] = Range;
  if (to < from) {
    return[]
  }

    const result = [];
    for (let i = from; i <= to; i++) {
      result.push(i);
    }
    return result;
  };

module.exports = _range;
