/**
 * @description Задание №8
 * Есть данные, которые возвращает функция data().
 * Задача - преобразовать данные в следующую структуру (см.пример).
 * 
 */

// Пример того, что нужно плучить
const arr = [
   {
      "codePlatform": "Platform 1",
      "instances": [
         {
            "codeInstance": "Instance 1",
            "schemes": [
               {
                  "codeScheme": "Scheme 1",
                  "tables": [
                     {
                        "codeTable": "Table 1",
                        "columns": []
                     },
                     {
                        "codeTable": "Table 2",
                        "columns": []
                     }
                  ]
               },
               {
                  "codeScheme": "Scheme 2",
                  "tables": [
                     {
                        "codeTable": "Table 1",
                        "columns": []
                     }
                  ]
               }
            ]
         },
         {
            "codeInstance": "Instance 2",
            "schemes": [
               {
                  "codeScheme": "Scheme 1",
                  "tables": [
                     {
                        "codeTable": "Table 1",
                        "columns": []
                     }
                  ]
               }
            ]
         }
      ]
   },
   {
      "codePlatform": "Platform 2",
      "instances": [
         {
            "codeInstance": "Instance 1",
            "schemes": [
               {
                  "codeScheme": "Scheme 1",
                  "tables": [
                     {
                        "codeTable": "Table 1",
                        "columns": []
                     }
                  ]
               }
            ]
         }
      ]
   }
]



// Тестовые данные
function data(){
	return [
		{ 
		codePlatform: 'Platform 1',
		codeInstance: 'Instance 1',
		codeScheme: 'Scheme 1',
		codeTable: 'Table 1',
		columns: []
		},
		{ 
		codePlatform: 'Platform 1',
		codeInstance: 'Instance 1',
		codeScheme: 'Scheme 1',
		codeTable: 'Table 2',
		columns: []
		},
		{ 
		codePlatform: 'Platform 1',
		codeInstance: 'Instance 1',
		codeScheme: 'Scheme 2',
		codeTable: 'Table 1',
		columns: []
		},
		{ 
		codePlatform: 'Platform 1',
		codeInstance: 'Instance 2',
		codeScheme: 'Scheme 1',
		codeTable: 'Table 1',
		columns: []
		},
		{ 
		codePlatform: 'Platform 2',
		codeInstance: 'Instance 1',
		codeScheme: 'Scheme 1',
		codeTable: 'Table 1',
		columns: []
		},
	]
}


</script>
 
</body>
</html>