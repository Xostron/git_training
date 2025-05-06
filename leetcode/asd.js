function t() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log('timeout')
			resolve(12)
		}, 1000)
	})
}

const proc = new Set()

function rt(task) {
	return new Promise((resolve, reject) => {
		console.log('begin rt')
		task()
			.then((r) => {
				console.log('resolve', r)
				resolve(r)
			})
			.catch((e) => {
				console.log('reject', e)
				reject()
			})
			.finally((_) => {
				console.log('finally rt')
			})
		console.log('end rt')
	})
}
async function qwe(){
	console.log('qwe')
}
// rt(t)
// 	.then((res) => {
// 		console.log('result', res)
// 	})
// 	.finally((_) => console.log('finally'))

console.log(1)
await rt(t)
console.log(2)
await qwe()
console.log(3)
console.log(34)
