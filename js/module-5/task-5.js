/* Свойство prototype
Мы уже знаем что такое прототип объекта, свойство __proto__ и как происходит поиск отсутствующих свойств объекта по цепочке прототипов. 
Во время вызова функции-конструктора через new и создания нового объекта со свойствами, ему также устанавливается прототип.

У каждой функции, кроме стрелочных, есть свойство prototype, значение которого это объект с единственным свойством constructor, 
указывающим на саму функцию-конструктор.

!function User() {}
!console.log(User.prototype); // { constructor: User }

При вызове функции-конструктора и создании объекта через new, 
объект в свойстве prototype функции-конструктора будет прототипом создаваемого объекта.

!const mango = new User();
!console.log(User.prototype.isPrototypeOf(mango)); // true

В свойство prototype можно записывать свойства и методы, которые будут доступны всем объектам созданным этой функцией-конструктором. 
Методы в prototype будут вызываться объектами созданными функцией-конструктором, 
поэтому для доступа к свойствам вызываемого объекта в методах используется ключевое слово this.

!function User({ name, email }) {
!  this.name = name;
!  this.email = email;
!}
!
!User.prototype.getEmail = function () {
!  return this.email;
!};
!
!User.prototype.changeEmail = function (newEmail) {
!  this.email = newEmail;
!};
!
!const mango = new User({ name: 'Манго', email: 'mango@mail.com' });
!
!console.log(mango.getEmail()); // mango@mail.com
!mango.changeEmail('mango@supermail.com');
!console.log(mango.getEmail()); // mango@supermail.com */

function Car({ brand, model, price }) {
  this.brand = brand;
  this.model = model;
  this.price = price;
}

Car.prototype.getPrice = function () {
  return this.price;
}

Car.prototype.changePrice = function (newPrice) {
  this.price = newPrice
}

console.table(Car.prototype.hasOwnProperty('getPrice'));