/**
 * Нам дан массив астероидов, состоящий из целых чисел, представляющих астероиды в ряд.
 * Индексы астероидов в массиве представляют их относительное положение в пространстве.
 * Для каждого астероида абсолютное значение представляет его размер, а знак — направление (положительное — вправо, отрицательное — влево).
 * Каждый астероид движется с одинаковой скоростью. Определите состояние астероидов после всех столкновений.
 * Если два астероида столкнутся, меньший из них взорвётся. Если оба астероида одинакового размера, взорвутся оба.
 * Два астероида, движущихся в одном направлении, никогда не встретятся.
 *
 *
 * Example 1:
 * Input: asteroids = [5,10,-5]
 * Output: [5,10]
 * Explanation: The 10 and -5 collide resulting in 10. The 5 and 10 never collide.
 *
 * Example 2:
 * Input: asteroids = [8,-8]
 * Output: []
 * Explanation: The 8 and -8 collide exploding each other.
 *
 * Example 3:
 * Input: asteroids = [10,2,-5]
 * Output: [10]
 * Explanation: The 2 and -5 collide resulting in -5. The 10 and -5 collide resulting in 10.
 */
/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision2 = function (asteroids) {
	let i = asteroids.length - 1
	while (i > 0) {
		let cur = asteroids[i]
		if (cur > 0) i--
		else {
			const acur = Math.abs(cur)
			const next = Math.abs(asteroids[i - 1])
			if (cur < 0 && asteroids[i - 1] < 0) {
				i--
			} else if (acur == next) {
				asteroids.splice(i - 1, 2)
				i = asteroids.length - 1
			} else if (acur > next) {
				asteroids.splice(i - 1, 1)
				i--
			} else {
				asteroids.splice(i, 1)
				i = asteroids.length - 1
			}
		}
	}
	return asteroids
}

var asteroidCollision = function (asteroids) {
	asteroids.reverse()
	const stack = []
	for (let i = 0; i < asteroids.length; i++) {
		const acur = Math.abs(stack[stack.length - 1])
		const next = Math.abs(asteroids[i])
		if (Number.isNaN(acur)) stack.push(asteroids[i])
		else if (
			(asteroids[i] < 0 && stack[stack.length - 1] < 0) ||
			(asteroids[i] > 0 && stack[stack.length - 1] > 0) ||
			stack[stack.length - 1] > 0
		)
			stack.push(asteroids[i])
		else if (acur == next) stack.pop()
		else if (acur < next) {
			stack.pop()
			i--
		}
	}
	return stack.reverse()
}

console.log(asteroidCollision([-2, 2, -1, -2]))
console.log(asteroidCollision([-2, 1, -2, -1]))
console.log(asteroidCollision([5, 10, -5]))
console.log(asteroidCollision([1, 1, -1, -2]))
console.log(asteroidCollision([-2, -1, 1, 2]))
// [ -2 ]
// [ -2, -2, -1 ]
// [ 5, 10 ]
// [ -2 ]
// [-2,-1,1,2]
