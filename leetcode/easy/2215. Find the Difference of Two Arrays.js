/**
 * Даны два целочисленных массива nums1 и nums2 с индексацией от 0.
 * Верните список answer размером 2, в котором: answer[0] — это список всех
 * различных целых чисел из nums1, которых нет в nums2. answer[1] — это
 * список всех различных целых чисел из nums2, которых нет в nums1.
 * Обратите внимание, что целые числа в списках могут быть возвращены в любом порядке.
 *
 * Example 1:
 * Input: nums1 = [1,2,3], nums2 = [2,4,6]
 * Output: [[1,3],[4,6]]
 * Explanation:
 * For nums1, nums1[1] = 2 is present at index 0 of nums2, whereas nums1[0] = 1 and nums1[2] = 3 are not present in nums2. Therefore, answer[0] = [1,3].
 * For nums2, nums2[0] = 2 is present at index 1 of nums1, whereas nums2[1] = 4 and nums2[2] = 6 are not present in nums1. Therefore, answer[1] = [4,6].
 *
 * Example 2:
 * Input: nums1 = [1,2,3,3], nums2 = [1,1,2,2]
 * Output: [[3],[]]
 * Explanation:
 * For nums1, nums1[2] and nums1[3] are not present in nums2. Since nums1[2] == nums1[3], their value is only included once and answer[0] = [3].
 * Every integer in nums2 is present in nums1. Therefore, answer[1] = [].
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {
	const set1 = new Set(nums1)
	const set2 = new Set(nums2)
	const r = [[], []]
	for (const el of set1) if (!set2.has(el)) r[0].push(el)
	for (const el of set2) if (!set1.has(el)) r[1].push(el)
	return r
}

// Новый метод в Set в новой Node v2x
var findDifference2 = function (nums1, nums2) {
	const set1 = new Set(nums1)
	const set2 = new Set(nums2)
	return [[...set1.difference(set2)], [...set2.difference(set1)]]
}

// Чуть быстрее
function findDifference3(nums1, nums2) {
	const set1 = new Set(nums1)
	const set2 = new Set(nums2)

	const onlyIn1 = [...set1].filter((num) => !set2.has(num))
	const onlyIn2 = [...set2].filter((num) => !set1.has(num))

	return [onlyIn1, onlyIn2]
}

console.log(findDifference([1, 2, 3], [2, 4, 6]))
console.log(findDifference([1, 2, 3, 3], [1, 1, 2, 2]))
