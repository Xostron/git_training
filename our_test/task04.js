/**
 * @description Задание №4
 * Из начального массива array получить нужный массив result
 *
 */
const result = [{ '2024_3': ['Абакан', 'Воронеж'] }, { '2024_4': ['Омск', 'Воронеж'] }]
const array = [
	{
		'2024_3': [
			{
				Абакан: [
					{
						'Петрушник С.': [
							{
								director: 'Петрушник С.',
								completion_date: '12.09.2024',
								total_task: 3,
							},
						],
					},
					{
						'Сидоров И.': [
							{
								director: 'Сидоров И.',
								completion_date: '14.09.2024',
								total_task: 2,
							},
						],
					},
				],
			},
			{
				Воронеж: [
					{
						'Сидоров И.': [
							{
								director: 'Сидоров И.',
								completion_date: '16.09.2024',
								total_task: 1,
							},
						],
					},
				],
			},
		],
	},
	{
		'2024_4': [
			{
				Омск: [
					{
						'Хрюкин А.': [
							{
								director: 'Хрюкин А.',
								completion_date: '13.11.2024',
								total_task: 4,
							},
						],
					},
				],
			},
			{
				Воронеж: [
					{
						'Сидоров И.': [
							{
								director: 'Сидоров И.',
								completion_date: '15.11.2024',
								total_task: 2,
							},
						],
					},
				],
			},
		],
	},
]

function transform(array) {
	const r = []
	array.forEach((obj) => {
		Object.entries(obj).forEach(([key, a1]) => {
			const rr = {}
            rr[key] = a1.flatMap(o=>Object.keys(o))
			r.push(rr)
		})
	})
	return r
}
const pack = (data) => data.flatMap((o) => Object.entries(o).map(([year, d]) => ({ [year]: d.flatMap((v) => Object.keys(v)) })))



console.time('b')
const rr = pack(array)
console.timeEnd('b')

console.time('a')
const r = transform(array)
console.timeEnd('a')

console.log(444, rr)
console.log(333, r)

