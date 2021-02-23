/* Изменение значения свойства
После того, как объект создан, значение его свойств можно изменить. Для этого необходимо обратиться к ним по имени, например, «через точку», и присвоить новое значение.

const book = {
  title: 'Последнее королевство',
  author: 'Бернард Корнуэлл',
  genres: ['историческая проза', 'приключения'],
  public: true,
  rating: 8.38,
};

book.rating = 9;
book.public = false;
book.genres.push('драма');

console.log(book.rating); // 9
console.log(book.public); // false
console.log(book.genres); // ['историческая проза', 'приключения', 'драма'] */

const apartment = {
  imgUrl: 'https://via.placeholder.com/640x480',
  descr: 'Просторная квартира в центре',
  rating: 4,
  price: 2153,
  tags: ['premium', 'promoted', 'top'],
  owner: {
    name: 'Генри',
    phone: '982-126-1588',
    email: 'henry.carter@aptmail.com'
  }
};

// Пиши код ниже этой строки

apartment.rating = 4.7;
apartment.price = 5000;
apartment.tags.push('trusted');
apartment.owner.name = 'Генри Сибола';

console.log(apartment.tags);  


