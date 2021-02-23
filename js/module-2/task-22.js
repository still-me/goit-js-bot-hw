//* push()
/* Метод push()
Метод push() позволяет добавить один или несколько элементов в конец массива, без необходимости указывать индексы добавляемых элементов.

!const planets = ['Земля', 'Марс', 'Венера'];
!planets.push('Юпитер');
!planets.push('Сатурн', 'Уран', 'Нептун');
!
!console.log(planets); // ['Земля', 'Марс', 'Венера', 'Юпитер', 'Сатурн', 'Уран', 'Нептун'] */

function createArrayOfNumbers(min, max) {
  const numbers = [];
  // Пиши код ниже этой строки

  for (let i = min; i <= max; i += 1){
   numbers.push(i)
  }

  // Пиши код выше этой строки
  return numbers;
}
console.log(createArrayOfNumbers(1, 3));