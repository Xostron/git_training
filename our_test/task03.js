/**
 * @description Задание №3
 * Есть некая строка и подстрока.
 * Задача - найти все вхождения подстроки в строке "как слово".
 *
 */
const s = 'Молоковоз везет  #молоко, и на нем большими буквами написано !МОЛОКО.'
const ss = 'молоко'

function find(s, ss) {
	const r = []
	s.split(' ').forEach((el) => {
		const str = el.replace(/[,.!#]/g, '')
		if (str.toLowerCase() === ss.toLowerCase()) r.push(str)
	})
	return r
}

const r = find(s, ss)
console.log(r)



const str = 'Какая-то строка с очень интересным ааоченьоо оченьаа ааочень аоченьа очень. содержанием и очень чем-то еще интересным';
const entry = 'очень';
function matches() {
  const allowed = new Set([undefined,'',' ', '.', '!', '"', '\'', ',', '?']);
  return (str, entry) => {
    const arr = [];
    let i = str.indexOf(entry);
    while (i !== -1) {
      const left = str[i-1];
      const right = str[i + entry.length];
      if ([left, right].every(v => allowed.has(v))) arr.push(i)
      i = str.indexOf(entry, ++i);
    }
    return arr;
  }
}

// const result = lgMatches(str, entry);
const fn = matches();
const result = fn(str, entry);
console.log(result);
