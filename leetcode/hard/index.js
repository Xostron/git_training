/**
 * @param {string} s проверяемая строка на соответсвие шаблону
 * @param {string} p шаблон
 * @return {boolean} true - соответсвует шаблону
 */

var isMatch = function (s, p) {
	// Строки равны
	if (s === p) return true
	// Пустая строка
	if (!p.length) return false
	// Разбиваем шаблон на интервалы
	const arrP = template(p)
	console.log(1111, 'Интервалы шаблона', arrP)
	// Для каждого интервала (подстрока из шаблона) ищем вхождения в тестовой строке s
	const variant = fnEntries(s, arrP)
	console.log(9999, 'Вхождения', variant)

	const r = Object.values(variant)
	// шаблон с одним интервалом
	if (r.length === 1 && r[0].length) {
		// console.log(8888, r)
		return true
	}
	// поиск пустых вхождений
	else if (r.length === 1 && !r[0].length) {
		// console.log(7777, r)
		return false
	}
	for (const entries of r) {
		if (!entries.length) return false
	}

	/**
	 * Тестовая строка 'abefcdgiescdfimde'
	 * шаблон = 'ab*cd?i*de'
	 * Интервалы шаблона [ 'ab*', '*cd?i*', '*de' ],
	 * Вхождения variant =  {
	 * '0': [ [ 0, 1 ] ],
	 * '1': [ [ 4, 7 ], [ 10, 13 ] ],
	 * '2': [ [ 15, 16 ] ]}
	 *
	 * Необходимо найти комбинацию интервалов 0:[], 1:[], 2:[], так, чтобы итоговая последовательность
	 * цифр имела уникальные числа и шла по возрастанию
	 * list = [ 0, 1 ], [ 4, 7 ], [ 15, 16 ]
	 * Если цепочка по данным правилам собралась значит строка соответсвует шаблону
	 */

	return check(r)
	// return true
}

// Разбиваем шаблон на  интервалы **a**b**:<arrP> = [ '*a*', '*b*' ] || a**b** = [ 'a*', '*b*' ]
function template(p) {
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
	let stop = false
	return arrP.reduce((acc, el, idx) => {
		if (stop) return acc
		const inner = []
		const included = []
		let exit
		let count = 0
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
			if (exit) break
			k = el.slice(1, el.length - 1)
			const idx = k.split('').findIndex((kk) => kk != '?')
			if (type !== 'empty' && type != 'strong') {
				if (arrP.length === 1 && s.length - start <= k.length - idx) exit = true
				// if ( s.length - start < el.length - 2) break
				if (arrP.length > 1 && s.length - start < el.length - 2) break
				// console.log(888, inner)
			}
			// Поиск вхождений
			const o = def[type](s, el, acc, start, count)
			count++
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
		if (!included.length) stop = true
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
		o.included = 0
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
	fb(s, el, acc, start, count) {
		// Убрать звездочки из интервала
		el = el.slice(1, el.length - 1)
		// Поиск подстроки el в тестовой строке s с учетом "?"
		// onlyQ | onlyA | mixed
		const type = this.fnTypeStr(el)
		// console.log(111, type)
		return this[type](s, el, start, count)
	},
	mixed(s, el, start, count) {
		// el содержит хотя бы одну букву type = false
		const o = { code: 'next', result: false }
		// 1 найти первую букву в интервале
		const first = { idx: el.split('').findIndex((k) => k != '?'), val: null }
		first.val = el[first.idx]
		// 2 найти эту букву в тестовой строке
		// console.log(223, count, el, 'start=', start, 'cur idx=', first.idx)
		start = count === 0 ? start : start + first.idx
		// console.log(224, count, el, 'start=', start, 'cur idx=', first.idx)
		// start = start <= 0 && first.idx > 0 ? start + first.idx  : start
		// start = start+first.idx
		const test = { idx: s.indexOf(first.val, start) }
		// const test = { idx: s.indexOf(first.val, start) }
		// console.log(333, 'mixed', start, el, first, test)
		if (test.idx === -1) return null
		// 3 относительно  найденной буквы в тесте, slice строки = длине строки интервала
		test.sub = s.slice(test.idx - first.idx, test.idx + el.length - first.idx)
		// 4 если подстрока != длине интервала, то переход к следующему поиску
		// if (test.sub.length !== el.length) return { ...o, excluded: [test.idx] }
		if (test.sub.length !== el.length) return { ...o, excluded: [test.idx - first.idx, test.idx + el.length - first.idx - 1] }
		// 5 Найденная подстрока подходит по длине, сверка данной подстроки с интервалом (функция strong)
		// не соответсвует
		if (!el.split('').every((pp, i) => (pp == '?' || pp == test.sub[i] ? true : false))) return { ...o, excluded: [test.idx - first.idx, test.idx + el.length - first.idx - 1] }
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
	onlyQfrwd(s, el, start) {
		// el полностью состоит из "?" type = true
		const o = { code: 'finish', frwd: false }
		const test = { idx: start, sub: s.slice(start, start + el.length) }
		if (test.sub.length !== el.length) return o
		return { ...o, frwd: true, included: [s.length - el.length, s.length - 1] }
	},
	// 3. 1 интервал звездочка спереди frwd - поиск с конца
	frwd(s, el, acc, start) {
		const o = { code: 'finish', frwd: false }
		// Убрать звездочки из интервала
		el = el.slice(1, el.length)

		const type = this.fnTypeStr(el)
		if (type === 'onlyQ') return this.onlyQfrwd(s, el, 0)

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
	onlyQback(s, el, start) {
		// el полностью состоит из "?" type = true
		const o = { code: 'finish', next: false }
		const test = { idx: start, sub: s.slice(start, start + el.length) }
		if (test.sub.length !== el.length) return o
		return { ...o, next: true, included: [0, el.length - 1] }
	},
	// 4. 1 интервал звездочка в конце back поиск с начала
	back(s, el, acc, start) {
		const o = { code: 'finish', next: false }
		// Убрать звездочки из интервала
		el = el.slice(0, el.length - 1)

		const type = this.fnTypeStr(el)
		if (type === 'onlyQ') return this.onlyQback(s, el, 0)

		// 1 найти первую букву в интервале
		const first = { idx: el.split('').findIndex((k) => k != '?'), val: null }
		first.val = el[first.idx]
		// 2 найти эту букву в тестовой строке
		const test = { idx: s.indexOf(first.val, 0 + first.idx) }
		console.log(333, el, test, first)
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

function check(r) {
	let result = []
	const cursor = new Array(r.length).fill(0)
	const finish = r.map((el) => el.length)
	// console.log(333, r, cursor, finish)
	while (true) {
		for (let lvl = 0; lvl < r.length; lvl++) {
			const entries = r[lvl]
			for (let i = 0; i < entries.length; i++) {
				const prev = result[result.length - 1]
				const cur = entries[i]
				if (!prev) {
					result.push(cur)
					// Выход на уровень
					break
				} else {
					// сбор цепочки
					if (cur[0] <= prev[1]) continue
					result.push(cur)
					break
				}
			}
		}
		const resultSize = result.length
		result = result.flatMap((el) => (el[0] === el[1] ? el[0] : el))
		const set = new Set(result)
		console.log(444, result, set)
		if (resultSize === cursor.length && result.length === set.size) return true
		return false
		// break
	}
}

const a1 = { 1: 'adceb', 2: '**a*c*b**' } // true
const a2 = { 1: 'acdcb', 2: 'a*c?b' } // false
const a3 = { 1: 'baab', 2: '*?ab*' } // true
const a4 = { 1: 'cb', 2: '?c' } // false
const a5 = { 1: 'aab', 2: 'c*a*b' } // false 1407
const a6 = { 1: 'ab', 2: '*q*' } // true
const a7 = { 1: 'abefcdgiescdfimde', 2: 'ab*?*de' } // true
const a8 = { 1: 'abcabczzzde', 2: '*abc???de*' } // true
const a9 = { 1: 'mississippi', 2: '*m??*ss*?i*pi' } // false
const a10 = { 1: 'mississippi', 2: '*m??*ss*?i*pi' } // false
// console.log('Result 1', a1, 'Соответсвует:', isMatch(a1[1], a1[2]))// true
// console.log('Result 2', a2, 'Соответсвует:', isMatch(a2[1], a2[2])) // false
console.log('Result 3', a3, 'Соответсвует:', isMatch(a3[1], a3[2])) // true
// console.log('Result 4', a4,"Соответсвует:", isMatch(a4[1], a4[2]))// false
// console.log('Result 5', a5, 'Соответсвует:', isMatch(a5[1], a5[2])) // false 1407
// console.log('Result 6', a6,"Соответсвует:", isMatch(a6[1], a6[2]))// true
// console.log('Result 7', a7, 'Соответсвует:', isMatch(a7[1], a7[2])) // true
// console.log('Result 8', a8, 'Соответсвует:', isMatch(a8[1], a8[2])) // true
// console.log('Result 9', a9, 'Соответсвует:', isMatch(a9[1], a9[2])) // false


// Чье-то решение
// Чье то решение
var isMatch2 = function(s, p) {
    let sIdx = 0, pIdx = 0, starIdx = -1, match = 0;
    
    while (sIdx < s.length) {
        // If characters match or pattern has '?', move both pointers
        if (pIdx < p.length && (p[pIdx] === '?' || s[sIdx] === p[pIdx])) {
            sIdx++;
            pIdx++;
        }
        // If pattern has '*', store its position and try matching zero characters first
        else if (pIdx < p.length && p[pIdx] === '*') {
            starIdx = pIdx;
            match = sIdx;
            pIdx++;
        }
        // If mismatch occurs and '*' was encountered before, backtrack to '*' and try matching one more character
        else if (starIdx !== -1) {
            pIdx = starIdx + 1;
            match++;
            sIdx = match;
        }
        // No match found
        else {
            return false;
        }
    }

    // Ensure remaining characters in pattern are '*' (as '*' can match empty)
    while (pIdx < p.length && p[pIdx] === '*') pIdx++;

    return pIdx === p.length;
};