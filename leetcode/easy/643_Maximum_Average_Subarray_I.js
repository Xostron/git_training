/**
 * Вам дан целочисленный массив nums, состоящий из n элементов, и целое число k.
 * Найдите непрерывный подмассив, длина которого равна k и среднее значение которого максимально,
 * и верните это значение. Будет принят любой ответ с погрешностью вычислений менее 10-5.
 *
 * Example 1:
 * Input: nums = [1,12,-5,-6,50,3], k = 4
 * Output: 12.75000
 * Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75
 *
 * Example 2:
 * Input: nums = [5], k = 1
 * Output: 5.00000
 *
 * n == nums.length
 * 1 <= k <= n <= 105
 * -10e4 <= nums[i] <= 10e4
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
	const sub = nums.slice(0, k)
	let sum = sub.reduce((acc, el) => (acc += el), 0) / k
	let max = sum
	for (let i = k, j = 0; i < nums.length; i++, j++) {
		const pre = nums[j]
		const cur = nums[i]
		sum = sum + (cur - pre) / k
		max = max < sum ? sum : max
	}
	return max
}
// [0,4,0,3,2]
// console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4))
// console.log(findMaxAverage([5], 1))
console.log(findMaxAverage([0, 4, 0, 3, 2], 1)) //4
