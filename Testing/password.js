const passwordVal = (str) => {
  const lowerCaseLetters = /[a-z]/g;
  if (!str.match(lowerCaseLetters)) {
    return "One smallcase is required";
  }

  const upperCaseLetters = /[A-Z]/g;
  if (!str.match(upperCaseLetters)) {
    return "One uppercase is required";
  }

  const numbers = /[0-9]/g;
  if (!str.match(numbers)) {
    return "One number is required";
  }

  const specialChars = /^[A-Za-z0-9\!\@\#\$\%\^\&\*\)\(+\=\._-]+$/g;
  if (str.match(specialChars)) {
    return "One special char is required";
  }

  return "Password validated";
};

module.exports = passwordVal;
