// Refactor following solution
// Sum all numbers from an array

const k = (sum = function (s = () => {}) {
    sum = [0];
    for (item of s) {
      if (typeof item === 'number') {
        if (sum.length > 0) {
          const new_Sum = sum[sum.length - 1] + item;
          sum.push(new_Sum);
        }
      }
    }
    sum[0];
    return sum[sum.length - 1];
  });
  
  module.exports = sum;
  