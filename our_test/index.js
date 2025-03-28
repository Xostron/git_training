const acc1 = { a: 1, b: 2 }
const acc2 = { c: 1, d: 2 }
const r = { ...acc1, cold: { ...acc2 } }

function fn(r) {
	return { accAuto: r }
}

const { accAuto: a } = fn(r)
const accCold = a.cold
const accTotal = a
console.log(111, r)

accCold.d = 12
accTotal.b = 42

console.log(222, r)
// console.log(333, accRes)
