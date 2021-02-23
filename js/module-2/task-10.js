//* split
/* Метод строк split()
Метод split(delimiter) позволяет превратить строку в массив, «разбив» его по разделителю delimiter. 
Если разделитель это пустая строка, то получится массив отдельных символов. 
Разделителем может быть один или несколько символов.

!const name = 'Манго';
!console.log(name.split('')); // ['M', 'a', 'н', 'г', 'о']
!
!const message = 'JavaScript это интересно';
!console.log(message.split(' ')); // ['JavaScript', 'это', 'интересно'] */

function splitMessage(message, delimiter) {
  let words;
  // Пиши код ниже этой строки
  words = message.split(delimiter);
  
  
  // Пиши код выше этой строки
  return words;
}