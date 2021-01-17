function getCommonElements(array1, array2) {
  // Пиши код ниже этой строки
  const commonElements = [];
  
  for (let element of array1) {
    if (array2.includes(element)) {
      commonElements.push(element)
    }
  }

  return commonElements;

  
  // Пиши код выше этой строки
}

console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));