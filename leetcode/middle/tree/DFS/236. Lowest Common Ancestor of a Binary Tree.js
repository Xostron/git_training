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
	let p1 = new Set([root.val])
	let p2 = new Set([root.val])
	let result = []
	let count = 0,
		r
	if (root.val == p.val || root.val == q.val) {
		count++
		result = [{ val: root.val, parent: new Set([root.val]) }]
	}
	const dfs = (node, dir, parent, pre) => {
		if (!node) return
		// console.log(111, node.val, dir)
		if (count === 1) {
			const t = [...parent]
			const idx = t.indexOf(pre)
			parent = new Set(t.slice(0, idx + 1))
		}
		if (node.val === p?.val || node.val === q?.val) {
			count++
			result.push({ val: node.val, parent: new Set([...parent]) })
			parent.add(node.val)
		} else parent.add(node.val)

		if (count >= 2) return

		dfs(node.left, dir, parent, node.val)
		dfs(node.right, dir, parent, node.val)
	}

	dfs(root.left, 'left', p1, root.val)
	dfs(root.right, 'right', p2, root.val)

	// Анализ: поиск НОП
	const [n1, n2] = result
	if ([...n2.parent].pop() == n1.val) {
		// const n3 = [...n2.parent.intersection(n1.parent)]
		// r = n3[n3.length - 1]
        r=n1.val
		console.log(444, r)
	} else if (n2.parent.has(n1.val)) {
		r = n1.val
		console.log(4441, r)
	} else {
		const n3 = [...n2.parent.intersection(n1.parent)]
		r = n3[n3.length - 1]
		console.log(4442, r)
	}

	console.log(222, result)

	return { val: r }
}

const root = {
	val: 3,
	left: {
		val: 5,
		left: { val: 6, left: { val: 9, left: { val: 10, left: { val: 11, left: { val: 12 } } } } },
		right: { val: 2, left: { val: 7 }, right: { val: 4 } },
	},
	right: { val: 1, left: { val: 0 }, right: { val: 8 } },
}

// const p = {
// 	val: 5,
// 	left: { val: 6 },
// 	right: { val: 2, left: { val: 7 }, right: { val: 4 } },
// }
const p = { val: 1 }
const q = { val: 8 }

console.log('result', lowestCommonAncestor(root, p, q))


var lowestCommonAncestor1 = function(root, p, q) {
    if (!root || root === p || root === q) return root;

    const left = lowestCommonAncestor(root.left, p, q)
    const right = lowestCommonAncestor(root.right, p, q)

    if (right && left) return root
    return right || left
};