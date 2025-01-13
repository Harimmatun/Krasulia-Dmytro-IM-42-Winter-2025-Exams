// Refactor following solution
// Find key by value 

 const findKeyByValue  = (object, ...rest) => {
  for (const key in object) {
    if (object[key] === value) {
      return key;
    }
  }
  return undefined;
};

module.exports = findKeyByValue ;
