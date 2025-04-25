/**
 * Дан массив целых чисел nums.
 * Вычислите опорный индекс этого массива. Опорный индекс — это индекс,
 * при котором сумма всех чисел строго слева от индекса равна сумме всех
 * чисел строго справа от индекса. Если индекс находится на левом краю массива,
 * то левая сумма равна 0, потому что слева нет элементов.
 * То же самое относится к правому краю массива.
 * Верните самый левый опорный индекс. Если такого индекса нет, верните -1.
 *
 * Example 1:
 * Input: nums = [1,7,3,6,5,6]
 * Output: 3
 * Explanation:
 * The pivot index is 3.
 * Left sum = nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11
 * Right sum = nums[4] + nums[5] = 5 + 6 = 11
 *
 * Example 2:
 * Input: nums = [1,2,3]
 * Output: -1
 * Explanation:
 * There is no index that satisfies the conditions in the problem statement.
 *
 * Example 3:
 * Input: nums = [2,1,-1]
 * Output: 0
 * Explanation:
 * The pivot index is 0.
 * Left sum = 0 (no elements to the left of index 0)
 * Right sum = nums[1] + nums[2] = 1 + -1 = 0
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
	// Подсчет кумулятивной суммы Prefix sum
	const prefix = nums.reduce((acc, el, i) => {
		i === 0 ? acc.push(el) : acc.push(acc[i - 1] + el)
		return acc
	}, [])
	// Поиск опорного индекса
	const last = prefix[prefix.length - 1]
	for (let i = 0; i < prefix.length; i++) {
		if ((prefix?.[i - 1] ?? 0) == last - prefix[i]) return i
	}
	return -1
}

// prefix = 1,8,11,17,22,28
console.log(pivotIndex([1, 7, 3, 6, 5, 6]))
console.log(pivotIndex([1,2,3]))
console.log(pivotIndex([2,1,-1]))