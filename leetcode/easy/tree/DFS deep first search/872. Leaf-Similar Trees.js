/**
 * Рассмотрим все листья двоичного дерева в порядке слева направо.
 * Значения этих листьев образуют последовательность значений листьев.
 * Например, в приведённом выше дереве последовательность значений листьев — (6, 7, 4, 9, 8).
 * Два двоичных дерева считаются похожими по листьям, если последовательность значений их листьев одинакова.
 * Верните true, если и только если два заданных дерева с корневыми узлами root1 и root2 похожи по листьям.
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
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function (root1, root2) {
	const gen1 = genNode(root1)
	const gen2 = genNode(root2)
	let node1 = 1,
		node2 = 1
	while (node1 && node2) {
		node1 = gen1.next().value
		node2 = gen2.next().value
		if (node1 !== node2) return false
	}
	return true
}
function* genNode(root) {
	let stack = [root]
	while (stack.length > 0) {
		const node = stack.pop()
		if (!node.left && !node.right) {
			yield node.val
            console.log('yield', node.val)
		}
		console.log(1, 'gen', node.val)
		if (node?.right) {
			stack.push(node.right)
		}
		if (node?.left) {
			stack.push(node.left)
		}
	}
}
/**
 * Создать дерево
 * @param {object[][]} arr
 */
function Tree(arr) {
	this.tree
	arr.forEach((el, i) => {
		if (i == 0) this.tree = new TreeNode(el[0], el[1], el[2])
		if (i == 1) this.tree.left = new TreeNode(this.tree.left, el[0], el[1])
		if (i == 2) this.tree.right = new TreeNode(this.tree.right, el[0], el[1])
		if (i == 3) this.tree.right.left = new TreeNode(this.tree.right.left, el[0], el[1])
		if (i == 4) this.tree.right.right = new TreeNode(this.tree.right.right, el[0], el[1])
		if (i == 5) this.tree.right.right.right = new TreeNode(this.tree.right.right.right, el[0], el[1])
	})

	function TreeNode(val, left, right) {
		this.val = val === undefined ? 0 : val
		this.left = left === undefined ? null : left
		this.right = right === undefined ? null : right
	}
}

// ПРОВЕРКА
// const tree1 = new Tree([[1, 2, 3]]).tree
// const tree2 = new Tree([[1, 3, 2]]).tree
const tree1 = { val: 1, left: { val: 3, left: null, right: null }, right: { val: 2, left: null, right: null } }
const tree2 = { val: 1, left: { val: 3, left: null, right: null }, right: { val: 2, left: null, right: null } }
console.log('tree1', JSON.stringify(tree1))
console.log('tree2', JSON.stringify(tree2))
// console.log('leaf1', ...genNode(tree1))
// console.log('leaf2', ...genNode(tree2))
console.log('Result', leafSimilar(tree1, tree2))

//**************************************************************** */
// function* generateSequence(from, to) {
// 	for (let i = from; i < to; i++) {
// 		const r = yield i
// 		console.log(r)
// 	}
// }

// // Композиция генераторов
// function* nestedGen() {
// 	yield* generateSequence(1, 8)
// 	yield* generateSequence(10, 18)
// 	yield* generateSequence(20, 28)
// }

// const gen = generateSequence(1, 11)
// console.log('*gen', gen.next())
// console.log('*gen', gen.next(201))
// console.log('*gen', gen.next())
// console.log('*gen', gen.next())
// console.log('*gen', gen.next())
