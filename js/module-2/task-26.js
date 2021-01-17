function calculateTotalPrice(order) {
  let total = 0;
  // Пиши код ниже этой строки

  for (let item of order) {
    total += item
  }

  // Пиши код выше этой строки
  return total;
}

console.log(calculateTotalPrice([12, 85, 37, 4]));