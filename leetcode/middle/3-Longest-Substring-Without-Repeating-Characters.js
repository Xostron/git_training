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
 * 1 решение
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

/**
 * Оптимизация мое решение
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
	let r = ''
	let cur = ''
	for (let i = 0; i < s.length; i++) {
		const k = cur.indexOf(s[i])
        // Повторяющийся символ
		if (k>=0) {
            // Сохраняем предыдущий результат
			if (cur.length > r.length) result = cur
            // вырезаем подстроку от найденного символа
			cur = cur.slice(k + 1, cur.length)
		}
        // сохраняем
        cur += s[i]
		if (cur.length > r.length) r = cur
	}
	return r.length
}

/**
 * Чужое решение
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring1 = function (s) {
	let set = new Set()
	let left = 0
	let maxLength = 0
	for (let right = 0; right < s.length; right++) {
		while (set.has(s[right])) {
			set.delete(s[left])
			left++
		}
		set.add(s[right])
		maxLength = Math.max(maxLength, right - left + 1)
	}

	return maxLength
}

const s = '   '
const s1 = 'abcb'
const s2 = 'pwwkew'

console.log('result', lengthOfLongestSubstring(s))

