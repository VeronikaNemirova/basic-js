const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(arr) {
  const initialValue = 0
  const sumWithInitial = arr.reduce((previousValue, currentValue) => {
    const newArr = currentValue.filter((elem) => {
    if (elem === '^^') {
       return true
    }
   return false
  })
  return previousValue + newArr.length

  },
  initialValue
  )
  return sumWithInitial
}

module.exports = {
  countCats
};
