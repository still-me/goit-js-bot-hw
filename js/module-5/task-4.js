/* Объект настроек
Функции-конструкторы всегда принимают большое количество входных данных для свойств будущего объекта. 
Поэтому, к ним также можно применить паттерн «Объект настроек», 
передавая один объект с логично именованными свойствами, вместо несвязанного набора аргументов.

!function User({ name, email }) {
!  this.name = name;
!  this.email = email;
!}
!
!const mango = new User({ name: 'Манго', email: 'mango@mail.com' });
!const poly = new User({ name: 'Поли', email: 'poly@mail.com' });

 */

function Car({ brand, model, price }) {
  this.brand = brand;
  this.model = model;
  this.price = price;
}

console.table(new Car({ brand: 'Audi', model: 'Q3', price: 36000 }));