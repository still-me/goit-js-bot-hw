const orders = [
  { email: 'solomon@topmail.ua', dish: 'Burger' },
  { email: 'artemis@coldmail.net', dish: 'Pizza' },
  { email: 'jacob@mail.com', dish: 'Taco' },
];

// Пиши код ниже этой строки
function composeMessage(position) { 
  return `Готовим ${this.dish} для ${this.email}. Ваш заказ ${position}-й в очереди.`;
}

const messages = orders.map((order, index) => composeMessage.call(order, index + 1));


/* Развернутое решение */

// const newFuntion = function (order, index) {
//   return composeMessage.call(order, index + 1)
// }

// const messages = orders.map(newFuntion);


console.log(messages);
