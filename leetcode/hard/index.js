/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
	let sub1 = ''
	let sub2 = ''
	let i2=0
	for (let i1 = 0; i1 < p.length; i1++) {
		sub1 += p[i1]
		if (p[i1] === '*' || p[i1] === '?') {
			continue
		}
		const cur=sub1[sub1.length-1]
		const prev=sub1[sub1.length-2]
		for(i2=i2;i2<s.length;i2++){
			const i22 = s.indexOf('c')
			
		}
	}
	console.log(111, sub1, sub2)
	return sub1 === sub2
}

const a1 = { 1: 'adceb', 2: '*a*b' } // true
const a2 = { 1: 'aa', 2: 'a' } // true
const a3 = { 1: 'aa', 2: '*' } // true
const a4 = { 1: 'cb', 2: '?c' } // false
console.log('Result', isMatch(a1[1], a1[2]))
console.log('Result', isMatch(a2[1], a2[2]))
console.log('Result', isMatch(a3[1], a3[2]))
console.log('Result', isMatch(a4[1], a4[2]))
