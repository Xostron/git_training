/**
 * @param {string} s проверяемая строка на соответсвие шаблону
 * @param {string} p шаблон
 * @return {boolean} true - соответсвует шаблону
 */
var isMatch = function (s, p) {
	// Составление карты шаблона
	let pp = p
		.split('')
		.reduce((acc, el, i) => {
			// Родитель элемента
			const parent = acc.size ? acc.get(i - 1) : { start: [], length: [] }
			// Набор возможных стартовых позиций текущего символа,
			// в зависимости от кол-ва значимых символов перед ним
			let kit = p
				.slice(0, i)
				.split('')
				.filter((k) => k !== '*').length
			// Фильтруем из родителя (набор стартовых позиций предыдущего символа)
			kit = new Set(parent.start.filter((k) => k === '*' || k === '?' || k >= kit))
			// Дети
			if (el === '*') {
				// console.log(111, kit)
				acc.set(i, { el, start: ['*', i, ...kit], length: [0, '*', ...parent.length] })
				return acc
			}
			if (el === '?') {
				acc.set(i, { el, start: [i, ...kit], length: [1, ...parent.length] })
				return acc
			}
			// Любой символ отличный от "*", "?"
			acc.set(i, { el, start: [i, ...kit], length: [1, ...parent.length] })
			return acc
		}, new Map())
		.entries()
	// Map.entries() -> Object -> array values
	// Массив - карта шаблона
	pp = Object.values(Object.fromEntries(pp))
	// Массив тестируемой строки
	const ss = s.split('')
	// Набор значимых символов из шаблона
	let ppp = p.split('').filter((k) => k !== '*')
	console.log(555, pp, ppp)

	for (let i = 0; i < ss.length; i++) {
		// Поиск совпадений
		const match = pp.find((o, idx) => {
			// элемент карты undefined - пропускаем итерацию
			if (!o) return
            if (!o.start.includes('*') && i !== 0 && !ppp.includes(ss[i])) return
			if (((o.start.includes(i)) || (o.start.includes('*') && i !== 0)) && (o.el === ss[i] || o.el === '?' || o.el === '*')) {
				// Удаляем элемент карты при совпадении
				console.log(111, idx, ss[i], i, pp)
				if (o.el !== '*') delete pp[idx]
				return true
			}
		})
		// console.log(111, pp)
		// Символ не совпал со шаблоном, сразу выходим
		if (!match) {
			console.log('Не совпадение на позиции: ', i, ss[i])
			return false
		}
		// Совпал - проверяем дальше
		console.log(222, 'Совпадение: ', ss[i], i, pp)
	}
	return true
}

const a1 = { 1: 'adceb', 2: '*a*b' } // true
const a2 = { 1: 'acdcb', 2: 'a*c?b' } // false
const a3 = { 1: 'aa', 2: '*' } // true
const a4 = { 1: 'cb', 2: '?c' } // false
// console.log('Result', a1, isMatch(a1[1], a1[2]))
console.log('Result', a2, isMatch(a2[1], a2[2]))
// console.log('Result', a3, isMatch(a3[1], a3[2]))
// console.log('Result', a4, isMatch(a4[1], a4[2]))
