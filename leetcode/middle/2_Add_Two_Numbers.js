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
 * Definition for singly-linked list.

 */
function ListNode(val, next) {
	this.val = (val === undefined ? 0 : val)
	this.next = next === undefined ? null : next
}
/**
 * Рекурсия: Получить число из связанного списка
 * @param {listNode} list Связанный список
 * @param {string} acc Массив чисел
 * @returns {string} Число
 */
function getLN(list, acc = '') {
	// Выход из рекурсии: конец связного списка
	if (!list.next) {
		acc += list.val
		return acc
	}
	// Остальные элементы - вход в рекурсию
	acc += list.val
	return getLN(list.next, acc)
}

/**
 * Сложение строк как чисел (для обработки больших чисел, > bigInt (10e16))
 * @param {string} s1
 * @param {string} s2
 * @return {number[]} сумма чисел в виде массива
 */
function sum(s1, s2) {
	let sum = []
	let aux = 0
	const length = s1.length > s2.length ? s1.length : s2.length
	for (let i = 0; i < length; i++) {
		const s = +(s1[i] ?? 0) + +(s2[i] ?? 0) + aux
		aux = Math.trunc(s / 10)
		sum.push(s % 10)
	}
	aux ? sum.push(aux) : null
	return sum
}

/**
 * Получить связанный список из массива чисел
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

/**
 * Сумма
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
	let r = sum(getLN(l1), getLN(l2))
	return transformLN(r)
}

const a1 = {
	1: { val: 2, next: { val: 4, next: { val: 9, next: null } } },
	2: { val: 5, next: { val: 6, next: { val: 4, next: { val: 9, next: null } } } },
}
const a2 = {
	1: {
		val: 1,
		next: {
			val: 0,
			next: {
				val: 0,
				next: {
					val: 0,
					next: {
						val: 0,
						next: {
							val: 0,
							next: {
								val: 0,
								next: {
									val: 0,
									next: {
										val: 0,
										next: {
											val: 0,
											next: {
												val: 0,
												next: {
													val: 0,
													next: {
														val: 0,
														next: {
															val: 0,
															next: {
																val: 0,
																next: {
																	val: 0,
																	next: {
																		val: 0,
																		next: {
																			val: 0,
																			next: {
																				val: 0,
																				next: {
																					val: 0,
																					next: {
																						val: 0,
																						next: {
																							val: 0,
																							next: {
																								val: 0,
																								next: {
																									val: 0,
																									next: {
																										val: 0,
																										next: {
																											val: 0,
																											next: {
																												val: 0,
																												next: {
																													val: 0,
																													next: {
																														val: 0,
																														next: {
																															val: 0,
																															next: {
																																val: 1,
																																next: null,
																															},
																														},
																													},
																												},
																											},
																										},
																									},
																								},
																							},
																						},
																					},
																				},
																			},
																		},
																	},
																},
															},
														},
													},
												},
											},
										},
									},
								},
							},
						},
					},
				},
			},
		},
	},
	2: { val: 5, next: { val: 6, next: { val: 4, next: null } } },
}
const a3 = new ListNode(1, null)
let a4 = a3
a4.next=new ListNode(2)
a4 = a4.next
a4.next = new ListNode(3, 1)
console.log('Result', JSON.stringify(addTwoNumbers(a2[1], a2[2])))
console.log(111,a3, a3.val)
