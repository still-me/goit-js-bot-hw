function filterArray(numbers, value) {
    const filteredNumbers = [];
    // Пиши код ниже этой строки
  
  numbers.forEach(number => {
    if (number > value) {
      filteredNumbers.push(number);
    }
  });
  
    // Пиши код выше этой строки
    return filteredNumbers;
  }