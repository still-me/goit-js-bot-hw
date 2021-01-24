// Пиши код ниже этой строки
function addOverNum(firstNumber, ...args) {
  let total = 0;

  for (const arg of args) {
    if (arg > firstNumber) {
      total += arg;
    }
  }

  return total;
  // Пиши код выше этой строки
}

console.log(addOverNum(50, 15, 27));;