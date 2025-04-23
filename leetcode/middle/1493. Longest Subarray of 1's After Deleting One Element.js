/**
 * Дан двоичный массив nums, из которого нужно удалить один элемент.
 * Верните размер самого длинного непустого подмассива, содержащего только единицы, в полученном массиве.
 * Верните 0, если такого подмассива нет.
 *
 *
 * Example 1:
 * Input: nums = [1,1,0,1]
 * Output: 3
 * Explanation: After deleting the number in position 2, [1,1,1] contains 3 numbers with value of 1's.
 *
 * Example 2:
 * Input: nums = [0,1,1,1,0,1,1,0,1]
 * Output: 5
 * Explanation: After deleting the number in position 4, [0,1,1,1,1,1,0,1] longest subarray with value of 1's is [1,1,1,1,1].
 *
 * Example 3:
 * Input: nums = [1,1,1]
 * Output: 2
 * Explanation: You must delete one element.
 *
 * Constraints:
 * 1 <= nums.length <= 105
 * nums[i] is either 0 or 1.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function (nums) {
	let k = 1,
		j = 0
	i = 0
	for (; i < nums.length; i++) {
		if (nums[i] == 0) k--
		if (k < 0) {
			if (nums[j] == 0) k++
			j++
		}
		console.log(i, 'k=', k, 'i=', i, 'j=', j)
	}
	if (k == 1) return i - j - k
	return i - j - 1
}

console.log(longestSubarray([1, 1, 1]))
