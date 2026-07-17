/**
 * DFS (Depth-First Search или поиск в глубину)
 * Использует рекурсию (Стек). Сначала идет до самого упора (листа) вниз,
 * а затем возвращается назад.
 *
 * Pre-order (N → L → R): обрабатываем корень, потом уходим влево, потом вправо.
 * Применяется для копирования дерева.
 *
 * In-order (L → N → R): сначала левая ветка, потом корень, потом правая ветка.
 * Главная фишка: в двоичном дереве поиска (BST) этот обход выведет все числа
 * строго по возрастанию!
 *
 * Post-order (L → R → N): сначала лево и право, и только потом сам корень.
 * Идеально для удаления узлов или подсчета размера папок (сначала нужно узнать
 * вес файлов внутри).
 */

const { arrayToTree } = require('./generate_tree')

const tree = arrayToTree([1, 2, 3, 4, 5, 6, 7])
console.log('tree', tree)

// Pre-order
function goTree(root) {
	const r = []

	function dfs(node) {
		if (node === null) return
		r.push(node.val)
		dfs(node.left)
		dfs(node.right)
	}

	dfs(root)
	return r
}

// In-order
function goTree2(root) {
	const r = []

	function dfs(node) {
		if (node === null) return
		dfs(node.left)
		r.push(node.val)
		dfs(node.right)
	}

	dfs(root)
	return r
}


// Post-order
function goTree3(root) {
	const r = []

	function dfs(node) {
		if (node === null) return
		dfs(node.left)
		dfs(node.right)
		r.push(node.val)
	}

	dfs(root)
	return r
}

console.log('Pre-order', goTree(tree))
console.log('In-order', goTree2(tree))
console.log('Post-order', goTree3(tree))
