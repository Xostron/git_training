/**
 * Учитывая массив целых чисел arr, верните значение true, 
 * если количество вхождений каждого значения в массиве уникально, 
 * и значение false в противном случае.
 * 
 * Example 1:
 * Input: arr = [1,2,2,1,1,3]
 * Output: true
 * Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.
 * 
 * Example 2:
 * Input: arr = [1,2]
 * Output: false
 * 
 * Example 3:
 * Input: arr = [-3,0,1,-3,1,1,1,-3,10,0]
 * Output: true
 */


/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
    const map = arr.reduce((acc, el, i) => {
        let t = acc.get(el) ?? 0
        return acc.set(el, ++t)
    }, new Map())
    const values = [...map.values()]
    const set = new Set(values)
    return values.length == set.size
};