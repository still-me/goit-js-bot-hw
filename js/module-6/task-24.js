//* find()

/* Если метод filter(callback) используется для поиска всех элементов удовлетворяющим условию, 
то метод find(callback) позволяет найти и вернуть первый подходящий элемент, после чего перебор массива прекращается. 
То есть он ищет до первого совпадения.

!массив.find((element, index, array) => {
!  // Тело callback-функции
!});
Не изменяет оригинальный массив.
Поэлементно перебирает оригинальный массив.
Возвращает первый элемент удовлетворяющий условию, то есть когда callback возвращает true.
Если ни один элемент не подошёл, то есть для всех элементов callback вернул false, метод возвращает undefined.
Метод find() используется для одной задачи - поиска элемента по уникальному значению свойства. Например, поиск пользователя по почте, автомобиля по серийному номеру, книги по названию и т. п.

!const colorPickerOptions = [
!  { label: 'red', color: '#F44336' },
!  { label: 'green', color: '#4CAF50' },
!  { label: 'blue', color: '#2196F3' },
!  { label: 'pink', color: '#E91E63' },
!  { label: 'indigo', color: '#3F51B5' },
!];
!
!colorPickerOptions.find((option) => option.label === 'blue'); // { label: 'blue', color: '#2196F3' }
!colorPickerOptions.find((option) => option.label === 'pink'); // { label: 'pink', color: '#E91E63' }
!colorPickerOptions.find((option) => option.label === 'white'); // undefined
*/

 const books = [
  { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
  { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
  { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
  { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
];
const BOOK_TITLE = 'Сон смешного человека';
const AUTHOR = 'Роберт Шекли';
// Пиши код ниже этой строки

const bookWithTitle = books.find(book => book.title === BOOK_TITLE);
const bookByAuthor = books.find(book => book.author === AUTHOR);

console.log(bookWithTitle);
console.log(bookByAuthor);

