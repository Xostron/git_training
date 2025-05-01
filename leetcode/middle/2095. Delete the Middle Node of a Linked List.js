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
		stack = [],
		prefix
	while (current !== null) {
		if (size === 0) prefix = { val: current.val, next: {} }
		else {
			prefix.next.val = current.val
			prefix.next.next = {}
		}
        console.log(size, prefix)
		stack.push([prefix, current.next])

		current = current.next
		prefix = { ...prefix }
		size++
	}
	console.log(JSON.stringify(stack, null, ' '))
}

deleteMiddle({ val: 1, next: { val: 2, next: { val: 3, next: { val: 4, next: { val: 5, next: { val: 1, next: { val: 2, next: null } } } } } } })
