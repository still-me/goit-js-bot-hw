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


