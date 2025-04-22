/**
 * Two pointers
 * Даны две строки s и t. Верните true, если s является подпоследовательностью t, и false в противном случае.
 * Подпоследовательность строки — это новая строка, которая образуется из исходной строки путём удаления некоторых
 * (или всех) символов без изменения относительного расположения оставшихся символов.
 * (Например, «ace» является подпоследовательностью «abcde», а «aec» — нет).
 *
 *
 * Example 1:
 * Input: s = "abc", t = "ahbgdc"
 * Output: true
 *
 * Example 2:
 * Input: s = "axc", t = "ahbgdc"
 * Output: false
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
	sidx = 0
	for (let i = 0; i < t.length; i++) {
		if (s[sidx] == t[i]) sidx++
		if (sidx === s.length) return true
	}
	return sidx === s.length
}

console.log(isSubsequence('abc', 'ahbgdc1111111')) //true
console.log(isSubsequence('axc', 'ahbgdc')) //false
