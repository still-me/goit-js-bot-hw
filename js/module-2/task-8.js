/* Индекс последнего элемента
Чаще всего, мы заранее в коде не знаем какая будет длина массива. 
Для того, чтобы получить значение последнего элемента применяется следующий подход - 
длина массива всегда на единицу больше, чем индекс последнего элемента. 
Используя формулу длина_массива - 1 можно получить значение последнего элемента массива произвольной длины.

!const planets = ['Земля', 'Марс', 'Венера'];
!const lastElementIndex = planets.length - 1;
!planets[lastElementIndex]; // 'Венера' */

// Стартовый код
const fruits = ['яблоко', 'персик', 'груша', 'банан'];
// Пиши код ниже этой строки
const lastElementIndex = fruits.length - 1;
const lastElement = fruits[lastElementIndex];

console.log(lastElementIndex);
console.log(lastElement);