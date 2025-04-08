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
	// Разбиваем шаблон на интервалы
	const arrP = template(p)
	console.log(1111, 'Интервалы шаблона', arrP)
	// Для каждого интервала (подстрока из шаблона) ищем вхождения в тестовой строке s
	const variant = fnEntries(s, arrP)
	console.log(9999, 'Вхождения', variant)
	// Пытаемся из массива вхождений собрать последовательную цепочку
	// 1 проверка на отсутствие вхождений
	for (const key in variant) {
		// не соответсвует, найден пустой массив
		if (!variant[key].length) return false
		// Соответсвует,
		// if (variant[key].length===1) return true
	}

	const r = Object.values(variant)
	console.log('Поиск соответсвия', r)
	for (let key = r.length - 1; key >= 0; key--) {
		console.log(key, r[key])
	}
	return true
}

// Разбиваем шаблон на  интервалы **a**b**:<arrP> = [ '*a*', '*b*' ] || a**b** = [ 'a*', '*b*' ]
function template(p) {
	// Пустая строка
	if (!p.length) return []
	// Строка состоит только из '*'
	if (p.split('').every((el) => el == '*')) return ['*']
	// Строга, включающая себя строгие символы
	return p
		.split('*')
		.filter((el) => el)
		.map((el, i) => {
			if (!el[0]) return el
			const idx = p.indexOf(el[0])
			let sub = el
			if (p[idx - 1] == '*') sub = '*' + el
			if (p[idx + el.length] == '*') sub += '*'
			p = p.slice(idx + el.length)
			return sub
		})
}

// Находим интервалы вхождений в тестовой строке: return [[...индексы],..]
function fnEntries(s, arrP) {
	if (arrP.length === 1 && arrP[0] === '*') return { 0: [0] }
	return arrP.reduce((acc, el, idx) => {
		const inner = []
		const included = []
		let test = 0
		while (true) {
			// Позиция на тестовой строке с которой будет производится поис
			const start =
				inner[inner.length - 1] === undefined
					? 0
					: typeof inner[inner.length - 1] == 'number'
					? inner[inner.length - 1] + 1
					: inner[inner.length - 1][0] + 1
			// type = empty | strong | fb | frwd | back
			const type = fnType(el)
			// Условия выхода
			if (type !== 'empty' && type != 'strong' && s.length - start < el.length - 2) {
				break
			}
			// Поиск вхождений
			const o = def[type](s, el, acc, start)
			// console.log(222, type)
			// Условия выхода
			if (o === null) break
			// Анализ отввета
			// Полный выход
			// back
			if (o.code == 'finish' && o.next === false) {
				// included = null
				break
			}
			if (o.code == 'finish' && o.next === true) {
				included.push(o.included)
				break
			}
			// frwd
			if (o.code == 'finish' && o.frwd === false) {
				// included = null
				// console.log(111, o, el)
				break
			}
			if (o.code == 'finish' && o.frwd === true) {
				included.push(o.included)
				break
			}
			// strong | empty
			if (o.code == 'finish' && o.result === false) {
				// included = null
				break
			}
			if (o.code == 'finish' && o.result === true) {
				included.push(o.included)
				break
			}
			// fb
			if (o.code == 'next') {
				if (o.excluded) {
					inner.push(o.excluded)
				}
				if (o.included) {
					inner.push(o.included)
					included.push(o.included)
				}
			}
			// console.log(444, start, o)
			// if (++test > 2) {
			// 	break
			// }
		}
		acc[idx] = included
		return acc
	}, {})
}

const def = {
	/**
	 *
	 * @param {string} s тестовая строка
	 * @param {string} el интервал из шаблона
	 * @returns {object} code:'finish: все вхождения найдены' | 'next' - начать поиск следующего вхождения
	 *                   result: true соответсвует
	 *                   idx: индекс входения в тестовой строке
	 */
	// Интервал - Пустая строка
	empty(s, el, acc) {
		const o = { code: 'finish', result: false }
		if (s !== el) return o
		// совпали
		o.result = true
		return o
	},
	// Интервал - Состоит только из строгих символов (буква | ?)
	strong(s, el, acc) {
		const o = { code: 'finish', result: false }
		if (s.length !== el.length) return o
		// анализ на a | ?a | a? | ? | ??? - Если не совпали
		if (!el.split('').every((pp, i) => (pp == '?' || pp == s[i] ? true : false))) return o
		// Совпали
		o.result = true
		o.included=0
		return o
	},
	fnTypeStr(el) {
		const set = new Set(el.split(''))
		// el состоит только из ?
		if (set.has('?') && set.size === 1) return 'onlyQ'
		if (set.has('?')) return 'mixed'
		return 'onlyA'
	},
	// Интервал со звездочкой в начале и в конце
	fb(s, el, acc, start) {
		// Убрать звездочки из интервала
		el = el.slice(1, el.length - 1)
		// Поиск подстроки el в тестовой строке s с учетом "?"
		// onlyQ | onlyA | mixed
		const type = this.fnTypeStr(el)
		// console.log(111, type)
		return this[type](s, el, start)
	},
	mixed(s, el, start) {
		// el содержит хотя бы одну букву type = false
		const o = { code: 'next', result: false }
		// 1 найти первую букву в интервале
		const first = { idx: el.split('').findIndex((k) => k != '?'), val: null }
		first.val = el[first.idx]
		// 2 найти эту букву в тестовой строке
		const test = { idx: s.indexOf(first.val, start + first.idx) }
		if (test.idx === -1) return null
		// 3 относительно  найденной буквы в тесте, slice строки = длине строки интервала
		test.sub = s.slice(test.idx - first.idx, test.idx + el.length - first.idx)
		// 4 если подстрока != длине интервала, то переход к следующему поиску
		if (test.sub.length !== el.length) return { ...o, excluded: [test.idx] }
		// 5 Найденная подстрока подходит по длине, сверка данной подстроки с интервалом (функция strong)
		// не соответсвует
		if (!el.split('').every((pp, i) => (pp == '?' || pp == test.sub[i] ? true : false))) return { ...o, excluded: [test.idx] }
		// соответсвует
		return { ...o, result: true, included: [test.idx - first.idx, test.idx + el.length - first.idx - 1] }
	},
	onlyQ(s, el, start) {
		// el полностью состоит из "?" type = true
		const o = { code: 'next', result: false }
		const test = { idx: start, sub: s.slice(start, start + el.length) }
		if (test.sub.length !== el.length) return { ...o, excluded: [test.idx] }
		return { ...o, result: true, included: [start, start + el.length - 1] }
	},
	onlyA(s, el, start) {
		// el полностью состоит из "букв" type = true
		const o = { code: 'next', result: false }
		const test = { idx: s.indexOf(el[0], start) }
		if (test.idx === -1) return null
		test.sub = s.slice(test.idx, test.idx + el.length)
		// console.log(331, test, el)
		// Не соответствует
		if (test.sub.length !== el.length || test.sub != el) return { ...o, excluded: [test.idx] }
		// соответсвует
		return { ...o, result: true, included: [test.idx, test.idx + el.length - 1] }
	},
	// 3. 1 интервал звездочка спереди frwd - поиск с конца
	frwd(s, el, acc, start) {
		const o = { code: 'finish', frwd: false }
		// Убрать звездочки из интервала
		el = el.slice(1, el.length)
		// 1 найти первую букву в интервале
		const first = { idx: el.split('').findIndex((k) => k != '?'), val: null }
		first.val = el[first.idx]
		// 2 найти эту букву в тестовой строке с конца
		const test = { idx: s.indexOf(first.val, s.length - (el.length - first.idx)) }
		if (test.idx === -1) return null
		// 3 относительно  найденной буквы в тесте, slice строки = длине строки интервала
		test.sub = s.slice(s.length - el.length)
		// console.log(11,el,  test, first)
		// 4 если подстрока != длине интервала, то переход к следующему поиску
		if (test.sub.length !== el.length) return o
		// 5 Найденная подстрока подходит по длине, сверка данной подстроки с интервалом (функция strong)
		// не соответсвует
		if (!el.split('').every((pp, i) => (pp == '?' || pp == test.sub[i] ? true : false))) return o
		// соответсвует
		return { ...o, frwd: true, included: [s.length - el.length, s.length - 1] }
	},
	// 4. 1 интервал звездочка в конце back поиск с начала
	back(s, el, acc, start) {
		const o = { code: 'finish', next: false }
		// Убрать звездочки из интервала
		el = el.slice(0, el.length - 1)
		// 1 найти первую букву в интервале
		const first = { idx: el.split('').findIndex((k) => k != '?'), val: null }
		first.val = el[first.idx]
		// 2 найти эту букву в тестовой строке
		const test = { idx: s.indexOf(first.val, 0 + first.idx) }
		// console.log(333,el, test, first)
		if (test.idx === -1) return null
		// 3 относительно  найденной буквы в тесте, slice строки = длине строки интервала
		test.sub = s.slice(0, el.length)
		// 4 если подстрока != длине интервала, то переход к следующему поиску
		if (test.sub.length !== el.length) return o
		// 5 Найденная подстрока подходит по длине, сверка данной подстроки с интервалом (функция strong)
		// не соответсвует
		if (!el.split('').every((pp, i) => (pp == '?' || pp == test.sub[i] ? true : false))) return o
		// соответсвует
		return { ...o, next: true, included: [0, el.length - 1] }
	},
}

// вернуть тип интервала шаблона
function fnType(el) {
	// 1. 1 Пустой интервал empty
	// 2. 1 интервал без звездочек strong
	// 3. 1 интервал звездочка спереди frwd
	// 4. 1 интервал звездочка в конце back
	// 5. 1 итервал звездочка в начале и конце fb
	// несколько итервалов - комбинация из 3 - 5 пунктов
	if (el == '') return 'empty'
	if (!el.includes('*')) return 'strong'
	if (el.startsWith('*') && el.endsWith('*')) return 'fb'
	if (el.startsWith('*')) return 'frwd'
	return 'back'
}

const a1 = { 1: 'adceb', 2: '**a*c*b**' } // true
const a2 = { 1: 'acdcb', 2: 'a*c?b' } // false
const a3 = { 1: 'aa', 2: '??' } // true
const a4 = { 1: 'cb', 2: '?c' } // false
const a5 = { 1: 'aab', 2: 'c*a*b' } // false 1407
const a6 = { 1: 'ab', 2: '*q*' } // true
const a7 = { 1: 'abefcdgiescdfimde', 2: 'ab*cd?i*de' } // true
const a8 = { 1: 'abcabczzzde', 2: '*abc???de*' } // true
// console.log('Result 1', a1, 'Соответсвует:', isMatch(a1[1], a1[2]))// true
// console.log('Result 2', a2, 'Соответсвует:', isMatch(a2[1], a2[2])) // false
console.log('Result 3', a3, 'Соответсвует:', isMatch(a3[1], a3[2])) // true
// console.log('Result 4', a4,"Соответсвует:", isMatch(a4[1], a4[2]))// false
// console.log('Result 5', a5,"Соответсвует:", isMatch(a5[1], a5[2]))// false 1407
// console.log('Result 6', a6,"Соответсвует:", isMatch(a6[1], a6[2]))// true
// console.log('Result 7', a7,"Соответсвует:", isMatch(a7[1], a7[2]))// true
// console.log('Result 8', a8,"Соответсвует:", isMatch(a8[1], a8[2]))// true
