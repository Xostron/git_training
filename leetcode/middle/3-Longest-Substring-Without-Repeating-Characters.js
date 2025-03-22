/*
Дана строка s. Найдите длину самой длинной подстроки без повторяющихся символов.

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
	let result = ''
	let cur = ''
	s.split('').forEach((el, i) => {
		// Уникальный набор
		if (!cur.includes(el)) {
			cur += el
			// еще есть символы - продолжаем собирать набор
			if (i < s.length - 1) return
		}
		// Последний символ || символ повторился в наборе - сброс и сохранение
		// Набор больше предыдущего
		if (cur.length > result.length) result = cur
		// Набор меньше предыдущего
		cur = el
	})
    console.log(s, result, result.length)
    return result.length
}


const s = "abcabcbb"
const s1 = "bbbbb"
const s2 = "pwwkew"

lengthOfLongestSubstring(s)
lengthOfLongestSubstring(s1)
lengthOfLongestSubstring(s2)