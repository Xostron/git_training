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
 * Улучшение: сложность O(N) -
 * Метод двух указателей
 *
 * @param {*} nums
 * @param {*} target
 * @returns
 */
var twoSum = function (nums, target) {
    // Преобразование массива с индексами, Сортировка
	const arr = nums.map((el, i) => [el, i]).sort((a, b) => a[0] - b[0])
	let l = 0,
    r = nums.length - 1
    // Поиск методом двух указателей
    while (true) {
        // Указатели равны - ничего не найдено
        if (r==l) return []
		const sum = arr[l][0] + arr[r][0]
        // больше, сдвигаем правй указатель
		if (sum > target) {
			r--
			continue
		}
        // Меньше, сдвигаем левый указатель
		if (sum < target) {
			l++
			continue
		}
        // Сумма = цели
		return [arr[l][1], arr[r][1]]
	}
}

const nums = [-3, 4, 4, 90],
	nums1 = [2, 7, 11, 15]
target = 0

console.log('Result', twoSum(nums, target))
