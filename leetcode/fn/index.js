/**
 * Создать дерево
 * @param {object[][]} arr
 */
function Tree(arr) {
	this.tree
	arr.forEach((el, i) => {
		if (i == 0) this.tree = new TreeNode(el[0], new TreeNode(el[1], null, null), new TreeNode(el[2], null, null))
		// if (i == 1) this.tree.left = new TreeNode(el[0], new TreeNode(el[0], null, null), new TreeNode(el[1], null, null))
		// if (i == 2) this.tree.right = new TreeNode(el[1], new TreeNode(el[0], null, null), new TreeNode(el[1], null, null))
		// if (i == 3) this.tree.right.left = new TreeNode(this.tree.right.left, el[0], el[1])
		// if (i == 4) this.tree.right.right = new TreeNode(this.tree.right.right, el[0], el[1])
		// if (i == 5) this.tree.right.right.right = new TreeNode(this.tree.right.right.right, el[0], el[1])
	})

	function TreeNode(val, left, right) {
		this.val = val === undefined ? 0 : val
		this.left = left === undefined ? null : left
		this.right = right === undefined ? null : right
	}
}

const root1 = new Tree([
	[1, 2, 3],
	[4, 5],
]).tree
console.log(JSON.stringify(root1))

module.exports = {}
