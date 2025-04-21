/**
 * Дан массив символов chars. Сожмите его с помощью следующего алгоритма:
 * Начните с пустой строки s.
 * Для каждой группы последовательно повторяющихся символов в chars:
 * Если длина группы равна 1, добавьте символ в s. В противном случае добавьте символ,
 * за которым следует длина группы. Сжатая строка s не должна возвращаться отдельно,
 * а должна храниться во входном массиве символов chars.
 * Обратите внимание, что группы длиной 10 символов и более будут разделены на несколько символов в chars.
 * После того как вы закончите изменять входной массив, верните новую длину массива.
 * Вы должны написать алгоритм, который использует только постоянное дополнительное пространство.
 *
 *
 * Example 1:
 * Input: chars = ["a","a","b","b","c","c","c"]
 * Output: Return 6, and the first 6 characters of the input array should be: ["a","2","b","2","c","3"]
 * Explanation: The groups are "aa", "bb", and "ccc". This compresses to "a2b2c3".
 *
 * Example 2:
 * Input: chars = ["a"]
 * Output: Return 1, and the first character of the input array should be: ["a"]
 * Explanation: The only group is "a", which remains uncompressed since it's a single character.
 *
 * Example 3:
 * Input: chars = ["a","b","b","b","b","b","b","b","b","b","b","b","b"]
 * Output: Return 4, and the first 4 characters of the input array should be: ["a","b","1","2"].
 * Explanation: The groups are "a" and "bbbbbbbbbbbb". This compresses to "ab12".
 */

/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
	chars.push(chars[0])
	let count = 0,
		s,
		// длина исходного массива
		idx = chars.length - 2

	while (idx >= 0) {
		// Добавленный
		s = chars[chars.length - 1]
		// Текущий символ
		const char = chars.shift()

		// Если равны, подсчитываем
		if (s === char) count++

		// Не равны -> подводим итог и инициалищируем следующий символ
		if (s !== char) {
			// Подвод итога
			if (count > 1) for (const digit of count.toString()) chars.push(digit)
			// Инициализация следующего символа
			chars.push(char)
			count = 1
		}

		// Проверка в конце исходного массива
		if (idx <= 0 && count > 1) for (const digit of count.toString()) chars.push(digit)
		idx--
	}
	return chars.length
}

console.log(compress(['a', 'a', 'b', 'b', 'c', 'c', 'c']))
console.log(compress(['a']))
console.log(compress(['a', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b']))
// console.log(compress())
