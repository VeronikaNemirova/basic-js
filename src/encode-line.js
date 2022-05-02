const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if(!str) {return ''};
const res = [];
let symbol = str[0];
let number = 0;
str.split('').forEach((item, index) => {
if(symbol !== item && number) {
res.push([number, symbol]); symbol = item; number = 1
} else {number += 1} 
if(index === str.length - 1) {
res.push([number, symbol]);
}
})
return res.join('').split(',').join('').split('1').join('');
}

module.exports = {
  encodeLine
};
