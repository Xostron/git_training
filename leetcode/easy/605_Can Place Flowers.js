/**
 * У вас есть длинная клумба, на которой некоторые участки засажены цветами, а некоторые нет.
 * Однако цветы нельзя сажать на соседних участках. Учитывая целочисленный массив flowerbed,
 * содержащий 0 и 1, где 0 означает пустой участок, а 1 — непустой, и целое число n, верните true,
 * если на клумбе можно посадить n новых цветов, не нарушая правило отсутствия соседних цветов,
 * и false в противном случае.
 *
 * Example 1:
 * Input: flowerbed = [1,0,0,0,1], n = 1
 * Output: true
 *
 * Example 2:
 * Input: flowerbed = [1,0,0,0,1], n = 2
 * Output: false
 */

/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
	if (!n) return true
	// Кол-во мест для посадки новых цветов
	let count = 0
	// Предыдущее место занято true, false - свободно
	let prev = false
	for (let i = 0; i < flowerbed.length; i++) {
		if (flowerbed[i] === 1) {
			prev = true
			continue
		}
		if (i === 0 && flowerbed[i + 1] === 0) {
			count++
			prev = true
			continue
		}
		if (i === flowerbed.length - 1 && prev) {
			prev = false
			continue
		}
		if (i === flowerbed.length - 1 && !prev) {
			count++
			prev = true
			continue
		}
		if (prev) {
			prev = false
		} else if (flowerbed[i+1]===0) {
			count++
			prev = true
		}
	}
	// console.log(111, 'Кол-во свободных мест = ',count)
	return count >= n
}


canPlaceFlowers([1,0,0,0,0,0, 1], 1)