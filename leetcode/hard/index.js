/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
	
}

const a1 = { 1: 'adceb', 2: '*a*b' } // true
const a2 = { 1: 'aa', 2: 'a' } // true
const a3 = { 1: 'aa', 2: '*' } // true
const a4 = { 1: 'cb', 2: '?a' } // false
console.log('Result', isMatch(a1[1], a1[2]))
console.log('Result', isMatch(a2[1], a2[2]))
console.log('Result', isMatch(a3[1], a3[2]))
console.log('Result', isMatch(a4[1], a4[2]))
