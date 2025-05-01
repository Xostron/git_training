/**
 * Дано начало односвязного списка. Преобразуйте список в обратном порядке и верните преобразованный список.
 */

/**
 * На месте
 * Вылетает по Maximum call stack size exceeded
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList1 = function (head) {
	if (!head || head.next === null) return head
	function reverse(obj, next, prev, idCur = 0, limit) {
		// Конец обработки
		if (limit === 1) {
			// console.log('FINISH', idCur, limit)
			return
		}
		// Конец итерации: конец связного списка || конец обработки на данной глубине
		if (next === null || idCur === limit) return reverse(head, obj.next, head, 0, idCur - 1)
		// Второй элемент - здесь можно менять местами предыдущий-текущий
		if (idCur > 0) {
			// console.log(111, idCur, next, prev)
			const temp = prev.val
			prev.val = next.val
			next.val = temp
		}
		// Первый элемент: даем эстафету
		if (idCur === 0) return reverse(head, obj.next, head, ++idCur, limit)
		// Последующие элементы: сдесь происходит перестановка
		return reverse(head, next.next, next, ++idCur, limit)
	}
	reverse(head)
	return head
}
// console.log(reverseList({"val":5,"next":{"val":4,"next":{"val":3,"next":{"val":2,"next":{"val":1,"next":null}}}}}))
// console.log(reverseList({}))

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
    if (!head || head.next === null) return head
	let list
	function reverseL(h) {
		list = new ListNode(h.val, list)
		if (h.next === null) return list
		return reverseL(h.next)
	}
	return reverseL(head)
}
console.log(JSON.stringify(reverseList({ val: 5, next: { val: 4, next: { val: 3, next: { val: 2, next: { val: 1, next: null } } } } })))
// console.log(reverseList({}))

function ListNode(val, next) {
	this.val = val === undefined ? 0 : val
	this.next = next === undefined ? null : next
}
// Генератор списка
// let list
// ;[1, 2, 3, 4, 5].forEach((el) => {
// 	list = new ListNode(el, list)
// })
// console.log(JSON.stringify(list))
// Быстрее
var reverseList = function(head) {
    let prev = null;
   let current = head;

   while (current !== null) {
       let nextNode = current.next;  // Save next node
       current.next = prev;          // Reverse the link
       prev = current;               // Move prev forward
       current = nextNode;           // Move current forward
   }

   return prev; 
};