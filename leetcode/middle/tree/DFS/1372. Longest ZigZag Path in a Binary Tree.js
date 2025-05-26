/**
 * Вам дан корень двоичного дерева.
 * Зигзагообразный путь для двоичного дерева определяется следующим образом:
 * выберите любой узел в двоичном дереве и направление (вправо или влево).
 * Если текущее направление — вправо, перейдите к правому дочернему узлу текущего узла;
 * в противном случае перейдите к левому дочернему узлу.
 * Смените направление с правого на левое или с левого на правое.
 * Повторяйте второй и третий шаги до тех пор, пока вы не сможете двигаться по дереву.
 * Длина зигзага определяется как количество посещённых узлов минус 1. (У одного узла длина равна 0).
 * Верните самый длинный зигзагообразный путь в этом дереве.
 */

/**
 * @param {TreeNode} root
 * @return {number}
 */
var longestZigZag1 = function (root) {
	if (!root) return 0
	let total = []
	function dfs(node) {
		if (!node) return
		total.push(maxdfs(node, null, 0))
		// total.push(maxdfs(node, 'right', 0))
        console.log(111, node.val)
		if (!node?.left && !node?.right) return

		dfs(node.left)
		dfs(node.right)
	}
	function maxdfs(node, dir, total) {
		if (!node) return total
        if (dir===null) {
            return Math.max(maxdfs(node.left, 'left', total),maxdfs(node.right, 'right', total))
        }
        if (!node?.[dir]) return total
		// console.log(111, node.val, dir, total)
		total++
		const n = node[dir]
		dir = dir == 'left' ? 'right' : 'left'

		console.log(333, node.val, dir, total)
		return maxdfs(n, dir, total)
	}
	dfs(root)
	return Math.max(...total)
}

const root = {
	val: 1,
	left: null,
	right: {
		val: 2,
		left: { val: 3, left: null, right: null },
		right: {
			val: 4,
			left: { val: 5, left: null, right: { val: 7, left: null, right: { val: 8, left: null, right: null } } },
			right: { val: 6, left: null, right: null },
		},
	},
}

console.log('result', longestZigZag1(root)) //3


var longestZigZag = function (root) {
    let max = 0;

    let dfs = (node, last, length) => {
        if (!node) return;

        max = Math.max(max, length);

        dfs(node.left, 'l', last !== 'l' ? length + 1 : 1);
        dfs(node.right, 'r', last !== 'r' ? length + 1 : 1);
    }

    dfs(root, 'l', 0);
    return max;
};