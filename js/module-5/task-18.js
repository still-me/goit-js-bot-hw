//* super

/* Конструктор дочернего класса
Первым делом в конструкторе дочернего класса необходимо вызвать специальную функцию super(аргументы) - это псевдоним конструктора родительского класса. 
В противном случае, при попытке обратиться к this в конструкторе дочернего класса, будет ошибка. 
При вызове конструктора класса родителя передаём необходимые ему аргументы для инициализации свойств.

!class User {
!  email;
!
!  constructor(email) {
!    this.email = email;
!  }
!
!  get email() {
!    return this.email;
!  }
!
!  set email(newEmail) {
!    this.email = newEmail;
!  }
!}
!
!class ContentWriter extends User {
!  posts;
!
!  constructor({ email, posts }) {
?    // Вызов конструктора родительского класса User
!    super(email);
!    this.posts = posts;
!  }
!}
!
!const writer = new ContentWriter({ email: 'mango@mail.com', posts: [] });
!console.log(writer); // { email: 'mango@mail.com', posts: [] }
!console.log(writer.email); // 'mango@mail.com'
! */

class User {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}

class Admin extends User {
  // Пиши код ниже этой строки
  static AccessLevel = {
    BASIC: 'basic',
    SUPERUSER: 'superuser'
  };

  accessLevel;
  
  constructor({ email, accessLevel }) {
    super(email);
    this.accessLevel = accessLevel;
  }

  // Пиши код выше этой строки
}

const mango = new Admin({
  email: 'mango@mail.com',
  accessLevel: Admin.AccessLevel.SUPERUSER
});
console.log(mango);
console.log(mango.email); // mango@mail.com
console.log(mango.accessLevel); // superuser