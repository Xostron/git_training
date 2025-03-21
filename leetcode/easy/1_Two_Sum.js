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
 * @param {number[]} nums массив чисел
 * @param {number} target цель
 * @return {number[]} результат индексы 2х чисел, сумма элементов массива = цели
 */
var twoSum = function (nums, target) {
	let idx = 0
	// По числам
	for (const el of nums) {
		// число больше цели - пропускаем
		if (el > target) continue

		// последнее число из массива выходим из цикла
		if (idx >= nums.length - 1) break

		// Выбранное число el - суммируем с соседними числами (по соседним)
		for (let i = idx + 1; i < nums.length; i++) {
            // больше цели - пропускаем
			if (nums[i] > target) continue
            // = цели возвращаем (* цикл и внешний цикл тут же завершаются)
			if (el + nums[i] === target) return [idx, i]
		}
        // Соседние числа с выбранным не дали результата
		idx++
	}
    // нет походящих чисел
	return []
}

const nums = [2, 7, 11, 15],
	target = 9
console.log('Result', twoSum(nums, target))


