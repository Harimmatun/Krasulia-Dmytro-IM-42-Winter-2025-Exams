// Refactor following solution
// Generate random password

let GeneratePassword = (alphabet, length) => {
  const maxlength = alphabet.length;
  let password = '';
  for (let i = 0; i < length; i++) {
    const Index = Math.floor(Math.random() * maxlength);
    password = password + alphabet[Index];
  }
  return password;
};

module.exports = GeneratePassword;
