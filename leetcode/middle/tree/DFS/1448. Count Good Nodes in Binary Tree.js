/**
 * Если дан корень двоичного дерева, то узел X в дереве называется хорошим,
 * если на пути от корня к X нет узлов со значением больше X.
 * Верните количество хороших узлов в двоичном дереве.
 */

/**
 * @param {TreeNode} root
 * @return {number}
 */
var goodNodes = function (root) {
	let stack = [root],
		count = 0,
		pre = root.val
        root.pre=root.val
	while (stack.length > 0) {
		const node = stack.pop()
		// Переинициализация pre - начало новой ветки
		if (pre === null) {
            // console.log(pre)
			pre = node.pre
		}
		// console.log(1111, node.val, node.pre, pre)
		if (node.val >= pre) {
			count++
			// console.log(2222,count)
			if (node.left !== null || node.right !== null) pre = node.val
			// console.log(pre)
		}
		// Конец ветки - сигнал на сброс pre
		if (node.left === null && node.right === null) pre = null

		if (node?.right) {
			node.right.pre = node.val > node.pre ? node.val : node.pre
			stack.push(node.right)
		}
		if (node?.left) {
			node.left.pre = node.val > node.pre ? node.val : node.pre
			stack.push(node.left)
		}
	}
	return count
}


// Чужое решение
var goodNodes = function(root) {
    let count = 0;

    function dfs(node, maxVal) {
        if (node === null) return;
        if (node.val >= maxVal) {
            count++;
        }

        dfs(node.left, Math.max(maxVal, node.val));
        dfs(node.right, Math.max(maxVal, node.val));
    }

    dfs(root, root.val)
    return count;
};


// [5,3,4,null,3,null,5,5]
const root = {
	val: 5,
	left: { val: 3, left: null, right: { val: 3, left: null, right: { val: 5, left: { val: 5, left: null, right: null }, right: null } } },
	right: { val: 4, left: null, right: null },
}

const root1 = {
	val: 5,
	left: { val: 3, left: null, right: { val: 3, left: { val: 5, left: null, right: null }, right: null } },
	right: { val: 4, left: null, right: { val: 5, left: null, right: null } },
} //3

const root2 = {
	val: -1,
	left: {
		val: 5,
		left: { val: 4, left: null, right: null },
		right: { val: 4, left: { val: -4, left: { val: 0, left: { val: 3, left: null, right: null }, right: null }, right: null }, right: null },
	},
	right: {
		val: -2,
		left: {
			val: 2,
			left: { val: -2, left: { val: -1, left: null, right: null }, right: null },
			right: { val: 3, left: { val: -3, left: null, right: null }, right: null },
		},
		right: {
			val: -2,
			left: null,
			right: {
				val: -2,
				left: { val: -4, left: null, right: null },
				right: { val: -3, left: { val: 3, left: null, right: null }, right: { val: -3, left: null, right: null } },
			},
		},
	},
} //5
console.log('result', goodNodes(root1))
