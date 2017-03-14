containsNumber = (string) => {
  let regex = /\d+/g;
  let matches = string.match(regex);
  if (matches !== null) {
    return true;
  }
  else {
    return false;
  }
};

containsRepeatingLetter = (string) => {
  let regex = /([a-z])\1/i;
  let duplicates = regex.test(string);
  return duplicates;
};

endsWithVowel = (string) => {
  let regex = /[^aeiou]$/i;
  let lastLetter = string.match(regex);
   if (lastLetter !== null) {
     return false;
   }
   else {
     return true;
   }
};

captureThreeNumbers = (string) => {
  let regex = /\d{3}/;
  let threeNumbers = string.match(regex);
  if (threeNumbers === null) {
    return false;
  }
  else {
    return threeNumbers[0];
  }
};

matchesPattern = (string) => {
  let regex = /^\d{3}-\d{3}-\d{4}$/;
  if (string.match(regex)) {
    return true;
  }
  else {
    return false;
  }
};

isUSD = (string) => {
  let regex = /(?=.)^\$(([1-9]\d{0,2}(,\d{3})*)|0)?(\.\d{2})?$/;
  if (string.match(regex)) {
    return true;
  }
  else {
    return false;
  }
};
