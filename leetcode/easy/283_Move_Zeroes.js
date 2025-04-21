/**
 * Two Pointers
 * Дан целочисленный массив nums.
 * Переместите все нули в конец массива, сохранив относительный порядок ненулевых элементов.
 * Обратите внимание, что вы должны сделать это на месте, не создавая копию массива.
 *
 * Example 1:
 * Input: nums = [0,1,0,3,12]
 * Output: [1,3,12,0,0]
 *
 * Example 2:
 * Input: nums = [0]
 * Output: [0]
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
	//
	let first = 0,
		second = 0

	while (first <= nums.length) {
		console.log(first, second, nums.length)
		if (nums[first] !== 0) {
			// поиск 0
			first++
			continue
		}

		// нашел 0 - c этой позиции ищем ненулевое число
		second = first + 1
		while (second <= nums.length) {
			if (nums[second] === 0) {
				second++
				continue
			}
			// Найден меняем местами
			const temp = nums[second]
			nums[second] = nums[first]
			nums[first] = temp
			first++
			console.log('hello', nums)
			break
		}
	}

	return nums
}

console.log(moveZeroes([0, 1, 0, 3, 12]))
