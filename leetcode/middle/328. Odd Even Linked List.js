/**
 * Учитывая начало односвязного списка, сгруппируйте все узлы с нечётными индексами вместе,
 * а затем узлы с чётными индексами и верните переупорядоченный список.
 * Первый узел считается нечётным, второй — чётным и так далее.
 * Обратите внимание, что относительный порядок внутри чётных и нечётных групп должен оставаться таким же, как во входных данных.
 * Вы должны решить задачу с дополнительной сложностью O(1) и временной сложностью O(n).
 *
 * Example 1:
 * Input: head = [1,2,3,4,5]
 * Output: [1,3,5,2,4]
 *
 * Example 2:
 * Input: head = [2,1,3,5,6,4,7]
 * Output: [2,3,6,7,1,5,4]
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList1 = function (head) {
	if (!head || !head.next || !head.next?.next) return head
	let he = JSON.parse(JSON.stringify(head.next)),
		// нечетный
		odd = head,
		// четный
		even = he,
		temp = odd.next,
		r = temp,
		last
	while (odd !== null && even !== null) {
		odd.next = temp.next
		odd = odd.next
		if (odd?.next === undefined) break
		temp.next = odd.next
		temp = temp.next
		even.next = temp
		even = even.next
		last = odd
		console.log(111, JSON.stringify(he), JSON.stringify(r)) // JSON.stringify(even1, null, ' ')
	}
	last.next = he
	return head
}

var oddEvenList = function (head) {
	if (!head || !head.next || !head.next?.next) return head
	// let he = JSON.parse(JSON.stringify(head.next)),
	// нечетный
	let odd = head,
		// четный
		// even = he,
		temp = odd.next,
		r = temp
	// last
	while (odd && temp && temp.next) {
		odd.next = temp.next
		odd = odd.next
		// if (odd?.next === undefined) break
		temp.next = odd.next
		temp = temp.next
		// even.next = temp
		// even = even.next
		// last = odd
		// console.log(111, JSON.stringify(he), JSON.stringify(r)) // JSON.stringify(even1, null, ' ')
	}
	odd.next = r
	return head
}

console.log(
	222,
	JSON.stringify(oddEvenList({ val: 1, next: { val: 2, next: { val: 3, next: { val: 4, next: { val: 5, next: { val: 6, next: null } } } } } }))
)
console.log(222, JSON.stringify(oddEvenList({ val: 1, next: { val: 2, next: { val: 3, next: { val: 4, next: { val: 5, next: null } } } } })))
// console.log(222, JSON.stringify(oddEvenList({ val: 1, next: { val: 2, next: null } })))

// Быстрее решение
var oddEvenList2 = function (head) {
	if (!head && !head.next) return head

	let odd = head
	let even = head.next
	let evenHead = even

	while (even && even.next) {
		odd.next = even.next
		odd = odd.next
		even.next = odd.next
		even = even.next
	}

	odd.next = evenHead
	return head
}
