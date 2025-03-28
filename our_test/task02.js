/**
 * @description Задание №2
 * Есть некий массив с данными о маршруте, который возвращает функция data().
 * Задача - восстановить маршрут движения.
 *
 */

//
function data(arr) {
	// Набор конечных точек
	const end = arr.map((el) => el.to)
	// Начальная точка idx=0
	const start = arr.filter((el) => {
		if (!end.includes(el.from)) {
			return el
		}
	})
	//  Выстраиваем путь
	while (true) {
		const to = start[start.length - 1].to
		const next = arr.find((el) => el.from === to)
		// выход из цикла когда to конечный
		if (!next) break
		start.push(next)
	}
	return start
}

function data1(arr) {
	const result = [arr[0]]
	let i = 1
	const total = arr.length
	while (true) {
		const { from, to } = arr[i]
		for (let k = 0; k < result.length; k++) {
			// в конец
			if (from === result[k].to) {
				result.splice(k + 1, 0, p[i])
				arr.splice(i, 1)
				break
			}
			// в начало
			if (to === result[k].from) {
				result.splice(k, 0, p[i])
				arr.splice(i, 1)
				break
			}
		}
		if (result.length === total) break
		if (i < arr.length - 1) i++
		else i = 1
	}
	return result
}

const p = [
	{ from: 'K', to: 'L' },
	{ from: 'B', to: 'E' },
	{ from: 'A', to: 'C' },
	{ from: 'R', to: 'S' },
	{ from: 'O', to: 'P' },
	{ from: 'F', to: 'B' },
	{ from: 'M', to: 'N' },
	{ from: 'C', to: 'F' },
	{ from: 'E', to: 'G' },
	{ from: 'N', to: 'O' },
	{ from: 'G', to: 'H' },
	{ from: 'H', to: 'I' },
	{ from: 'Q', to: 'R' },
	{ from: 'I', to: 'J' },
	{ from: 'J', to: 'K' },
	{ from: 'P', to: 'Q' },
	{ from: 'L', to: 'M' },
	{ from: 'D', to: 'A' },
]

console.time('data')
const r = data(p)
console.timeEnd('data')
console.log('data', r)

console.time('data1')
const rr = data1(p)
console.timeEnd('data1')
console.log('data1', rr)
