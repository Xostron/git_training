/**
 * Разворот связанного списка на месте
 * Дан связанный список
 * const list = {val:1, next:{val:2,next:{val:3,next:{val:4, next:{val:5,next:null}}}}}
 */

const list = { val: 1, next: { val: 2, next: { val: 3, next: { val: 4, next: { val: 5, next: null } } } } }
// result = { val: 5, next: { val: 4, next: { val: 3, next: { val: 2, next: { val: 1, next: null } } } } }

let prev, cur, next
function reverse(obj, next, prev, idCur = 0) {
	if (next === null) return
	if (idCur > 0) {
		console.log(111, idCur, next, prev)
		const temp = prev.val
		prev.val = next.val
		next.val = temp
	}
	if (idCur === 0) return reverse(list, obj.next, list, ++idCur)
	return reverse(list, next.next, next, ++idCur)
}

reverse(list)
console.log('Result', JSON.stringify(list))
