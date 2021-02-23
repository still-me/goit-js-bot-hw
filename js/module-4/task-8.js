//* apply()
/* Метод apply
Метод apply это аналог метода call за исключением того, что синтаксис передачи аргументов требует не перечисление, а массив, даже если аргумент всего один.

foo.call(obj, arg1, arg2, ...)

foo.apply(obj, [arg1, arg2, ...])
Метод apply вызовет функцию foo так, что в this будет ссылка на объект obj, а также передаст элементы массива как отдельные аргументы arg1, arg2 и т. д. На практике, в основном используется метод call.

function greetGuest(greeting) {
  console.log(`${greeting}, ${this.username}.`);
}

const mango = { username: 'Манго' };
const poly = { username: 'Поли' };

greetGuest.apply(mango, ['Добро пожаловать']); // Добро пожаловать, Манго.
greetGuest.apply(poly, ['С приездом']); // С приездом, Поли. 
 */

const orders = [
  { email: 'solomon@topmail.ua', dish: 'Burger' },
  { email: 'artemis@coldmail.net', dish: 'Pizza' },
  { email: 'jacob@mail.com', dish: 'Taco' },
];

// Пиши код ниже этой строки
function composeMessage(position) {
  return `Готовим ${this.dish} для ${this.email}. Ваш заказ ${position}-й в очереди.`;
}

const messages = orders.map((order, index) =>
  composeMessage.apply(order, [index + 1])
);

console.table(messages);