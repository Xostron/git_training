/**
 * @description Задание №1
 * Есть некий массив, в нем есть пустые строки. Задача - удалить все пустые строки из массива.
 *
 */

const arr = ['asd', '', 'fgh', '', 'zxc', 'qwe', '', 10, ' ']
arr.forEach((el, i) => {
	if (el === '') arr.splice(i, 1)
})
console.log('arr', arr)