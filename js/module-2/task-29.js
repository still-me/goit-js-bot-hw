function getEvenNumbers(start, end) {
    // Пиши код ниже этой строки
    const evenNumbersArray = [];
    
    for (let i = start; i <= end; i += 1) {
        if (i % 2 === 0) {
            evenNumbersArray.push(i);
        }
    }
    return evenNumbersArray;

    
    // Пиши код выше этой строки
}
  
console.log(getEvenNumbers(2, 5));