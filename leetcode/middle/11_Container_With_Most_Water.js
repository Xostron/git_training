/**
 * Вам дан целочисленный массив height длиной n.
 * Нарисовано n вертикальных линий, две конечные точки i-й линии — (i, 0)
 * и (i, height[i]). Найдите две линии, которые вместе с осью x образуют контейнер,
 * вмещающий наибольшее количество воды. Верните максимальное количество воды,
 * которое может вместить контейнер. Обратите внимание, что контейнер нельзя наклонять.
 *
 * Input: height = [1,8,6,2,5,4,8,3,7]
 * Output: 49 = h[1], h[9]
 */

/**
 * 1 решение - не прошла тест
 * @param {number[]} height
 * @return {number}
 */
var maxArea2 = function (height) {
	let area = 0
	for (let i = 0; i < height.length; i++) {
		const l = height[i]
		for (let j = i + 1; j < height.length; j++) {
			const r = height[j]
			const width = j - i
			const h = l < r ? l : r
			const a = h * width
			area = a > area ? a : area
		}
	}
	return area
}

// Прошел тест
var maxArea = function (height) {
	let i = 0,
		j = height.length - 1,
		area = 0
	while (i < j) {
		const l = height[i]
		const r = height[j]
		const width = j - i
		const h = l < r ? l : r
		const a = h * width
		area = a > area ? a : area
        if (l<r) i++
        else j--
	}
	return area
}
