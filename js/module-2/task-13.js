function slugify(title) {
  // Пиши код ниже этой строки
 
  return title.split(' ').join('-').toLowerCase();
 
  // Пиши код выше этой строки
}

console.log(slugify('Массивы для новичков'));