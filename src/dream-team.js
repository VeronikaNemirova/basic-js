const {
  NotImplementedError
} = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(arr) {
  if (!arr || !Array.isArray(arr)) {
    return false
  }
  const newArr = arr?.filter((word) => {
    if (typeof word === 'string' && word.length >= 1) {
      return true
    }
    return false
  })
  console.log(newArr)
  const oneLetter = newArr.map((word) => {
    return word.trim()[0].toUpperCase()
  })

  return oneLetter.sort().join('');
}



module.exports = {
  createDreamTeam
};