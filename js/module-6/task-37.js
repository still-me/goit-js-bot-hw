/* Сортировка объектов
При работе с массивом объектов сортировка выполняется по числовому или строчному значению какого-то свойства. 
Например, есть группа студентов с баллами за тест. Необходимо отсортировать массив объектов по возрастанию и убыванию количества баллов, и по имени студента.

!const students = [
!  { name: 'Манго', score: 83 },
!  { name: 'Поли', score: 59 },
!  { name: 'Аякс', score: 37 },
!  { name: 'Киви', score: 94 },
!];
!
!const inAscendingScoreOrder = students.sort(
!  (firstStudent, secondStudent) => firstStudent.score - secondStudent.score
!);
!
!const inDescendingScoreOrder = students.sort(
!  (firstStudent, secondStudent) => secondStudent.score - firstStudent.score
!);
!
!const inAlphabeticalOrder = students.sort((firstStudent, secondStudent) =>
!  firstStudent.name.localeCompare(secondStudent.name)
!); 
 */

const books = [
  { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
  { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
  { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
  { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
  { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
];
// Пиши код ниже этой строки

const sortedByAuthorName = [...books].sort((firstBook, secondBook) => 
firstBook.author.localeCompare(secondBook.author));

const sortedByReversedAuthorName = [...books].sort((firstBook, secondBook) => 
secondBook.author.localeCompare(firstBook.author));

const sortedByAscendingRating = [...books].sort((firstBook, secondBook) => 
firstBook.rating - secondBook.rating);

const sortedByDescentingRating = [...books].sort((firstBook, secondBook) => 
secondBook.rating - firstBook.rating);

console.table(sortedByAuthorName);
console.table(sortedByReversedAuthorName);
console.table(sortedByAscendingRating);
console.table(sortedByDescentingRating);
