var isInteger = require('is-integer');

module.exports = function (i) {
  if(isInteger(i)) {
    return i + 1;
  }
  throw Error("Not an integer.");
}
