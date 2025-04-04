/**
 * @param {string} s проверяемая строка на соответсвие шаблону
 * @param {string} p шаблон
 * @return {boolean} true - соответсвует шаблону
 */
// var isMatch = function (s, p) {
// 	// Составление карты шаблона
// 	let pp = p
// 		.split('')
// 		.reduce((acc, el, i) => {
// 			// Родитель элемента
// 			const parent = acc.size ? acc.get(i - 1) : { start: [], length: [] }
// 			// Набор возможных стартовых позиций текущего символа,
// 			// в зависимости от кол-ва значимых символов перед ним
// 			let kit = p
// 				.slice(0, i)
// 				.split('')
// 				.filter((k) => k !== '*').length
// 			// Фильтруем из родителя (набор стартовых позиций предыдущего символа)
// 			kit = new Set(parent.start.filter((k) => k === '*' || k === '?' || k >= kit))
// 			// Дети
// 			if (el === '*') {
// 				// console.log(111, kit)
// 				acc.set(i, { el, start: ['*', i, ...kit], length: [0, '*', ...parent.length] })
// 				return acc
// 			}
// 			if (el === '?') {
// 				acc.set(i, { el, start: [i, ...kit], length: [1, ...parent.length] })
// 				return acc
// 			}
// 			// Любой символ отличный от "*", "?"
// 			acc.set(i, { el, start: [i, ...kit], length: [1, ...parent.length] })
// 			return acc
// 		}, new Map())
// 		.entries()
// 	// Map.entries() -> Object -> array values
// 	// Массив - карта шаблона
// 	pp = Object.values(Object.fromEntries(pp))
// 	// Массив тестируемой строки
// 	const ss = s.split('')
// 	// Набор значимых символов из шаблона
// 	let ppp = p.split('').filter((k) => k !== '*')
// 	// console.log(555, pp, ppp)

// 	for (let i = 0; i < ss.length; i++) {
// 		// 1 случай не совпадения
// 		// console.log(666, ss[i], i)
// 		if (p[i] !== '*' && p[i] !== '?' && i === 0) if (s[i] !== p[i]) return false
// 		// Поиск совпадений
// 		const match = pp.find((o, idx) => {
// 			// элемент карты undefined - пропускаем итерацию
// 			if (!o) return
// 			let accept = false
// 			if (o.start.includes('*')) {
// 				accept = o.start.some((k) => i >= k)
// 			}
// 			if (ppp.includes(ss[i]) && accept) {
// 				// Проверка по значимым разрядам
// 				console.log(6661, ss[i], i)
// 				if ((o.start.includes(i) || accept) && o.el === ss[i]) {
// 					// удаляем карту совпадения
// 					// delete pp[idx]
// 					pp = pp.slice(idx + 1, pp.length)
// 					// Удаляем из значащих
// 					delete ppp[ppp.findIndex((el) => el === ss[i])]
// 					return true
// 				}
// 			} else {
// 				// не значимый разряд
// 				console.log(6662, 'не значимый разряд', ss[i], i)
// 				if (o.start.includes('*') && (o.el === '?' || o.el === '*')) {
// 					// Удаление "?" из карты+значащих
// 					if (o.el === '?') {
// 						// console.log(444)
// 						pp = pp.slice(idx + 1, pp.length)
// 						delete ppp[ppp.findIndex((el) => el === '?')]
// 					}
// 					return true
// 				}
// 			}
// 		})

// 		// Символ не совпал со шаблоном, сразу выходим
// 		if (!match) {
// 			console.log(333, 'Не совпадение на позиции: ', i, ss[i], ppp)
// 			return false
// 		} else {
// 			// Совпал - проверяем дальше
// 			console.log(222, 'Совпадение: ', ss[i], i, ppp)
// 		}
// 	}
// 	// console.log(999, ppp, ppp.find(el=>!!el))
// 	// Если после проверки шаблоном, остались символы значащих разрядом, то это не совпадение
// 	const t = ppp.find((el) => !!el)
// 	if (t !== '?' && t !== undefined) return false
// 	// Совпадение
// 	return true
// }

var isMatch = function (s, p) {

}

const a1 = { 1: 'adceb', 2: '*a*b' } // true
const a2 = { 1: 'acdcb', 2: 'a*c?b' } // false
const a3 = { 1: 'aa', 2: '*' } // true
const a4 = { 1: 'cb', 2: '?c' } // false
const a5 = { 1: 'aab', 2: 'c*a*b' } // false 1407
const a6 = { 1: 'ab', 2: '?*' } // true
const a7 = { 1: 'abefcdgiescdfimde', 2: 'ab*cd?i*de' } // true
const a8 = { 1: 'abcabczzzde', 2: '*abc???de*' } // false
console.log('Result 1', a1, isMatch(a1[1], a1[2]))
// console.log('Result 2', a2, isMatch(a2[1], a2[2]))
// console.log('Result 3', a3, isMatch(a3[1], a3[2]))
// console.log('Result 4', a4, isMatch(a4[1], a4[2]))
// console.log('Result 5', a5, isMatch(a5[1], a5[2]))
// console.log('Result 6', a6, isMatch(a6[1], a6[2]))
// console.log('Result 7', a7, isMatch(a7[1], a7[2]))
// console.log('Result 8', a8, isMatch(a8[1], a8[2]))
const r = true
const rr=false


let str = 'h2'
const result = str.match(/h2/gi)
console.log(222,str, result)