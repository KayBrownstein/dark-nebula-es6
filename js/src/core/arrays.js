removeWithoutCopy = (arr, item) => {
  // let arrCopy = arr.slice(0);
  let index = arr.indexOf(item);
  while (index >= 0) {
    arr.splice(index, 1);
    index = arr.indexOf(item);
  }
  return arr;
};

append = (arr, item) => {
  arr.push(item);
  return arr;
};

truncate = (arr) => {
  arr.pop();
  return arr;
};

prepend = (arr, item) => {
  arr.unshift(item);
  return arr;
};

curtail = (arr) => {
  arr.shift();
  return arr;
};

concat = (arr1, arr2) => {
  let result = arr1.concat(arr2);
  return result;
};

insert = (arr, item, index) => {
  arr.splice(index, 0, item);
  return arr;
};

count = (arr, item) => {
  for(let i = 0; i < arr.length; i++) {
    let item = arr[i];
    count[item] = count[item] ? count[item]+1 : 1;
  }
  return count[item];
};

duplicates = (arr) => {
  duplicates = [];
  counts = {};

  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];
    counts[item] = counts[item] >= 1 ? counts[item] + 1 : 1;
    if (counts[item] === 2) {
      duplicates.push(item);
    }
  }
  return duplicates;
};

square = (arr) => {
  squares = [];

  for (let i = 0; i < arr.length; i++) {
    squares.push(arr[i] * arr[i]);
  }
  return squares;
};

findAllOccurrences = (arr, item) => {
  let occurrences = [], i;

  for (i = 0; i < arr.length; i++)
    if (arr[i] === item) {
      occurrences.push(i);
    }
    return occurrences;
};
