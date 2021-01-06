function isNumberNotInRange(start, end, number) {
  const isInRange = number >= start && number <= end;
  const isNotInRange = !isInRange ; // Дополни эту строку

  return isNotInRange;
}

// console.log(isNumberNotInRange(10, 30, 5));