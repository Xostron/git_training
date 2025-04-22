/**
 * Вам дан целочисленный массив nums и целое число k.
 * За одну операцию вы можете выбрать два числа из массива, сумма которых равна k, и удалить их из массива.
 * Верните максимальное количество операций, которые вы можете выполнить с массивом.
 *
 *
 * Example 1:
 * Input: nums = [1,2,3,4], k = 5
 * Output: 2
 * Explanation: Starting with nums = [1,2,3,4]:
 * - Remove numbers 1 and 4, then nums = [2,3]
 * - Remove numbers 2 and 3, then nums = []
 * There are no more pairs that sum up to 5, hence a total of 2 operations.
 *
 *
 * Example 2:
 * Input: nums = [3,1,3,4,3], k = 6
 * Output: 1
 * Explanation: Starting with nums = [3,1,3,4,3]:
 * - Remove the first two 3's, then nums = [1,4,3]
 * There are no more pairs that sum up to 6, hence a total of 1 operation.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function (nums, k) {
	nums = nums.filter((el) => el < k).sort((a, b) => a - b)
	let left = 0,
		right = nums.length - 1,
		count = 0
	// Two sum - две суммы
	while (true) {
		if (left >= right) return count
		if (nums[left] + nums[right] > k) {
			right--
		} else if (nums[left] + nums[right] < k) {
			left++
		} else {
			right--
			left++
			count++
		}
	}
}

console.log(maxOperations([1, 2, 3, 4], 5))
console.log(maxOperations([3, 1, 3, 4, 3], 6))
