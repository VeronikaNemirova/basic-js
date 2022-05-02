const {
  NotImplementedError
} = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let result = 0;
  digit = [];
  while (n) {
    digit.push(n % 10);
    n = Math.floor(n / 10);
  }
  for (let i = 0; i < digit.length; i++) {
    var num = 0;
    for (var j = digit.length - 1; j >= 0; j--) {
      if (j !== i) {
        num = num * 10 + digit[j];
      }
    }
    result = Math.max(num, result);
  }
  return result;

}


module.exports = {
  deleteDigit
};