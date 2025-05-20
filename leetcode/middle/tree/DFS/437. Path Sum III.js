/**
 * Учитывая корень двоичного дерева и целое число targetSum,
 * верните количество путей, сумма значений на которых равна targetSum.
 * Путь не обязательно должен начинаться или заканчиваться в корне или на листе,
 * но он должен идти вниз (то есть только от родительских узлов к дочерним).
 */

/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function (root, targetSum) {
	if (!root) return 0
	let total = 0
	function dfs(node, cur, dir, pre = 0) {
		if (!node) return
		// console.log(111, dir, cur, pre, null, total)
		cur.push(node.val)
		const count = sum(cur, targetSum) - pre
		total += count
		if (!node?.left && !node?.right) return
		pre += count
		// pre =  total || pre 
		// console.log(222, dir, cur, pre, count, total)
		dfs(node.left, [...cur], 'left', pre)
		dfs(node.right, [...cur], 'right', pre)
	}
	dfs(root, [], 'root')

	return total
}
var sum = function (arr, target) {
	let count = 0
	for (let i = 0; i < arr.length; i++) {
		let r = arr[i]
		if (r == target) count++
		for (let j = i + 1; j < arr.length; j++) {
			r += arr[j]
			if (r == target) count++
		}
	}
	return count
}

const root = {
	val: 10,
	left: {
		val: 5,
		left: { val: 3, left: { val: 3, left: null, right: null }, right: { val: -2, left: null, right: null } },
		right: { val: 2, left: null, right: { val: 1, left: null, right: null } },
	},
	right: { val: -3, left: null, right: { val: 11, left: null, right: null } },
}
const root1 = { val: 10 }
const root2 = {
	val: 1,
	left: { val: 2, left: { val: 3, left: { val: 4, left: { val: 5, left: null, right: null }, right: null }, right: null }, right: null },
	right: null,
}
const root3 = {
	val: 1,
	right: { val: 2, right: { val: 3, right: { val: 4, right: { val: 5, left: null, right: null }, left: null }, left: null }, left: null },
	left: null,
}
console.log('result1', pathSum(root2, 6)) //1
console.log('result2', pathSum(root, 8)) //3
console.log('result3', pathSum(root3, 3)) //2
// console.log(sum([10,5,2,1], 8))
