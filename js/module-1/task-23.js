//* !
/* Логическое «НЕ» (оператор !)
Все операторы, которые мы рассматривали до этого, были бинарными. Т.е. они содержали два операнда: левый и правый. Логическое «НЕ» - это унарный оператор, выполняющий операцию над одним операндом справа.

! !выражение
Оператор ! приводит операнд к булю, если необходимо, а затем делает инверсию - заменяет его на противоположный true -> false или false -> true.

!console.log(!true); // false
!console.log(!false); // true
!console.log(!3); // !3 -> !true -> false
!console.log(!'Манго'); // !'Манго' -> !true -> false
!console.log(!0); // !0 -> !false -> true
!console.log(!''); // !'' -> !false -> true

!const isOnline = true;
!const isNotOnline = !isOnline; // !isOnline -> !true -> false

 */

function isNumberNotInRange(start, end, number) {
  const isInRange = number >= start && number <= end;
  const isNotInRange = !isInRange ; // Дополни эту строку

  return isNotInRange;
}

// console.log(isNumberNotInRange(10, 30, 5));