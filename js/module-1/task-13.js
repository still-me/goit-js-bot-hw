/* Операторы сравнения >, >=, < и <=
Используются для сравнения двух значений. Результатом своего выполнения возвращают буль - true или false, то есть «да» или «нет».

> - больше
< - меньше
>= - больше или равно
<= - меньше или равно
!const a = 2;
!const b = 5;
!
!console.log(a > b); // false
!console.log(b > a); // true
!console.log(a >= b); // false
!console.log(b >= a); // true
!
!console.log(a < b); // true
!console.log(b < a); // false
!console.log(a <= b); // true
!console.log(b <= a); // false
*/

function isAdult(age) {
  // Пиши код ниже этой строки
  const passed = age >= 18;

  // Пиши код выше этой строки
  return passed;
}
