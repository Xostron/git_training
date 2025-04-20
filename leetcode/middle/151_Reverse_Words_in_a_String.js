/**
 * Дана входная строка s. Измените порядок слов в ней на противоположный.
 * Слово определяется как последовательность символов, не являющихся пробелами.
 * Слова в строке s будут разделены как минимум одним пробелом. Верните строку,
 * состоящую из слов в обратном порядке, разделённых одним пробелом. Обратите внимание,
 * что строка s может содержать начальные или конечные пробелы или несколько
 * пробелов между двумя словами. В возвращаемой строке между словами должен быть
 * только один пробел. Не добавляйте лишние пробелы.
 *
 *
 * Example 1:
 * Input: s = "the sky is blue"
 * Output: "blue is sky the"
 *
 * Example 2:
 * Input: s = "  hello world  "
 * Output: "world hello"
 * Explanation: Your reversed string should not contain leading or trailing spaces.
 *
 * Example 3:
 * Input: s = "a good   example"
 * Output: "example good a"
 * Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string.
 */

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
	return s.trim().split(' ').filter(el=>el).reverse().join(' ')
}

console.log(reverseWords('the sky is blue'))
console.log(reverseWords('  hello world  '))
console.log(reverseWords('a good   example'))