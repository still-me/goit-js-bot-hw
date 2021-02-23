//* static (методы)

/* Статические методы
В классе можно объявить не только методы будущего экземпляра, но и методы доступные только классу - статические методы, 
которые могут быть как публичные, так и приватные. Синтаксис объявления аналогичен статическим свойствам, за исключением того, 
что значением будет метод.

!class User {
!  static #takenEmails = [];
!
!  static isEmailTaken(email) {
!    return User.#takenEmails.includes(email);
!  }
!
!  #email;
!
!  constructor({ email }) {
!    this.#email = email;
!    User.#takenEmails.push(email);
!  }
!}
!
!const mango = new User({ email: 'mango@mail.com' });
!
!console.log(
!  User.isEmailTaken('poly@mail.com')
!); // false
!
!console.log(
!  User.isEmailTaken('mango@mail.com')
!); // true

Особенность статических методов в том, что во время их вызова ключевое слово this ссылается на сам класс. 
Это значит, что статический метод может получить доступ к статическим свойствам класса, но не к свойствам экземпляра. 
Логично, потому что статические методы вызывает сам класс, а не его экземпляры. */

class Car {
  static #MAX_PRICE = 50000;
  // Пиши код ниже этой строки
  static checkPrice(price) {
    if (price > this.#MAX_PRICE) {
    return 'Внимание! Цена превышает допустимую.'
    }
    return 'Всё хорошо, цена в порядке.'
}
  // Пиши код выше этой строки
  constructor({ price }) {
    this.price = price;
  }
}

const audi = new Car({ price: 36000 });
const bmw = new Car({ price: 64000 });

console.log(Car.checkPrice(audi.price)); // Всё хорошо, цена в порядке.
console.log(Car.checkPrice(bmw.price)); // Внимание! Цена превышает допустимую.