// metoda every // for loop //
Array.prototype.myEvery = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (!callback(this[i], i, this)) {
      return false;
    }
  }
  return true;
};

// metoda every // reduce //
Array.prototype.myEvery = function (callback) {
  return this.reduce((accumulator, currentValue, currentIndex, array) => {
    return accumulator && callback(currentValue, currentIndex, array);
  }, true);
};

// utilizarea //
const arr = [2, 4, 6, 8, 1];
const allEvenNumbers = arr.myEvery((item) => item % 2 === 0);
console.log(allEvenNumbers);
