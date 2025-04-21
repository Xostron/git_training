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
var moveZeroes2 = function (nums) {
	let first = 0,
		second = 1

	while (first <= nums.length - 1) {
		// Поиск нулевого элемента до талого
		if (nums[first] !== 0) {
			first++
			continue
		}
		// нашел 0 - c данной позиции first+1 ищем ненулевое число
		second = first + 1
		while (second <= nums.length - 1) {
			// Поиск не нулевого числа до талого
			if (nums[second] === 0) {
				second++
				continue
			}
			// Найден меняем местами т выходим из подцикла
			const temp = nums[second]
			nums[second] = nums[first]
			nums[first] = temp
			break
		}
		// Начинаем описк следующего нулевого элемента
		first++
	}

	return nums
}

var moveZeroes3 = function (nums) {
	let zero = 0
	for (let i = 0; i < nums.length; i++) {
		// Поиск ненулевого
		if (nums[i] !== 0) {
			;[nums[zero], nums[i]] = [nums[i], nums[zero]]
			zero++
		}
	}
	// return nums
}

var moveZeroes = function (nums) {
	let first = 0,
		second = 0
	while (first < nums.length) {
		while (second < nums.length) {
			// Поиск нулевого элемента до талого
			if (nums[first] !== 0) {
				first++
				second++
			}
			// Поиск не нулевого числа до талого
			else if (nums[second] === 0) {
				second++
			} else {
				// Найден меняем местами т выходим из подцикла
				const temp = nums[second]
				nums[second] = nums[first]
				nums[first] = temp
			}
		}
		// Начинаем описк следующего нулевого элемента
		first++
	}
	// return nums
}

console.log(moveZeroes([0, 1, 0, 3, 12]))
console.log(moveZeroes([0]))
