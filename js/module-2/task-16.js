function makeArray(firstArray, secondArray, maxLength) {
    // Пиши код ниже этой строки

    return firstArray.concat(secondArray).slice(0, maxLength);
    // Пиши код выше этой строки
}
  
console.log(makeArray(['Манго', 'Поли'], ['Аякс', 'Челси'], 3));