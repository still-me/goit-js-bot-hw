/* Методы класса
В функции-конструкторе объявление методов для работы со свойствами экземпляра делается явно, 
путём обращения к свойству prototype и добавления на него методов.

!function User({ name, email }) {
!  this.name = name;
!  this.email = email;
!}

!User.prototype.getEmail = function () {
!  return this.email;
!};
!
!User.prototype.changeEmail = function (newEmail) {
!  this.email = newEmail;
!};

В классах используется более удобный синтаксис методов класса, 
который за ширмой делает тоже самое - добавляет методы на свойство User.prototype. 
Поэтому в самом начале мы говорили что классы это просто синтаксический сахар - удобная надстройка над функциями-конструкторами.

!class User {
!  constructor({ name, breed }) {
!    this.name = name;
!    this.breed = breed;
!  }

? // Аналог User.prototype.getEmail
!  getEmail() {
!    return this.email;
!  }

?  // Аналог User.prototype.changeEmail
!  changeEmail(newEmail) {
!    this.email = newEmail;
!  }
!} 
*/

class Car {
  constructor({ brand, model, price }) {
    this.brand = brand;
    this.model = model;
      this.price = price;
  }
    
    getPrice() {
        return this.price;
      }

      changePrice(newPrice){
          this.price = newPrice;
      }
}
