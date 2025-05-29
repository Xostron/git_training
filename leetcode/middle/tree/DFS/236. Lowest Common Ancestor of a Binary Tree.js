/**
 * Дано двоичное дерево. Найдите наименьшего общего предка (НОП)
 * двух заданных узлов в дереве. Согласно определению НОП в Википедии:
 * «Наименьший общий предок двух узлов p и q — это наименьший узел в T,
 * у которого p и q являются потомками (при этом узел может быть потомком самого себя)».
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
	let parent = [root.val]
	let result
	let dfs = (node, parent, p, q) => {
		if (!node) return
		console.log(111, node.val)
		if (node.val === p?.val || node.val === q?.val) return parent.push(node)
		dfs(node.left, parent, p, q)
		dfs(node.right, parent, p, q)
	}

	dfs(root.left, parent, p, q)
	parent[1].val == p.val ? dfs(p, parent, null, q) : dfs(q, parent, p, null)
	result = parent.length == 3 ? parent[1].val : parent[1].val == p.val ? dfs(root, parent, null, q) : dfs(root, parent, p, null)
	
    return { parent, result }
}

const root = {
	val: 3,
	left: {
		val: 5,
		left: { val: 6 },
		right: { val: 2, left: { val: 7 }, right: { val: 4 } },
	},
	right: { val: 1, left: { val: 0 }, right: { val: 8 } },
}

const p = {
	val: 5,
	left: { val: 6 },
	right: { val: 2, left: { val: 7 }, right: { val: 4 } },
}
const q = { val: 4 }

console.log('result', lowestCommonAncestor(root, p, q))
