/**
 * Вам дана строка s, содержащая звёздочки *. За одну операцию вы можете:
 * Выбрать звёздочку в s.
 * Удалить ближайший к ней символ, не являющийся звёздочкой, а также саму звёздочку.
 * Вернуть строку после удаления всех звёздочек.
 * Примечание: Входные данные будут сгенерированы таким образом, что операция всегда возможна.
 * Можно показать, что полученная строка всегда будет уникальной.
 *
 * Example 1:
 * Input: s = "leet**cod*e"
 * Output: "lecoe"
 * Explanation: Performing the removals from left to right:
 * - The closest character to the 1st star is 't' in "leet**cod*e". s becomes "lee*cod*e".
 * - The closest character to the 2nd star is 'e' in "lee*cod*e". s becomes "lecod*e".
 * - The closest character to the 3rd star is 'd' in "lecod*e". s becomes "lecoe".
 * There are no more stars, so we return "lecoe".
 *
 * Example 2:
 * Input: s = "erase*****"
 * Output: ""
 * Explanation: The entire string is removed, so we return an empty string.
 */


var removeStars = function (s) {
    const stack = []
    for (let i = 0; i < s.length; i++) {
        if (s[i] == '*') stack.pop()
        else stack.push(s[i])
    }
    return stack.join('')
}

console.log(removeStars('leet**cod*e'))