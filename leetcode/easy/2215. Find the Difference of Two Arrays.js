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
	
}

console.log(findDifference([1, 2, 3], [2, 4, 6]))
// console.log(findDifference([1, 2, 3, 3], [1, 1, 2, 2]))
