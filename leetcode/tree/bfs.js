/**
 * Алгоритм BFS (Breadth-First Search, поиск в ширину)
 *
 * Обходит дерево строго по этажам:
 * сначала корень (1 этаж), потом все его дети (2 этаж), потом все внуки (3 этаж).
 *
 * Использует цикл и Очередь (Queue). Для BFS жизненно необходима Очередь
 * (работает по принципу магазина: «первый пришел — первый обслужен», FIFO).
 * В JavaScript роль очереди выполняет обычный массив, из которого элементы
 * забираются с начала (метод .shift()), а добавляются в конец (метод .push()).
 *
 * Применение: Поиск кратчайшего пути в графах/деревьях, печать дерева по слоям.
 */
const { arrayToTree } = require('./generate_tree')

const tree = arrayToTree([1, 2, 3, 4, 5, 6, 7])
console.log('tree', tree)

function goTree(tree) {
	if (!tree) return []

	const q = [tree]
	const result = []
	let pointer = 0

	while (pointer < q.length) {
		const node = q[pointer]
		pointer++

		result.push(node.val)

		if (node.left != null) q.push(node.left)
		if (node.right != null) q.push(node.right)
	}

	return result
}

function goTree2(tree) {
	if (!tree) return []

	const q = [tree]
	const result = []
	let pointer = 0

	while (pointer < q.length) {
		const lvl = []
		const size = q.length - pointer
		for (let i = 0; i < size; i++) {
			const node = q[pointer]
			pointer++
			lvl.push(node.val)
			if (node.left != null) q.push(node.left)
			if (node.right != null) q.push(node.right)
		}
		result.push(lvl)
	}

	return result
}

console.log('goTree', goTree(tree), goTree2(tree))
