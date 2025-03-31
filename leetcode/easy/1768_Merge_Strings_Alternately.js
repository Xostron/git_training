/**
 * Вам даны две строки: word1 и word2. 
 * Объедините строки, добавляя буквы в алфавитном порядке, начиная со слова word1. 
 * Если одна строка длиннее другой, добавьте дополнительные буквы в конец объединённой строки. 
 * Верните объединённую строку.
 * 
 * Input: word1 = "ab", word2 = "pqrs"
	Output: "apbqrs"
	Explanation: Notice that as word2 is longer, "rs" is appended to the end.
	word1:  a   b 
	word2:    p   q   r   s
	merged: a p b q   r   s
 */

/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
    const o = word1.length < word2.length ? { length: word1.length, greater: word2 } : { length: word2.length, greater: word1 }

    let result = ''
    for (let i = 0; i < o.length; i++) {
        result += word1[i] + word2[i]
    }
    result += o.greater.slice(o.length, o.greater.length)
    return result
};

const a = { 1: 'ab', 2: 'pqrs' }
console.log('Result', mergeAlternately(a[1], a[2]))

// slice===substring для строк
const r = '1234'
console.log(r.substring(1, r.length), r.slice(1, r.length))