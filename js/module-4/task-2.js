function deliverPizza(pizzaName) {
  return `Доставляем пиццу ${pizzaName}.`;
}

function makePizza(pizzaName) {
  return `Пицца ${pizzaName} готовится, ожидайте...`;
}

// Пиши код ниже этой строки
function makeMessage(pizzaName, callback) {
  return callback(pizzaName);
}

console.log(makeMessage('Carbonara', makePizza));
console.log('3 years ago...');
console.log(makeMessage('Carbonara', deliverPizza ));


