/**
 * Байкер отправляется в путешествие.
 * Маршрут состоит из n + 1 точки на разной высоте.
 * Байкер начинает путешествие в точке 0 на высоте 0.
 * Вам дан целочисленный массив gain длиной n, где gain[i] — это разница в высоте между
 * точками i и i + 1 для всех (0 <= i < n). Верните максимальную высоту точки.
 *
 *
 * Example 1:
 * Input: gain = [-5,1,5,0,-7]
 * Output: 1
 * Explanation: The altitudes are [0,-5,-4,1,1,-6]. The highest is 1.
 *
 * Example 2:
 * Input: gain = [-4,-3,-2,-1,4,3,2]
 * Output: 0
 * Explanation: The altitudes are [0,-4,-7,-9,-10,-6,-3,-1]. The highest is 0.
 */

/**
 * Расчитываем истиное значение каждого элемента массива, чтобы расчитать i элемент, необходимо просуммировать предыдущие значения
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {
	let val = 0,
		max = 0
	for (const el of gain) {
		val += el
		if (max < val) max = val
	}
	return max
}

console.log(largestAltitude([-5, 1, 5, 0, -7]))
console.log(largestAltitude([-4, -3, -2, -1, 4, 3, 2]))
