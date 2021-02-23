//* concat
/* Метод concat()
Метод concat используется для объединения двух или более массивов. 
Он не изменяет массив на котором вызывается, а возвращает новый. 
Порядок аргументов метода влияет на порядок элементов нового массива.

!const firstArray = ['Меркурий', 'Венера', 'Земля'];
!const secondArray = ['Марс', 'Юпитер'];
!const thirdArray = ['Сатурн', 'Уран', 'Нептун'];
!const allPlanets = firstArray.concat(secondArray, thirdArray);
!
!console.log(firstArray); // ['Меркурий', 'Венера', 'Земля'];
!console.log(allPlanets); // ['Меркурий', 'Венера', 'Земля', 'Марс', 'Юпитер', 'Сатурн', 'Уран', 'Нептун'];
 */

const oldClients = ['Манго', 'Аякс', 'Поли', 'Киви'];
const newClients = ['Персик', 'Хьюстон'];

const allClients = oldClients.concat(newClients); // Дополни эту строку