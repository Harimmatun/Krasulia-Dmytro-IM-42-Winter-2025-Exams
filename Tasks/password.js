// Refactor following solution
// Generate random password

let GeneratePassword = (alphabet, length) => {
  const maxLength = alphabet.length;
  return Array.from({ length}, () =>{
    const Index = Math.floor(Math.random() * maxLength);
    return alphabet[Index];
  }).join('');
};

module.exports = GeneratePassword;
