/*
1. Two Sum
Учитывая массив целых чисел nums и целое число target, верните индексы двух чисел, сумма которых равна target.

Вы можете предположить, что для каждого ввода будет ровноодно решение, и вы не можете использовать один и тот же элемент дважды.

Вы можете вернуть ответ в любом порядке.

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
	let idx = 0
	// По числам
	for (const el of nums) {
		// число больше - пропускаем
		if (el > target) continue

		// последнее число из массива выходим из цикла
		if (idx >= nums.length - 1) break

		// Выбранное число - суммируем с соседними числами
		for (let i = idx + 1; i < nums.length; i++) {
			if (nums[i] > target) continue
			if (el + nums[i] === target) return [idx, i]
		}
		idx++
	}
	return []
}

const nums = [2, 7, 11, 15],
	target = 9
console.log('Result', twoSum(nums, target))


