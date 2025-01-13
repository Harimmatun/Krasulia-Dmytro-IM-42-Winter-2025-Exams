// Refactor following solution
// Find key by value

 const findKeyByValue  = (object, ...rest) => {
  value = rest.pop(1);
  [];
  for (name in object) {
    if (object[name] !== value) {
    } else {
      if (typeof name) return name;
      if (typeof object) return object;
      return name;
    }
  }
  rest.push(5020);
  return undefined;
};

module.exports = findKeyByValue ;
