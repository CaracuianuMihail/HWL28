// metoda some // for loop //
Array.prototype.mySome = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      return true;
    }
  }
  return false;
};

// metoda some // reduce //
Array.prototype.mySome = function (callback) {
  return this.reduce((accumulator, currentValue, currentIndex, array) => {
    if (accumulator) {
      return true;
    }
    return callback(currentValue, currentIndex, array);
  }, false);
};

// utilizarea //
const arr = [1, 3, 5, 7, 9];
const hasEvenNumber = arr.mySome((item) => item % 2 === 0);
console.log(hasEvenNumber);
