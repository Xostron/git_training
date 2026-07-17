/**
 * Генерация дерева из плоского массива
 * Применяется Алгоритм BFS (Breadth-First Search, поиск в ширину)
 * 
 */

// Конструктор узла дерева
export class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

// Функция сборки дерева из массива (LeetCode-стандарт)
export function arrayToTree(arr) {
    if (!arr || arr.length === 0) return null;

    // Создаем корень дерева
    const root = new TreeNode(arr[0]);
    const queue = [root]; // Очередь для сборки слоев
    let i = 1;

    while (queue.length > 0 && i < arr.length) {
        const currentNode = queue.shift();

        // Собираем левого потомка
        if (arr[i] !== null && arr[i] !== undefined) {
            currentNode.left = new TreeNode(arr[i]);
            queue.push(currentNode.left);
        }
        i++;

        // Собираем правого потомка
        if (i < arr.length && arr[i] !== null && arr[i] !== undefined) {
            currentNode.right = new TreeNode(arr[i]);
            queue.push(currentNode.right);
        }
        i++;
    }

    return root; // Возвращает ссылку на корневой узел
}

// Пример использования:
// Массив [1, 2, 3, null, 5] превратится в дерево, где у двойки есть ребенок 5, а у тройки детей нет.
const myTree = arrayToTree([1, 2, 3, null, 5]);
