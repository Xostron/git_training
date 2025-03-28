/**
 * Разворот связанного списка на месте
 * Дан связанный список
 */
const list = { val: 1, next: { val: 2, next: { val: 3, next: { val: 4, next: { val: 5, next: null } } } } }
// Ответ list = { val: 5, next: { val: 4, next: { val: 3, next: { val: 2, next: { val: 1, next: null } } } } }


let prev, cur, next
/**
 * 
 * @param {*} obj Связный список
 * @param {*} next следующий/текущий элемент
 * @param {*} prev Предыдущий эемент
 * @param {*} idCur Текщая глуюина
 * @param {*} limit ограничитель глубины погружения в связный список 
 * @returns 
 */
function reverse(obj, next, prev, idCur = 0, limit) {
	// Конец обработки
	if (limit === 1) {
		console.log('FINISH', idCur, limit)
		return
	}
    // Конец итерации: конец связного списка || конец обработки на данной глубине
	if (next === null || idCur === limit) return reverse(list, obj.next, list, 0, idCur - 1)
    // Второй элемент - здесь можно менять местами предыдущий-текущий
	if (idCur > 0) {
		// console.log(111, idCur, next, prev)
		const temp = prev.val
		prev.val = next.val
		next.val = temp
	}
    // Первый элемент: даем эстафету
	if (idCur === 0) return reverse(list, obj.next, list, ++idCur, limit)
    // Последующие элементы: сдесь происходит перестановка
	return reverse(list, next.next, next, ++idCur, limit)
}

reverse(list)
console.log('Result', JSON.stringify(list))


function findCycle(obj){

}