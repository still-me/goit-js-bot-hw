/* Чистые функции
Функция с побочными эффектами - это функция которая в процессе выполнения может изменять или использовать глобальные переменные, изменять значение аргументов ссылочного типа, выполнять операции ввода-вывода и т. п.

!const dirtyMultiply = (array, value) => {
!  for (let i = 0; i < array.length; i += 1) {
!    array[i] = array[i] * value;
!  }
!};

!const numbers = [1, 2, 3, 4, 5];
!dirtyMultiply(numbers, 2);
!// Произошла мутация исходных данных - массива numbers
!console.log(numbers); // [2, 4, 6, 8, 10]
Функция dirtyMultiply(array, value) умножает каждый элемент массива array на число value. Она изменяет (мутирует) исходный массив по ссылке.

Чистая функция (pure function) - это функция результат которой зависит только от значений переданных аргументов. При одинаковых аргументах она всегда возвращает один и тот же результат и не имеет побочных эффектов, то есть не изменяет значения аргументов.

Напишем реализацию чистой функции умножения элементов массива, возвращающей новый массив, не изменяя исходный.

!const pureMultiply = (array, value) => {
!  const newArray = [];
!
!  array.forEach(element => {
!    newArray.push(element * value);
!  });
!
!  return newArray;
!};
!
!const numbers = [1, 2, 3, 4, 5];
!const doubledNumbers = pureMultiply(numbers, 2);

!// Не произошло мутации исходных данных
!console.log(numbers); // [1, 2, 3, 4, 5]
!// Функция вернула новый массив с изменёнными данными
!console.log(doubledNumbers); // [2, 4, 6, 8, 10] */

function changeEven(numbers, value) {
    // Пиши код ниже этой строки
  const newArray = [];
  numbers.forEach(number => {
    // if (number % 2 === 0) {
    //   newArray.push(number + value)
    // }
    // if (number % 2 !== 0) {
    //   newArray.push(number)
    // }

    number % 2 === 0
      ? newArray.push(number + value)
      : newArray.push(number);
    
  });

    return newArray
    // Пиши код выше этой строки
}
  
console.log(changeEven([1, 2, 3, 4, 5], 10));