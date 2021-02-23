/* Значения по умолчанию
Для того чтобы избежать присвоения undefined при деструктуризации несуществующих свойств, можно задать переменным значения по умолчанию, которые будут присвоены только в случае когда в объекте нет свойства с таким именем.

const book = {
  title: 'Последнее королевство',
  author: 'Бернард Корнуэлл',
};

// Добавим картинку обложки если её нет в объекте книги
const {
  title,
  coverImage = 'https://via.placeholder.com/640/480',
  author,
} = book;

console.log(title); // Последнее королевство
console.log(author); // Бернард Корнуэлл
console.log(coverImage); // https://via.placeholder.com/640/480 
 */

const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
// Пиши код ниже этой строки

const {yesterday, today, tomorrow, icon ='https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'} = highTemperatures;

// Пиши код выше этой строки
const meanTemperature = (yesterday + today + tomorrow) / 3;

console.log(meanTemperature);