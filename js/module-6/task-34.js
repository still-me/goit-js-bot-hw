//* sort()
/* Метод sort() сортирует элементы массива, но в отличии от остальных перебирающих методов, он сортирует исходный массив.

Сортирует и изменяет исходный массив.
Возвращает изменённый массив, то есть ссылку на отсортированный исходный.
По умолчанию сортирует по возрастанию.
Сравнение чисел выполняется по их значению.
Сравнение всего остального происходит путём приведения их к строке и сравнения порядковых номеров в таблице Unicode.
!// Массив чисел будет отсортирован по возврастанию
!const scores = [61, 19, 74, 35, 92, 56];
!scores.sort();
!console.log(scores); // [19, 35, 56, 61, 74, 92]

!// Массив строк сортируется по алфавиту
!const students = ['Вика', 'Андрей', 'Олег', 'Юля', 'Борис', 'Катя'];
!students.sort();
!console.log(students); // [ 'Андрей', 'Борис', 'Вика', 'Катя', 'Олег', 'Юля' ]

!// При этом порядковый номер заглавных букв меньше чем у прописных
!const letters = ['b', 'B', 'a', 'A', 'c', 'C'];
!letters.sort();
!console.log(letters); // ['A', 'B', 'C', 'a', 'b', 'c']
Из-за того, что сортируется исходный массив, нарушается принцип чистоты функций и нельзя удобно сделать несколько производных коллекций на базе исходной. Например, сделать коллекцию отсортированную по возрастанию, а другую по убыванию. Поэтому перед сортировкой делают полную копию исходного массива и сортируют уже её.

!const scores = [61, 19, 74, 35, 92, 56];
!const ascendingScores = [...scores].sort();
!
!console.log(scores); // [61, 19, 74, 35, 92, 56]
!console.log(ascendingScores); // [19, 35, 56, 61, 74, 92] 
*/

const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
const authors = [
  'Ли Танит',
  'Бернард Корнуэлл',
  'Роберт Шекли',
  'Федор Достоевский'
];
// Пиши код ниже этой строки

const ascendingReleaseDates = [...releaseDates].sort();

const alphabeticalAuthors = [...authors].sort();

console.log(ascendingReleaseDates);
console.log(alphabeticalAuthors);