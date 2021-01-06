function getShippingCost(country) {
  let message;
  // Пиши код ниже этой строки
  switch (country) {
    case 'Китай':
      message = `Доставка в ${'Китай'} будет стоить ${100} кредитов`;
      break;
    
    case 'Чили':
      message = `Доставка в ${'Чили'} будет стоить ${250} кредитов`;
      break;
    
    case 'Австралия':
      message = `Доставка в ${'Австралия'} будет стоить ${170} кредитов`;
      break;
    
    case 'Ямайка':
      message = `Доставка в ${'Ямайка'} будет стоить ${120} кредитов`;
      break;
    
    default: message = 'Извините, в вашу страну доставки нет';
}
  // Пиши код выше этой строки
  return message;
}

console.log(getShippingCost('Китай'))