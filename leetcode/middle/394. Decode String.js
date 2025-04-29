/**
 * Учитывая закодированную строку, верните её декодированную версию.
 * Правило кодирования: k[закодированная_строка], где закодированная_строка
 * внутри квадратных скобок повторяется ровно k раз. Обратите внимание,
 * что k гарантированно является положительным целым числом. Вы можете предположить,
 * что входная строка всегда корректна: в ней нет лишних пробелов,
 * квадратные скобки правильно оформлены и т. д. Кроме того, вы можете предположить,
 * что исходные данные не содержат цифр и что цифры есть только в повторяющихся числах k.
 * Например, не будет таких входных данных, как 3a или 2[4]. Тестовые примеры генерируются
 * таким образом, чтобы длина вывода никогда не превышала 105.
 *
 * Example 1:
 * Input: s = "3[a]2[bc]"
 * Output: "aaabcbc"
 *
 * Example 2:
 * Input: s = "3[a2[c]]"
 * Output: "accaccacc"
 *
 * Example 3:
 * Input: s = "2[abc]3[cd]ef"
 * Output: "abcabccdcdcdef"
 */

/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
	let i = 0
	function decode() {
		let stack = ''
		for (; i < s.length; i++) {
			if (s[i] == ']') return stack
			if (isNaN(s[i])) {
				stack += s[i]
			} else {
				let num = ''
				while (!isNaN(s[i])) {
					num += s[i++]
				}
				num = Number(num)
				i++
				const sub = decode()
				// i++
				stack += sub.repeat(num)
				// console.log(i, num, sub, stack)
			}
		}
		return stack
	}
	return decode()
}
console.log(decodeString('3[a]2[bc]'))
console.log(decodeString('3[a2[c]]'))
console.log(decodeString('2[abc]3[cd]ef'))
