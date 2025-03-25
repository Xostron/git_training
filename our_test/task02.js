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
		const next = arr.find((el) => {
			return el.from === to
		})
        // выход из цикла когда to конечный
		if (!next) break
		start.push(next)
	}
	return start
}

const p = [
	{ from: 'B', to: 'E' },
	{ from: 'A', to: 'C' },
	{ from: 'F', to: 'B' },
	{ from: 'D', to: 'A' },
	{ from: 'C', to: 'F' },
]

const r = data(p)

console.log(r)
