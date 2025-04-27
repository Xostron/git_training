/**
 * Учитывая целочисленную матрицу размером n x n с индексацией от 0, 
 * верните количество пар (ri, cj), в которых строка ri и столбец cj равны. 
 * Пара строк и столбцов считается равной, если они содержат одинаковые элементы 
 * в одинаковом порядке (то есть являются равным массивом).
 * 
 * Example 1:
 * Input: grid = [[3,2,1],[1,7,6],[2,7,7]]
 * Output: 1
 * Explanation: There is 1 equal row and column pair:
 * - (Row 2, Column 1): [2,7,7]
 * 
 * Example 2:
 * Input: grid = [[3,1,2,2],[1,4,4,5],[2,4,2,2],[2,4,2,2]]
 * Output: 3
 * Explanation: There are 3 equal row and column pairs:
 * - (Row 0, Column 0): [3,1,2,2]
 * - (Row 2, Column 2): [2,4,2,2]
 * - (Row 3, Column 2): [2,4,2,2]
 */
/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function (grid) {
    const column = [], row = [], size = grid.length
    let count = 0
    // Строки
    for (let i = 0; i < size; i++) {
        row[i] = grid[i].toString()
    }
    // Столбец
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            column[i] ??= []
            column[i].push(grid[j][i])
        }
        // Поиск пары
        const t = column[i].toString()
        row.forEach(el =>{if (el == t) count++})
    }
    return count
};

var equalPairs = function(grid) {
    let pairCount = 0;
    const hashArr = [];
  
    // calculate hashes for rows
    for (let i = 0; i < grid.length; i++) {
      let hash = 0;
      for (let j = 0; j < grid.length; j++) {
        hash = grid[i][j] + (hash << 6) + (hash << 16) - hash
      }
      hashArr.push(hash);
    }
  
    //calculate hashes for columns
    for (let i = 0; i < grid.length; i++) {
      let hash = 0;
      for (let j = 0; j < grid.length; j++) {
        hash = grid[j][i] + (hash << 6) + (hash << 16) - hash
      }
  
      for (let k = 0; k < hashArr.length; k++) {
        if (hash === hashArr[k]) {
          pairCount++;
        }
      }
    }
  
    return pairCount;
  };