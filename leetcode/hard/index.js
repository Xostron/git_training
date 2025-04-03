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
    const rr =simple(s,p)
    if (rr!==undefined) return rr
	const cursor = { s: { start: 0, end: s.length - 1 }, p: { start: 0, end: p.length - 1 } }
	let obj = { val: new Array(s.length).fill(null), type: 'start' }
	middlew(s, p, cursor, obj)
	// Обработка строки по шаблону завершена obj.val:string[] => string
	const result = obj.val.filter((el) => el).join('')
	console.log(999, result, s, p)
	return result === s ? true : false
}

function simple(s,p){
    if (s===p) return true
    const isSimple = !p.includes('*') && !p.includes('?')
    if (isSimple){
        if (s===p) return true
        else return false
    }
}

function determine(character) {
	const type = character === '*' ? 'star' : character === '?' ? 'query' : 'character'
	return def[type]
}
const def = {
	star(s, p, cursor, obj) {
		console.log(3333)
		// 1. одна и таже звездочка в начале и в конце
		if (cursor.p.start === cursor.p.end) {
			obj.val[cursor.s.start] = s.slice(cursor.s.start, cursor.s.end + 1)
			cursor.s.end = cursor.s.start
			return true
		}
		// 2. Разные звездочки
		if (cursor.p.start !== cursor.p.end && obj.type == 'end') {
			// искать символы внутри звездочек
			obj.type = 'start'
			cursor.p.start++
			cursor.p.end--
			// Подготовка (поиск до первого вхождения элемента, если не найдено то выход! (совпадений не найдено))
			if (!prepare(s, p, cursor, obj)) return false
			middlew(s, p, cursor, obj)
			return true
		}
		// 3. Дошли до "*", переходим на star 1.
		if (cursor.p.start > cursor.p.end) {
			cursor.p.end++
			return true
		}
		// 4. проверка 1 звездочка - в начале ИЛИ в конце (переключаемся со звездочки на другой курсор, те курсоры не изменяем)
		obj.type = obj.type === 'start' ? 'end' : 'start'
		return true
	},
	query(s, p, cursor, obj) {
		console.log(33)
		obj.val[cursor.s[obj.type]] = s[cursor.s[obj.type]]
		if (obj.type == 'start') {
			cursor.p[obj.type]++
			cursor.s[obj.type]++
		} else {
			cursor.p[obj.type]--
			cursor.s[obj.type]--
		}
		return true
	},
	character(s, p, cursor, obj) {
		console.log(333, obj, cursor)
		// Символы не совпадают - не соответсвие
		if (s[cursor.s[obj.type]] !== p[cursor.p[obj.type]]) return false
		// Символы совпадают - соответсвие
		obj.val[cursor.s[obj.type]] = s[cursor.s[obj.type]]
		if (obj.type == 'start') {
			cursor.p[obj.type]++
			cursor.s[obj.type]++
		} else {
			cursor.p[obj.type]--
			cursor.s[obj.type]--
		}
		return true
	},
}
function prepare(s, p, cursor, obj) {
	// TODO сформировать комбинации (вхождения) и отправить на обработку, сохранить первоначальный obj
	const subObj = []
	// Поиск вхождений

	while (cursor.s.start < cursor.s.end) {
		obj.val[cursor.s[obj.type]] = s[cursor.s[obj.type]]
		console.log(888, obj, cursor)
		if (s[cursor.s[obj.type]] === p[cursor.p[obj.type]] || p[cursor.p[obj.type]] === '?') {
			// Совпадение найдено
			cursor.p[obj.type]++
			cursor.s.start++
			return true
		}
		cursor.s.start++
	}
	// все символы пройдены - совпадений не найдено
	// console.log(8881)
	return false
}
function middlew(s, p, cursor, obj) {
	while (true) {
		console.log(777, obj, cursor)
		const check = determine(p[cursor.p[obj.type]])
		// Обработка
		if (!check(s, p, cursor, obj)) {
			console.log(9999, [obj, cursor, s])
			return false
		}
		// обработка закончена
		if (cursor.s.start === cursor.s.end) {
			if (s.length === p.length) {
				const check = determine(p[cursor.p[obj.type]])
				check(s, p, cursor, obj)
			}
			return
		}
	}
}

function search(s,p,cursor,obj){
	const subObj = []
	const desire = 
	while (cursor.s.start < cursor.s.end) {

	}
}

function getDesire(s,p,cursor,obj){
	// строка шаблона - найти букву
	let pp = p.slice(cursor.p.start,cursor.p.end+1).split('')
	let desire=pp.find(el=>el!=='*'&&el!=='?')
	if (!desire) pp.find(el=>el!=='*')
		return desire

}
const a1 = { 1: 'adceb', 2: '*a*b' } // true
const a2 = { 1: 'acdcb', 2: 'a*c?b' } // false
const a3 = { 1: 'aa', 2: '*' } // true
const a4 = { 1: 'cb', 2: '?c' } // false
const a5 = { 1: 'aab', 2: 'c*a*b' } // false 1407
const a6 = { 1: 'ab', 2: '?*' } // true
const a7 = { 1: 'abefcdgiescdfimde', 2: 'ab*cd?i*de' } // true
const a8 = { 1: 'abcabczzzde', 2: '*abc???de*' } // false
// console.log('Result 1', a1, isMatch(a1[1], a1[2]))
// console.log('Result 2', a2, isMatch(a2[1], a2[2]))
// console.log('Result 3', a3, isMatch(a3[1], a3[2]))
// console.log('Result 4', a4, isMatch(a4[1], a4[2]))
// console.log('Result 5', a5, isMatch(a5[1], a5[2]))
// console.log('Result 6', a6, isMatch(a6[1], a6[2]))
// console.log('Result 7', a7, isMatch(a7[1], a7[2]))
console.log('Result 8', a8, isMatch(a8[1], a8[2]))