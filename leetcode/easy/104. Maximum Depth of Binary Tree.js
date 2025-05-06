/**
 * Учитывая корень двоичного дерева, верните его максимальную глубину.
 * Максимальная глубина двоичного дерева — это количество узлов на самом длинном
 * пути от корневого узла до самого удалённого листового узла.
 *
 *
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
	let stack = [root],
		stackCount = [0],
		max = 0
	while (stack.length > 0) {
		const node = stack.pop()
		let count = stackCount.pop()
		if (node) count++
		if (node?.right) {
			stack.push(node.right)
			stackCount.push(count)
		}
		if (node?.left) {
			stack.push(node.left)
			stackCount.push(count)
		}
		// console.log(count, node.val || node, stack.length)
		max = Math.max(max, count)
	}
	return max
}

function TreeNode(val, left, right) {
	this.val = val === undefined ? 0 : val
	this.left = left === undefined ? null : left
	this.right = right === undefined ? null : right
}

let tree
;[
	[1, 2, 3],
	[4, 5],
	[6, 7],
	[8, 9],
	[10, 11],
	[null, 12],
].forEach((el, i) => {
	if (i == 0) tree = new TreeNode(el[0], el[1], el[2])
	if (i == 1) tree.left = new TreeNode(tree.left, el[0], el[1])
	if (i == 2) tree.right = new TreeNode(tree.right, el[0], el[1])
	if (i == 3) tree.right.left = new TreeNode(tree.right.left, el[0], el[1])
	if (i == 4) tree.right.right = new TreeNode(tree.right.right, el[0], el[1])
	if (i == 5) tree.right.right.right = new TreeNode(tree.right.right.right, el[0], el[1])
})

console.log(JSON.stringify(tree))
console.log(maxDepth())
