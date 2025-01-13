// Refactor following solution
// Sum all numbers from an array

const sum = (arr) => {
  return arr.reduce((total, item) => {
      if (typeof item === 'number') {
        return total + item;
      } else {
        return total;
      }
    }, 0);
};
  
  module.exports = sum;
  