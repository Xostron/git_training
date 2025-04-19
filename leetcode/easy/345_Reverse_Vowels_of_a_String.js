/**
 * Дана строка s. Поменяйте местами все гласные в строке и верните её.
 * Гласными являются буквы «a», «e», «i», «o» и «u», и они могут встречаться как в нижнем,
 * так и в верхнем регистре, причём несколько раз.
 *
 * Example 1:
 * Input: s = "IceCreAm"
 * Output: "AceCreIm"
 * Explanation:The vowels in s are ['I', 'e', 'e', 'A']. On reversing the vowels, s becomes "AceCreIm".
 *
 * Example 2:
 * Input: s = "leetcode"
 * Output: "leotcede"
 */

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    const dict = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U']
    s = s.split('')
    let i = 0,
        j = s.length - 1,
        left = null,
        right = null
    while (true) {
        if (!dict.includes(s[i])) i++
        else left = i
        if (!dict.includes(s[j])) j--
        else right = j

        if (left !== null && right !== null) {
            temp = s[i]
            s[i] = s[j]
            s[j] = temp
            left = null
            right = null
            i++
            j--
        }
        if (i === j || i > j) break
    }
    // console.log(result.join(''))
    return s.join('')
}

reverseVowels('IceCreAm')


var reverseVowels2 = function (s) {
	const dict = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U']
	s = s.split('')
	let i = 0,
		j = s.length - 1,
		left = null,
		right = null
	while (true) {
		if (!dict.includes(s[i])) i++
		else left = i
		if (!dict.includes(s[j])) j--
		else right = j

		if (left !== null && right !== null) {
			;[s[i], s[j]] = [s[j], s[i]]
			left = null
			right = null
			i++
			j--
		}
		if (i === j || i > j) break
	}
	// console.log(s.join(''))
	return s.join('')
}