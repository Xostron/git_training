/**
 * @description Задание №8
 * Есть данные, которые возвращает функция data().
 * Задача - преобразовать данные в следующую структуру (см.пример).
 *
 */

// Пример того, что нужно плучить
const arr = [
	{
		codePlatform: 'Platform 1',
		instances: [
			{
				codeInstance: 'Instance 1',
				schemes: [
					{
						codeScheme: 'Scheme 1',
						tables: [
							{
								codeTable: 'Table 1',
								columns: [],
							},
							{
								codeTable: 'Table 2',
								columns: [],
							},
						],
					},
					{
						codeScheme: 'Scheme 2',
						tables: [
							{
								codeTable: 'Table 1',
								columns: [],
							},
						],
					},
				],
			},
			{
				codeInstance: 'Instance 2',
				schemes: [
					{
						codeScheme: 'Scheme 1',
						tables: [
							{
								codeTable: 'Table 1',
								columns: [],
							},
						],
					},
				],
			},
		],
	},
	{
		codePlatform: 'Platform 2',
		instances: [
			{
				codeInstance: 'Instance 1',
				schemes: [
					{
						codeScheme: 'Scheme 1',
						tables: [
							{
								codeTable: 'Table 1',
								columns: [],
							},
						],
					},
				],
			},
		],
	},
]

const result = [
	{
		codePlatform: 'Platform 1',
		instances: [
			{
				codeInstance: 'Instance 1',
				schemes: [
					{
						codeScheme: 'Scheme 1',
						tables: [
							{
								codeTable: 'Table 1',
								columns: [],
							},
							{
								codeTable: 'Table 2',
								columns: [],
							},
						],
					},
				],
			},
		],
	},
	{
		codePlatform: 'Platform 2',
		instances: [
			{
				codeInstance: 'Instance 1',
				schemes: [
					{
						codeScheme: 'Scheme 1',
						tables: [
							{
								codeTable: 'Table 1',
								columns: [],
							},
						],
					},
				],
			},
		],
	},
]

// Тестовые данные
function data() {
	return [
		{
			codePlatform: 'Platform 1',
			codeInstance: 'Instance 1',
			codeScheme: 'Scheme 1',
			codeTable: 'Table 1',
			columns: [],
		},
		{
			codePlatform: 'Platform 1',
			codeInstance: 'Instance 1',
			codeScheme: 'Scheme 1',
			codeTable: 'Table 2',
			columns: [],
		},
		{
			codePlatform: 'Platform 1',
			codeInstance: 'Instance 1',
			codeScheme: 'Scheme 2',
			codeTable: 'Table 1',
			columns: [],
		},
		{
			codePlatform: 'Platform 1',
			codeInstance: 'Instance 2',
			codeScheme: 'Scheme 1',
			codeTable: 'Table 1',
			columns: [],
		},
		{
			codePlatform: 'Platform 2',
			codeInstance: 'Instance 1',
			codeScheme: 'Scheme 1',
			codeTable: 'Table 1',
			columns: [],
		},
	]
}

function transform(data) {
	return data.reduce((acc, el, i) => {
		const { codePlatform, codeInstance, codeScheme, codeTable, columns } = el
		const platform = acc.find((p) => p.codePlatform === codePlatform)
		// Не найдена платформа - создаем новую
		if (!platform) acc.push(def.platform(el))
		else {
			// Платформа найдена - ищем instance
			const instance = platform.instances.find((p) => p.codeInstance === codeInstance)
			// Не найден instance - создаем новый instance
			if (!instance) def.instance(el)
			else {
				// Найден instance - ищем схему
				const scheme = instance.schemes.find((p) => p.codeScheme === codeScheme)
				// Не найден scheme - создаем схему
				if (!scheme) def.scheme(el)
				else {
					// Найдена схема - добавляем таблицу
					scheme.tables.push(def.table(el))
				}
			}
		}
		return acc
	}, [])
}

const def = {
	table(platform) {
		const { codePlatform, codeInstance, codeScheme, codeTable, columns } = platform
		return { codeTable, columns }
	},
	scheme(platform) {
		const { codePlatform, codeInstance, codeScheme, codeTable, columns } = platform
		const table = this.table(platform)
		return { codeScheme, tables: [table] }
	},
	instance(platform) {
		const { codePlatform, codeInstance, codeScheme, codeTable, columns } = platform
		const scheme = this.scheme(platform)
		return { codeInstance, schemes: [scheme] }
	},

	platform(platform) {
		const { codePlatform, codeInstance, codeScheme, codeTable, columns } = platform
		const instance = this.instance(platform)
		return { codePlatform, instances: [instance] }
	},
}

const r = transform(data())
console.log(111, JSON.stringify(r, null, ' '))
