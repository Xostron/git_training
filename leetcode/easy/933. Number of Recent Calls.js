/**
 *
 * У вас есть класс RecentCounter, который подсчитывает количество недавних запросов
 * за определённый промежуток времени. Реализуйте класс RecentCounter:
 * RecentCounter() Инициализирует счётчик нулевым количеством недавних запросов.
 * int ping(int t) Добавляет новый запрос в момент времени t, где t — время в миллисекундах,
 * и возвращает количество запросов, произошедших за последние 3000 миллисекунд (включая новый запрос).
 * В частности, верните количество запросов, произошедших в диапазоне [t — 3000, t] включительно.
 * Гарантируется, что при каждом вызове ping используется значение t, строго превышающее предыдущее значение.
 *
 * Example 1:
 * Input
 * ["RecentCounter", "ping", "ping", "ping", "ping"]
 * [[], [1], [100], [3001], [3002]]
 * Output
 * [null, 1, 2, 3, 3]
 * Explanation
 * RecentCounter recentCounter = new RecentCounter();
 * recentCounter.ping(1);     // requests = [1], range is [-2999,1], return 1
 * recentCounter.ping(100);   // requests = [1, 100], range is [-2900,100], return 2
 * recentCounter.ping(3001);  // requests = [1, 100, 3001], range is [1,3001], return 3
 * recentCounter.ping(3002);  // requests = [1, 100, 3001, 3002], range is [2,3002], return 3
 */

var RecentCounter = function () {
	this.count = 0
	this.queue = []
}

/**
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function (t) {
	const tt = [t - 3000, t]
	this.queue.push(tt)
	if (this.queue.length < 2) this.count++
	else {
		this.count++

		for (let i = this.queue.length - 2; i >= 0; i--) {
			const interval = this.queue[i]
			if ((tt[0] >= interval[0] && tt[0] <= interval[1]) || (tt[1] >= interval[0] && tt[1] <= interval[1])) {
			} else {
                console.log(111)
				this.count -= i + 1
				this.queue.splice(0, i + 1)
				break
			}
		}
	}
	return this.count
}

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
const obj = new RecentCounter()
// const p1 = obj.ping(1)
// const p2 = obj.ping(100)
// const p3 = obj.ping(3001)
// const p4 = obj.ping(3002)
// console.log(obj, p1, p2, p3, p4) = 1 2 3 3
const p1 = obj.ping(642)
const p2 = obj.ping(1849)
const p3 = obj.ping(4921)
const p4 = obj.ping(5936)
const p5 = obj.ping(5957)
console.log(obj, p1, p2, p3, p4, p5)
// [[],[642],[1849],[4921],[5936],[5957]] = [null,1,2,1,2,3]
