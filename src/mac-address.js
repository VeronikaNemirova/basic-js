const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  let macNumbers = ['0', '1', '2', '3', '4', '5', '6','7', '8', '9']
  let macLetters = ['A', 'B', 'C', 'D', 'E', 'F']
  if (n.length != 17) {
    return false;
  };
  const arr = n.split('-')
  if (arr.length != 6) {
      return false;
      };
  return arr.every((element, i) => {
    if (element.length != 2) {
      return false;
    } else if
     ((macNumbers.includes(element[0]) || macLetters.includes(element[0])) && (macNumbers.includes(element[1]) || macLetters.includes(element[1]))) {
      return true;
    } else {
      return false;
    }
  });
}


module.exports = {
  isMAC48Address
};
