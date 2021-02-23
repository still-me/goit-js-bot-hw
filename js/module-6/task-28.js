//* some

/* Метод some(callback) проверяет проходит ли хотя бы один элемент массива тест предоставляемый коллбек-функцией. Возвращает true или false.

!массив.some((element, index, array) => {
  !// Тело коллбек-функции
!});
Не изменяет оригинальный массив.
Поэлементно перебирает оригинальный массив.
Возвращает true если хотя бы один элемент массива удовлетворяет условию.
Возвращает false если ни один элемент массив не удовлетворяет условию.
Перебор массива прекращается если коллбек возвращает true.
!// Есть хотя бы один элемент больше либо равный нулю? - да
! [1, 2, 3, 4, 5].some(value => value >= 0); // true

!// Есть хотя бы один элемент больше либо равный нулю? - да
! [-7, -20, 3, -10, -14].some(value => value >= 0); // true

!// Есть хотя бы один элемент меньше нуля? - нет
! [1, 2, 3, 4, 5].some(value => value < 0); // false

!// Есть хотя бы один элемент меньше нуля? - да
! [1, 2, 3, -10, 4, 5].some(value => value < 0); // true */

const firstArray = [26, 94, 36, 18];
const secondArray = [17, 61, 23];
const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// Пиши код ниже этой строки

const anyElementInFirstIsEven = firstArray.some( element => element % 2 ===0);
const anyElementInFirstIsOdd = firstArray.some(element => element % 2 !== 0);

const anyElementInSecondIsEven = secondArray.some(element => element % 2 === 0 );
const anyElementInSecondIsOdd = secondArray.some(element => element % 2 !==0);

const anyElementInThirdIsEven = thirdArray.some(element => element % 2 === 0);
const anyElementInThirdIsOdd = thirdArray.some(element => element % 2 !== 0);

console.log(anyElementInFirstIsEven);
console.log(anyElementInFirstIsOdd);
