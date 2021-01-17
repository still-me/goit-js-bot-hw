function filterArray(numbers, value) {
  // Пиши код ниже этой строки
  const newArray = [];

  for (let number of numbers) {
    if (number > value) {
      newArray.push(number);
    }
  }

  return newArray


  // Пиши код выше этой строки
}