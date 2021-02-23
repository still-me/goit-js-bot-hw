//* forEach(callback)

/* Метод forEach(callback)
Перебирающий метод массива, который используется как замена циклов for и for...of при работе с коллекцией.

массив.forEach(function callback(element, index, array) {
!  // Тело callback-функции
});
Поэлементно перебирает массив.
Вызывает callback-функцию для каждого элемента массива.
Ничего не возвращает.
Аргументы callback-функции это значение текущего элемента element, его индекс index и сам исходный массив array. Объявлять можно только те параметры которые нужны, чаще всего это элемент, главное не забывать про их порядок.

const numbers = [5, 10, 15, 20, 25];

// Классический for
!for (let i = 0; i < numbers.length; i += 1) {
!  console.log(`Индекс ${i}, значение ${numbers[i]}`);
!}

// Перебирающий forEach
!numbers.forEach(function (number, index) {
!  console.log(`Индекс ${index}, значение ${number}`);
!});
Единственным случаем, когда стоит использовать циклы for или for...of для перебора массива, это задачи с прерыванием выполнения цикла. Прервать выполнение метода forEach нельзя, он всегда перебирает массив до конца.

 */

 function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;
  // Пиши код ниже этой строки

  orderedItems.forEach(item => {
      totalPrice += item;
  });
    
  // Пиши код выше этой строки
  return totalPrice;
 }

 console.log(calculateTotalPrice([1,2,3]));