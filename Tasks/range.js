// Refactor following solution
// Generate int array from given range

const random = (max) => Math.floor(Math.random() * max;

const generatePassword = (alphabet, length) => {
  const randomChar = () => alphabet[random(alphabet.length)];
  return Array.from({ length }, randomChar).join('');
};
