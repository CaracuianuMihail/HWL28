// metoda slice // for loop //
Array.prototype.mySlice = function (startIndex, endIndex) {
  const result = [];
  const length = this.length;

  startIndex = startIndex || 0;
  endIndex = endIndex || length;

  if (startIndex < 0) {
    startIndex = Math.max(0, length + startIndex);
  }

  if (endIndex < 0) {
    endIndex = Math.max(0, length + endIndex);
  } else if (endIndex > length) {
    endIndex = length;
  }

  for (let i = startIndex; i < endIndex; i++) {
    result.push(this[i]);
  }

  return result;
};

// metoda slice // reduce //
Array.prototype.mySlice = function (startIndex, endIndex) {
  return this.reduce((result, currentValue, index) => {
    if (index >= startIndex && index < endIndex) {
      result.push(currentValue);
    }
    return result;
  }, []);
};

// utilizarea //
const arr = [3, 5, 73, 65, 91];
const slicedArr = arr.mySlice(1, 3);
console.log(slicedArr);
