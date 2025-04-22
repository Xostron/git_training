/**
 * Даны строка s и целое число k. Найдите максимальное количество гласных букв в любой подстроке строки s длиной k.
 * Vowel letters in English are 'a', 'e', 'i', 'o', and 'u'.
 *
 *
 * Example 1:
 * Input: s = "abciiidef", k = 3
 * Output: 3
 * Explanation: The substring "iii" contains 3 vowel letters.
 *
 * Example 2:
 * Input: s = "aeiou", k = 2
 * Output: 2
 * Explanation: Any substring of length 2 contains 2 vowels.
 *
 * Example 3:
 * Input: s = "leetcode", k = 3
 * Output: 2
 * Explanation: "lee", "eet" and "ode" contain 2 vowels.
 *
 * Constraints:
 * 1 <= s.length <= 105
 * s consists of lowercase English letters.
 * 1 <= k <= s.length
 */

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function (s, k) {
	const temp = 'aeiou'
	let sum = 0
	const sub = s.slice(0, k)
	for (const el of sub) if (temp.includes(el)) sum++
	let max = sum
	for (let i = k, j = 0; i < s.length; i++, j++) {
		if (temp.includes(s[i])) sum++
		if (temp.includes(s[j])) sum--
		// const pre = temp.includes(s[j]) ? 1 : 0
		// const cur = temp.includes(s[i]) ? 1 : 0
		// sum = sum - pre + cur
		max = max < sum ? sum : max
	}
	return max
}

console.log(maxVowels('abciiidef', 3)) //3
console.log(maxVowels('aeiou', 2)) //2
console.log(maxVowels('leetcode', 3)) //2
