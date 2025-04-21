/**
 * Учитывая целочисленный массив nums, верните true,
 * если существует тройка индексов (i, j, k), таких что i < j < k и nums[i] < nums[j] < nums[k].
 * Если таких индексов не существует, верните false.
 *
 *
 * Example 1:
 * Input: nums = [1,2,3,4,5]
 * Output: true
 * Explanation: Any triplet where i < j < k is valid.
 *
 * Example 2:
 * Input: nums = [5,4,3,2,1]
 * Output: false
 * Explanation: No triplet exists.
 *
 * Example 3:
 * Input: nums = [2,1,5,0,4,6]
 * Output: true
 * Explanation: The triplet (3, 4, 5) is valid because nums[3] == 0 < nums[4] == 4 < nums[5] == 6.
 */

/**
 * x<y<z
 * i<j<k
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet1 = function (nums) {
	// Убрать повторяющиеся друг за другом числа
	let r = [],
		set = [...new Set(nums)]
	nums.forEach((el, i) => {
		if (!r.length) {
			r.push(el)
			return
		}
		if (r[r.length - 1] === el) {
			return
		}
		r.push(el)
	})
	if (r.length === nums.length) {
		if (nums.length % set.length === 0) r = set
	}

	if (r.length < 3) return false
	// console.log(nums)
	let yy = 1,
		y = r[yy],
		xx = yy - 1,
		zz = yy + 1,
		x = r[xx],
		z = r[zz]

	while (true) {
		// Поиск X
		if (x >= y) {
			// Ищем дальше
			if (--xx < 0) {
				if (++yy >= r.length - 1) return false
				y = r[yy]
				xx = yy - 1
				zz = yy + 1
				x = r[xx]
				z = r[zz]
			} else {
				x = r[xx]
			}
		}

		// Поиск z
		if (z <= y) {
			// Ищем дальше
			if (++zz > r.length - 1) {
				if (++yy >= r.length - 1) return false
				y = r[yy]
				xx = yy - 1
				zz = yy + 1
				x = r[xx]
				z = r[zz]
			} else {
				z = r[zz]
			}
		}
		if (y > x && y < z) return true
	}
}

var increasingTriplet = function (nums) {
	let n1 = Infinity,
		n2 = Infinity,
		n3 = Infinity
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] <= n1) {
			n1 = nums[i]
		} else if (nums[i] <= n2) {
			n2 = nums[i]
		} else {
			return true
		}
	}
	return false
}



console.log(increasingTriplet([1, 2, 3, 4, 5]))
console.log(increasingTriplet([5, 4, 3, 2, 1]))
console.log(increasingTriplet([2, 1, 5, 0, 4, 6]))
console.log(increasingTriplet([20, 1, 1, 1, 1, 1, 1, 1, 100, 10, 12, 5, 13]))
