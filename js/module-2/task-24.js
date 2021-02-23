//* includes()
/* Метод includes()
Метод includes(value) проверяет есть ли в массиве элемент со значением value и возвращает true или false соответственно. 
Область применения этого метода сводится к ситуациям, когда необходимо проверить есть ли элемент в массиве и не важна его позиция (индекс).

!const planets = ['Земля', 'Марс', 'Венера'];
!
!console.log(planets.includes('Земля')); // true
!console.log(planets.includes('земля')); // false
!console.log(planets.includes('Венера')); // true
!console.log(planets.includes('Юпитер')); // false */

function checkFruit(fruit) {
  const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];

  return fruits.includes(fruit); // Дополни эту строку
}

console.log();