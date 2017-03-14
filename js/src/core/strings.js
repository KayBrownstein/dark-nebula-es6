reduceString = (str, amount) => {
  let count = 0;
  let result = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i+1]) {
      count++;
      if (count < amount) {
        result += str[i];
      }
    } else {
      count = 0;
      result += str[i];
    }
  }
  return result;
};

reverseString = (str) => {
  let result = '';
  for (let i = 0; i <= str.length - 1; i++) {
    result = str[i] + result;
  }
  return result;
};
