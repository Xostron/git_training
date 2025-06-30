function rr() {
	return new Promise((resolve, reject) => resolve(42))
}

async function rr1() {
	return 12
}

function rr2(){
    return 1980
}

const t = rr()
const t1 = rr1()
const t2 = Promise.resolve(410)
// t3,4,5 - делают лжно и тоже - распаковывае 
const t3 = Promise.resolve(rr())
const t4 = new Promise((resolve, reject) => {
	rr().then(resolve)
})
const t5 = new Promise((resolve, reject) => {
	resolve(rr())
})
const t6 = Promise.resolve(rr2())

t.then((r) => console.log(0, r))
t1.then((r) => console.log(1, r))
t2.then((r) => console.log(2, r))
t3.then((r) => console.log(3, r))
t4.then((r) => console.log(4, r))
t5.then(r=>console.log(5, r))
t6.then(r=>console.log(6, r))
const t7 = await rr2()
console.log(7,t7)