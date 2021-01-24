const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 9 },
];

function calculateTotalPrice(productName) {
  // Пиши код ниже этой строки
 
  for (const product of products) {
    if (product.name === productName) {
      return product.price * product.quantity
    }
}
return 0

  // Пиши код выше этой строки
}



console.log(calculateTotalPrice('Дроид'));
console.log(calculateTotalPrice('Бластер') );
