/**
 *
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
var deleteMiddle = function (head) {
	let current = head,
		size = 0,
		stack = []
	while (current !== null) {
		stack.push(current)
		current = current.next
		size++
	}
	const mid = Math.round(stack.length / 2)
	stack[mid - 1].next = stack?.[mid + 1] ? stack?.[mid + 1] : null
	return head
}

deleteMiddle({ val: 1, next: { val: 2, next: { val: 3, next: { val: 4, next: { val: 5, next: { val: 1, next: { val: 2, next: null } } } } } } })


/**
 * Алгоритм, быстрый и медленный указатель
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteMiddle = function(head) {
    if (!head || !head.next) return null;
  
    let slow = head;
    let fast = head;
    let prev = null;
    while (fast && fast.next) {
      fast = fast.next.next;
      prev = slow;
      slow = slow.next;
    }
    prev.next = slow.next;
    return head;
  };