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
	let stack = 1,
		max
	let node = root,
		prev
	let dir = 'left',
		prevDir,
		countDir = 0
	while (true) {
		stack++
		if (node[dir] !== null) {
			prev = node
            prevDir=dir
			node = node[dir]
		} else {
			stack--
			if (++countDir > 1) {
                stack--
				node = prev
                dir = prevDir=='left'?'right' : 'left'
                continue
			}
			dir = dir == 'left' ? 'right' : 'left'
		}
		max = Math.max(max, stack)
	}
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
].forEach((el, i) => {
	if (i == 0) tree = new TreeNode(el[0], el[1], el[2])
	if (i == 1) tree.left = new TreeNode(tree.left, el[0], el[1])
	if (i == 2) tree.left.left = new TreeNode(tree.left.left, el[0], el[1])
	if (i == 3) tree.left.left.left = new TreeNode(tree.left.left.left, el[0], el[1])
})
// console.log(JSON.stringify(tree))
