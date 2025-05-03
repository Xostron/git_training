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
var oddEvenList = function (head) {
	if (!head || !head.next || !head.next?.next) return head
	let he = JSON.parse(JSON.stringify(head)),
		ho = JSON.parse(JSON.stringify(head.next)),
		// нечетный
		even = he,
		// четный
		odd = ho,
		pe = even.next,
		last
	while (even !== null && pe !== null && odd !== null) {
		even.next = pe.next
		even = even.next
		if (even?.next === undefined) break
		pe.next = even.next
		pe = pe.next
		odd.next = pe
		odd = odd.next
		last = even
		// console.log(111, JSON.stringify(he), JSON.stringify(ho)) // JSON.stringify(odd, null, ' ')
	}
	last.next = ho
	return he
}

// console.log(
// 	222,
// 	JSON.stringify(oddEvenList({ val: 1, next: { val: 2, next: { val: 3, next: { val: 4, next: { val: 5, next: { val: 6, next: null } } } } } }))
// )
console.log(222, JSON.stringify(oddEvenList({ val: 1, next: { val: 2, next: null } })))
