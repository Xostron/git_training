/**
 * В связанном списке размером n, где n — чётное число,
 * i-й узел (нумерация начинается с 0) связанного списка называется двойником
 * (n-1-i)-го узла, если 0 <= i <= (n / 2) - 1.
 * Например, если n = 4, то узел 0 является двойником узла 3,
 * а узел 1 — двойником узла 2. Это единственные узлы с двойниками для n = 4.
 * Двойная сумма определяется как сумма узла и его двойника.
 * Учитывая начало связанного списка чётной длины,
 * верните максимальную двойную сумму связанного списка.
 *
 * Example 1:
 * Input: head = [5,4,2,1]
 * Output: 6
 * Explanation:
 * Nodes 0 and 1 are the twins of nodes 3 and 2, respectively. All have twin sum = 6.
 * There are no other nodes with twins in the linked list.
 * Thus, the maximum twin sum of the linked list is 6.
 *
 * Example 2:
 * Input: head = [4,2,2,3]
 * Output: 7
 * Explanation:
 * The nodes with twins present in this linked list are:
 * - Node 0 is the twin of node 3 having a twin sum of 4 + 3 = 7.
 * - Node 1 is the twin of node 2 having a twin sum of 2 + 2 = 4.
 * Thus, the maximum twin sum of the linked list is max(7, 4) = 7.
 *
 * Example 3:
 * Input: head = [1,100000]
 * Output: 100001
 * Explanation:
 * There is only one node with a twin in the linked list having twin sum of 1 + 100000 = 100001.
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
 * @return {number}
 */
var pairSum = function (head) {
	let current = head,
		fast = head,
		i = -1,
		stack = [],
		stop = false
	if (!head.next) return head.val
	if (!head.next.next) return head.val + head.next.val
	while (current) {
		fast = fast?.next?.next
		if (!stop) {
			stack.push(current.val)
			i++
		} else {
			stack[i] += current.val
			i--
		}
		if (!fast) stop = true
		// console.log(111, i, stack, JSON.stringify(current))
		current = current.next
	}
	return Math.max(...stack) ?? 0
}

// Быстрее
var pairSum1 = function(head) {
    let prev = null;
    let curr = head;
    let fast = head;
    while (fast && fast.next) {
        fast = fast.next.next;
        let newNext = curr.next;
        curr.next = prev;
        prev = curr;
        curr = newNext;
    }
console.log(curr, prev)
    let max = 0
    while (prev && curr) {
        max = Math.max(max, prev.val + curr.val)
        prev = prev.next;
        curr = curr.next;
    }
    
    return max;
};

console.log(222, JSON.stringify(pairSum({ val: 1, next: { val: 2, next: { val: 3, next: { val: 4, next: null } } } })))
console.log(222, JSON.stringify(pairSum({ val: 1, next: { val: 2, next: { val: 3, next: { val: 4, next: { val: 5, next: {val:6, next:null} } } } } })))
// console.log(222, JSON.stringify(pairSum({ val: 1, next: { val: 2, next: null } })))
