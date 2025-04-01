/**
 * Для двух строк s и t мы говорим, что «t делит s» тогда и только тогда, 
 * когда s = t + t + t + ... + t + t (то есть t повторяется один или несколько раз). 
 * Для двух строк str1 и str2 найдите самую длинную строку x, которая делит и str1, и str2.
 * 
 * 
Example 1:
Input: str1 = "ABCABC", str2 = "ABC"
Output: "ABC"

Example 2:
Input: str1 = "ABABAB", str2 = "ABAB"
Output: "AB"

Example 3:
Input: str1 = "LEET", str2 = "CODE"
Output: ""
 */

/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
let gcdOfStrings = function (str1, str2) {
	let result = ''
	let sub = ''
	const length = Math.min(str1.length, str2.length)
	// Строки не имеют сходств - исключаем сразу
	if (str1 + str2 !== str2 + str1) {
		return ''
	}
	// По всем символам наименьшей строки
	for (let i = 0; i < length; i++) {
		// Состовляем подстроку
		if (str1[i] === str2[i]) sub += str1[i]
		// Проверка: длины строк str1, str2 должны быть четны длине подстроки
		if (str1.length % sub.length === 0 && str2.length % sub.length === 0) result = sub
	}
	return result
}

// Улучшенный
let gcdOfStrings2 = function (str1, str2) {
	// Проверка строки на сходство
	if (str1 + str2 !== str2 + str1) {
		return ''
	}
	// Поиск дины подстроки
	function gcd(a, b) {
		return b === 0 ? a : gcd(b, a % b)
	}
	let gcdLen = gcd(str1.length, str2.length)
	// Возврат подстроки, потому что проверку уже сделали в начале
	return str1.substring(0, gcdLen)
}

const str1 = { 1: 'AA', 2: 'A' }
const str2 = { 1: 'ABCDEF', 2: 'ABC' }
const str3 = { 1: 'ABCABC', 2: 'ABC' }
console.log('result', [gcdOfStrings(str1[1], str1[2])])
console.log('result', [gcdOfStrings(str2[1], str2[2])])
console.log('result', [gcdOfStrings(str3[1], str3[2])])
