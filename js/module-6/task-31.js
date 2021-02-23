/* Метод reduce() и массив объектов
При работе с массивом объектов выполняется редуцирование по значению какого-то свойства. 
Например, есть массив студентов с баллами за тест. 
Необходимо получить средний бал.

! const students = [
!   { name: 'Манго', score: 83 },
!   { name: 'Поли', score: 59 },
!   { name: 'Аякс', score: 37 },
!   { name: 'Киви', score: 94 },
!   { name: 'Хьюстон', score: 64 },
! ];

!// Название аккумулятора может быть произвольным, это просто параметр функции
! const totalScore = students.reduce((total, student) => {
!   return total + student.score;
! }, 0);
! 
! const averageScore = totalScore / students.length;

*/

const players = [
  { name: 'Манго', playtime: 1270, gamesPlayed: 4 },
  { name: 'Поли', playtime: 469, gamesPlayed: 2 },
  { name: 'Аякс', playtime: 690, gamesPlayed: 3 },
  { name: 'Киви', playtime: 241, gamesPlayed: 1 },
];
// Пиши код ниже этой строки

const totalAveragePlaytimePerGame = players.reduce(
  (total, player) => total + player.playtime / player.gamesPlayed, 0);
console.log(totalAveragePlaytimePerGame);