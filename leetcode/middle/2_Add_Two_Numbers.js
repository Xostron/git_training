/**
 * @TITLE 2. Add Two Numbers
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 Вам даны два непустых связанных списка, представляющих два неотрицательных целых числа. Цифры в них хранятся в обратном порядке, и каждый из их узлов содержит одну цифру. 
 Сложите два числа и верните сумму в виде связанного списка. Можно предположить, что два числа не содержат ведущих нулей, кроме самого числа 0.

Связанный список - это объект {val:2, next:{val:4,next:{val:3,next:null}}}

Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.
Example 2:

Input: l1 = [0], l2 = [0]
Output: [0]
Example 3:

Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]

 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
	let r = (getLN(l1) + getLN(l2)).toString()
	console.log(111, JSON.stringify(l1), r, typeof r)

	r =
		r.length > 1
			? r
					.split('')
					.reverse()
					.map((el) => +el)
			: [r]
	r = transformLN(r)
	return r
}

/**
 * Рекурсия: Получить число из связанного списка
 * @param {object} list Связанный список
 * @param {number[]} arr Массив чисел
 * @returns {number} Совокупное число из массива
 */
function getLN(list, arr = []) {
	// Выход из рекурсии: Если элемент последний, добавляем в аккумулятор и возвращаем аккумулятор-число
	if (!list.next) {
		arr.push(list.val)
		return +arr.reverse().join('')
	}
	// Остальные элементы - вход в рекурсию
	arr.push(list.val)
	getLN(list.next, arr)
	// Возврат из рекурсии = число
	return +arr.reverse().join('')
}

/**
 * Получить связанный список из массива чисед
 * @param {*} arr
 * @param {*} obj
 * @returns
 */
function transformLN(arr, obj = {}) {
	// Условие выхода из рекурсии: Для массивов с длиной = 1 или последний элемент - возвращаем последний связанный элемент
	if (arr.length <= 1) return { val: +arr[0], next: null }
	// Все остальные связанные элементы
	for (let i = 0; i < arr.length; i++) {
		// Фиксируем val
		obj.val = arr[i]
		// Оставшая часть элементов массива
		const a = arr.slice(i + 1, arr.length)
		// связь:>1 вход в рекурсию, <=1 последний элемент без связи
		obj.next = a.length >= 1 ? transformLN(a) : { val: +arr[i + 1], next: null }
		// Возврат из рекурсии
		return obj
	}
}

console.log(
	'Result',
	addTwoNumbers({ val: 2, next: { val: 4, next: { val: 3, next: null } } }, { val: 5, next: { val: 6, next: { val: 4, next: null } } })
)
