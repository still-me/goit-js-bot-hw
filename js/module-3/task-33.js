// Пиши код ниже этой строки
function findMatches(firstArray, ...args) {
  const matches = []; // Не изменяй эту строку

  for (let arg of args) {
    if (firstArray.includes(arg))
      matches.push(arg);
  }
  // Пиши код выше этой строки
  return matches;
}

console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));