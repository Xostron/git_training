/**
 * Две строки считаются близкими, если одну из них можно получить из другой с помощью следующих операций: 
 * Операция 1: Поменяйте местами любые два существующих символа. Например, abcde -> aecdb. 
 * Операция 2: Преобразуйте каждое вхождение одного существующего символа в другой существующий символ и сделайте то же самое с другим символом. 
 * Например, aacabb -> bbcbaa (все a превращаются в b, а все b превращаются в a). 
 * Вы можете использовать эти операции с любой из строк столько раз, сколько необходимо. 
 * Учитывая две строки, слово1 и слово2, верните значение true, если слово1 и слово2 близки по значению, 
 * и false в противном случае.
 * 
 * 
 */


var closeStrings = function (word1, word2) {
    const m1 = fnOccurrences(word1)
    const m2 = fnOccurrences(word2)
    // Новые методы new Set - не прошел проверку тестом 166
    // const a = m1.keys.isSupersetOf(m2.keys)
    // const b = m2.keys.isSupersetOf(m1.keys)
    // const c = m1.values.isSupersetOf(m2.values)
    // const d = m2.values.isSupersetOf(m1.values)
    // console.log(a,b,c,d)
    // return a && b && c && d
    // console.log(m1,m2)

    // Сравнение строк после join(')
    // return m1.keys==m2.keys && m1.values==m2.values

    // Проверка на подобие
    if (m1.keys.length!=m2.keys.length || m1.values.length!=m2.values.length) return false
    for (let i = 0; i < m1.keys.length; i++) {
        if (m1.keys[i] !== m2.keys[i]) {
            return false;
        }
    }
    for (let i = 0; i < m1.values.length; i++) {
        if (m1.values[i] !== m2.values[i]) {
            return false;
        }
    }
    return true
};

var fnOccurrences = function (str) {
    const map = str.split('').reduce((acc, el, i) => {
        let t = acc.get(el) ?? 0
        return acc.set(el, ++t)
    }, new Map())
    // const keys = new Set(map.keys())
    // const values = new Set(map.values())
    // console.log(str, keys,values)
    const keys = [...map.keys()].sort()
    const values = [...map.values()].sort((a, b) => a - b)
    return { keys, values }
};