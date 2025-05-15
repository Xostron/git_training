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
	const paths = []
	function dfs(node, cur, paths, dir) {
		if (node?.val !== undefined) cur.push(node.val)
		if (node?.left === null && node?.right === null) {
			paths.push([...cur])
			return
		} else if (node?.left === undefined && node?.right === undefined) return
		dfs(node.left, [...cur], paths, 'left')
		dfs(node.right, [...cur], paths, 'right')
	}
	dfs(root, [], paths, 'root')
	let count = 0
	for (const arr of paths) count += sum(arr, targetSum)
	return count
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

console.log('result', pathSum(root, 10))
